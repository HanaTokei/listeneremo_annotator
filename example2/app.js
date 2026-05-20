/* mis_top450 annotator - pure static front-end
 *
 * Key features:
 * - Videos loaded from GitHub data/ directory (no local folder selection needed)
 * - Annotate s2_visible / s2_label / s2_confidence / notes
 * - Prev/Next navigation + keyboard shortcuts
 * - Auto-save to localStorage + CSV import/export
 */

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

const state = {
  repo: "HanaTokei/listeneremo_annotator",
  branch: "main",
  dataPath: "example2/data",
  files: /** @type {Array<{idx:number, name:string, fileName:string, downloadUrl:string}>} */ ([]),
  currentIndex: 0,
  currentObjectUrl: null,
  blobCache: /** @type {Record<string, string>} */ ({}),
  annotations: /** @type {Record<string, {s2_visible:string, s2_label:string, s2_confidence:string, notes:string}>} */ ({}),
  storageKey: "mis_top450_annotator_v1",
};

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  pill.textContent = text;
  pill.style.borderColor = kind === "ok" ? "rgba(47,208,123,.55)" : "rgba(90,167,255,.35)";
  pill.style.background = kind === "ok" ? "rgba(47,208,123,.14)" : "rgba(90,167,255,.12)";
  pill.style.color = kind === "ok" ? "#dff8eb" : "#cfe4ff";
}

function setStatusDanger(text) {
  const pill = $("pillStatus");
  pill.textContent = text;
  pill.style.borderColor = "rgba(255,90,122,.55)";
  pill.style.background = "rgba(255,90,122,.16)";
  pill.style.color = "#ffe1e8";
}

function stripPrefix(fileName) {
  // "001_samplenew3_00043107.mp4" -> {idx:1, name:"samplenew3_00043107"}
  const m = fileName.match(/^(\d{3})_(.+)\.mp4$/i);
  if (!m) return null;
  return { idx: parseInt(m[1], 10), name: m[2] };
}

function escapeCsvCell(v) {
  const s = (v ?? "").toString();
  if (/[,"\r\n]/.test(s)) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

function toCsv(rows) {
  return rows.map((r) => r.map(escapeCsvCell).join(",")).join("\r\n") + "\r\n";
}

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const rows = [];
  for (const line of lines) {
    if (line.trim() === "") continue;
    const row = [];
    let i = 0;
    while (i < line.length) {
      if (line[i] === '"') {
        i++;
        let cell = "";
        while (i < line.length) {
          if (line[i] === '"') {
            if (i + 1 < line.length && line[i + 1] === '"') {
              cell += '"';
              i += 2;
              continue;
            }
            i++;
            break;
          }
          cell += line[i++];
        }
        if (i < line.length && line[i] === ",") i++;
        row.push(cell);
      } else {
        let j = i;
        while (j < line.length && line[j] !== ",") j++;
        row.push(line.slice(i, j).trim());
        i = j + 1;
      }
    }
    rows.push(row);
  }
  return rows;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(state.storageKey);
    if (!raw) return;
    const obj = JSON.parse(raw);
    if (obj && typeof obj === "object" && obj.annotations) {
      state.annotations = obj.annotations || {};
    }
  } catch (_) {
    // ignore
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(
      state.storageKey,
      JSON.stringify({
        ts: Date.now(),
        annotations: state.annotations,
      })
    );
  } catch (_) {
    // ignore
  }
}

function clearUiSelection(groupName) {
  const nodes = document.querySelectorAll(`input[name="${groupName}"]`);
  nodes.forEach((n) => (n.checked = false));
}

function getCheckedValue(groupName) {
  const node = document.querySelector(`input[name="${groupName}"]:checked`);
  return node ? node.value : "";
}

function setCheckedValue(groupName, value) {
  clearUiSelection(groupName);
  if (!value) return;
  const node = document.querySelector(`input[name="${groupName}"][value="${value}"]`);
  if (node) node.checked = true;
}

function updateStats() {
  const all = state.files.map((f) => f.name);
  let visibleFilled = 0;
  let labeled = 0;
  let visNoLabel = 0;
  for (const name of all) {
    const a = state.annotations[name];
    if (!a) continue;
    if (a.s2_visible === "0" || a.s2_visible === "1") visibleFilled++;
    if (a.s2_visible === "1" && a.s2_label) labeled++;
    if (a.s2_visible === "1" && !a.s2_label) visNoLabel++;
  }
  $("statVisible").textContent = String(visibleFilled);
  $("statLabeled").textContent = String(labeled);
  $("statVisNoLabel").textContent = String(visNoLabel);
  $("metaProgress").textContent = state.files.length
    ? `进度：${visibleFilled}/${state.files.length} 已填visible；${labeled} 已标注情绪`
    : "";
}

async function fetchVideoBlob(downloadUrl) {
  const resp = await fetch(downloadUrl);
  if (!resp.ok) throw new Error(`Failed to fetch ${downloadUrl}: ${resp.status}`);
  return resp.blob();
}

async function setCurrent(index) {
  if (index < 0 || index >= state.files.length) return;
  state.currentIndex = index;

  const item = state.files[state.currentIndex];
  $("metaName").textContent = `#${item.idx}  ${item.name}`;
  $("metaPathHint").textContent = item.fileName;

  $("btnPrev").disabled = state.currentIndex <= 0;
  $("btnNext").disabled = state.currentIndex >= state.files.length - 1;
  $("btnJump").disabled = state.files.length === 0;
  $("btnExportCsv").disabled = state.files.length === 0;
  $("btnClearVisible").disabled = state.files.length === 0;
  $("btnClearLabel").disabled = state.files.length === 0;
  $("btnClearConf").disabled = state.files.length === 0;

  // load video file
  try {
    let url = state.blobCache[item.name];
    if (!url) {
      setStatus("加载中...", "info");
      const blob = await fetchVideoBlob(item.downloadUrl);
      url = URL.createObjectURL(blob);
      state.blobCache[item.name] = url;
    }

    const video = $("video");
    video.autoplay = true;
    video.src = url;
    video.currentTime = 0;
    video.load();

    try {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          setStatusDanger("自动播放被浏览器阻止：点一次播放后再切换即可自动播");
        });
      }
    } catch (_) {
      setStatusDanger("自动播放失败：点一次播放后再切换即可自动播");
    }
  } catch (e) {
    console.error(e);
    setStatusDanger(`加载失败：${e.message}`);
  }

  const a = state.annotations[item.name] || { s2_visible: "", s2_label: "", s2_confidence: "", notes: "" };
  setCheckedValue("visible", a.s2_visible);
  setCheckedValue("label", a.s2_label);
  setCheckedValue("conf", a.s2_confidence);
  $("txtNotes").value = a.notes || "";

  updateStats();
  setStatus("已加载", "ok");
}

function ensureVisibleSelected() {
  const v = getCheckedValue("visible");
  if (v !== "1") {
    setCheckedValue("visible", "1");
  }
}

function applyCurrentAnnotation(patch) {
  const item = state.files[state.currentIndex];
  const prev = state.annotations[item.name] || { s2_visible: "", s2_label: "", s2_confidence: "", notes: "" };
  const next = { ...prev, ...patch };

  if (next.s2_visible === "0") {
    next.s2_label = "";
    next.s2_confidence = "";
    setCheckedValue("label", "");
    setCheckedValue("conf", "");
  }

  state.annotations[item.name] = next;
  saveToLocalStorage();
  updateStats();
}

function setupEvents() {
  $("btnPrev").addEventListener("click", () => setCurrent(state.currentIndex - 1));
  $("btnNext").addEventListener("click", () => setCurrent(state.currentIndex + 1));

  $("btnJump").addEventListener("click", () => {
    const v = parseInt($("inpJump").value, 10);
    if (!Number.isFinite(v)) return;
    const idx = v - 1;
    setCurrent(idx);
  });
  $("inpJump").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("btnJump").click();
  });

  document.querySelectorAll('input[name="visible"]').forEach((el) => {
    el.addEventListener("change", () => applyCurrentAnnotation({ s2_visible: getCheckedValue("visible") }));
  });
  document.querySelectorAll('input[name="label"]').forEach((el) => {
    el.addEventListener("change", () => {
      ensureVisibleSelected();
      applyCurrentAnnotation({ s2_visible: "1", s2_label: getCheckedValue("label") });
    });
  });
  document.querySelectorAll('input[name="conf"]').forEach((el) => {
    el.addEventListener("change", () => applyCurrentAnnotation({ s2_confidence: getCheckedValue("conf") }));
  });

  $("btnClearVisible").addEventListener("click", () => {
    setCheckedValue("visible", "");
    setCheckedValue("label", "");
    setCheckedValue("conf", "");
    applyCurrentAnnotation({ s2_visible: "", s2_label: "", s2_confidence: "" });
  });
  $("btnClearLabel").addEventListener("click", () => {
    setCheckedValue("label", "");
    applyCurrentAnnotation({ s2_label: "" });
  });
  $("btnClearConf").addEventListener("click", () => {
    setCheckedValue("conf", "");
    applyCurrentAnnotation({ s2_confidence: "" });
  });

  $("txtNotes").addEventListener("input", () => applyCurrentAnnotation({ notes: $("txtNotes").value }));

  $("btnExportCsv").addEventListener("click", () => exportCsv());

  $("btnResetLocal").addEventListener("click", () => {
    if (!confirm("确定清空本页面的本地标注缓存？（不会删除任何视频/CSV文件）")) return;
    localStorage.removeItem(state.storageKey);
    state.annotations = {};
    setCurrent(state.currentIndex);
  });

  $("fileImportCsv").addEventListener("change", async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const text = await f.text();
    importCsv(text);
    e.target.value = "";
  });

  window.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) {
      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCurrent(state.currentIndex - 1);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setCurrent(state.currentIndex + 1);
      return;
    }
    if (e.key === " ") {
      e.preventDefault();
      const v = $("video");
      if (v.paused) v.play();
      else v.pause();
      return;
    }
    if (e.key.toLowerCase() === "v") {
      e.preventDefault();
      setCheckedValue("visible", "1");
      applyCurrentAnnotation({ s2_visible: "1" });
      return;
    }
    if (e.key.toLowerCase() === "x") {
      e.preventDefault();
      setCheckedValue("visible", "0");
      applyCurrentAnnotation({ s2_visible: "0" });
      return;
    }
    if (/^[1-6]$/.test(e.key)) {
      e.preventDefault();
      setCheckedValue("label", e.key);
      ensureVisibleSelected();
      applyCurrentAnnotation({ s2_visible: "1", s2_label: e.key });
      return;
    }
    if (e.key.toLowerCase() === "c") {
      e.preventDefault();
      const cur = getCheckedValue("conf");
      const next = cur === "3" ? "2" : cur === "2" ? "1" : cur === "1" ? "" : "3";
      setCheckedValue("conf", next);
      applyCurrentAnnotation({ s2_confidence: next });
      return;
    }
  });

  const video = $("video");
  video.addEventListener("error", () => {
    setStatusDanger("视频解码失败/黑屏：可能是编码不兼容（建议转码为 H.264/AAC）");
  });
  video.addEventListener("loadeddata", () => {
    if (video.readyState >= 2 && (video.videoWidth === 0 || video.videoHeight === 0)) {
      setStatusDanger("无画面：可能是 MP4 编码不被浏览器支持（建议转码为 H.264/AAC）");
    }
  });
}

async function loadVideoList() {
  setStatus("加载视频列表...", "info");

  try {
    const videos = VIDEO_LIST.map((v, i) => ({
      idx: i + 1,
      name: v.fileName.replace(/\.mp4$/i, ""),
      fileName: v.fileName,
      downloadUrl: `https://raw.githubusercontent.com/${state.repo}/${state.branch}/${state.dataPath}/${v.fileName}`,
    }));

    state.files = videos;
    setStatus(`已载入 ${videos.length} 条视频`, "ok");

    $("btnPrev").disabled = false;
    $("btnNext").disabled = false;
    $("btnJump").disabled = false;
    $("btnExportCsv").disabled = false;
    $("btnClearVisible").disabled = false;
    $("btnClearLabel").disabled = false;
    $("btnClearConf").disabled = false;

    await setCurrent(0);
  } catch (e) {
    console.error(e);
    setStatusDanger(`加载失败：${e.message}`);
  }
}

function exportCsv() {
  if (!state.files.length) return;
  const header = ["idx", "video_file", "name", "s2_visible", "s2_label", "s2_confidence", "notes"];
  const rows = [header];
  for (const f of state.files) {
    const a = state.annotations[f.name] || { s2_visible: "", s2_label: "", s2_confidence: "", notes: "" };
    rows.push([
      String(f.idx),
      f.fileName,
      f.name,
      a.s2_visible || "",
      a.s2_label || "",
      a.s2_confidence || "",
      a.notes || "",
    ]);
  }
  const csv = toCsv(rows);
  const ts = new Date().toISOString().replaceAll(":", "").slice(0, 15);
  downloadText(`mis_top450_annotations_${ts}.csv`, csv);
}

function importCsv(text) {
  const rows = parseCsv(text);
  if (!rows.length) return;
  const header = rows[0].map((x) => x.trim());
  const idxName = header.indexOf("name");
  const idxVis = header.indexOf("s2_visible");
  const idxLab = header.indexOf("s2_label");
  const idxConf = header.indexOf("s2_confidence");
  const idxNotes = header.indexOf("notes");

  if (idxName < 0) {
    alert("导入失败：CSV 必须包含列 name");
    return;
  }

  let applied = 0;
  for (const r of rows.slice(1)) {
    const name = (r[idxName] || "").trim();
    if (!name) continue;
    const patch = {
      s2_visible: idxVis >= 0 ? (r[idxVis] || "").trim() : "",
      s2_label: idxLab >= 0 ? (r[idxLab] || "").trim() : "",
      s2_confidence: idxConf >= 0 ? (r[idxConf] || "").trim() : "",
      notes: idxNotes >= 0 ? (r[idxNotes] || "") : "",
    };
    state.annotations[name] = patch;
    applied++;
  }

  saveToLocalStorage();
  updateStats();
  alert(`已导入 ${applied} 条标注（按 name 对齐）。`);
  setCurrent(state.currentIndex);
}

function init() {
  loadFromLocalStorage();
  setupEvents();
  loadVideoList();
}

init();