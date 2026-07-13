/* combined_top572 - 修正标注子页面
 *
 * 视频从 GitHub Pages 加载（H.264/AAC），原 label 只读，人工给修正 label + 置信度 + 备注。
 * 修正结果存 localStorage，可导出 CSV 复用。
 */

function $(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el;
}

const state = {
  repo: "HanaTokei/listeneremo_annotator",
  branch: "main",
  dataPath: "combined_top572/data",
  files: [],
  currentIndex: 0,
  currentObjectUrl: null,
  blobCache: {},
  // { [name]: { corr_code, confidence, notes, ts } }
  corrections: {},
  storageKey: "combined_top572_corrections_v1",
};

const CODE2NAME = { "1": "neutral", "2": "angry", "3": "happy", "4": "sad", "5": "worried", "6": "surprise" };
const NAME2CODE = { neutral: "1", angry: "2", happy: "3", sad: "4", worried: "5", surprise: "6" };

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  if (!pill) return;
  pill.textContent = text;
  pill.style.borderColor = kind === "ok" ? "rgba(47,208,123,.55)" : kind === "danger" ? "rgba(255,90,122,.55)" : "rgba(90,167,255,.35)";
  pill.style.background = kind === "ok" ? "rgba(47,208,123,.14)" : kind === "danger" ? "rgba(255,90,122,.16)" : "rgba(90,167,255,.12)";
  pill.style.color = kind === "ok" ? "#dff8eb" : kind === "danger" ? "#ffe1e8" : "#cfe4ff";
}

function clearRadioGroup(name) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((n) => (n.checked = false));
}

function setRadioGroup(name, value) {
  clearRadioGroup(name);
  if (!value) return;
  const node = document.querySelector(`input[name="${name}"][value="${value}"]`);
  if (node) node.checked = true;
}

function getRadioGroup(name) {
  const node = document.querySelector(`input[name="${name}"]:checked`);
  return node ? node.value : "";
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(state.storageKey);
    if (!raw) return;
    const obj = JSON.parse(raw);
    if (obj && obj.corrections) state.corrections = obj.corrections;
  } catch (_) {}
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(state.storageKey, JSON.stringify({ ts: Date.now(), corrections: state.corrections }));
  } catch (_) {}
}

function updateStats() {
  let corrected = 0, agree = 0;
  for (const f of state.files) {
    const c = state.corrections[f.name];
    if (c && c.corr_code) {
      corrected++;
      if (c.corr_code === f.labelCode) agree++;
    }
  }
  const pending = state.files.length - corrected;
  $("statCorrected").textContent = String(corrected);
  $("statPending").textContent = String(pending);
  $("statAgree").textContent = String(agree);
  $("btnExportCsv").disabled = corrected === 0;
}

async function setCurrent(index) {
  if (index < 0 || index >= state.files.length) return;
  state.currentIndex = index;
  const item = state.files[index];

  $("metaName").textContent = `#${item.idx}  ${item.name}`;
  $("metaFileName").textContent = item.fileName;
  $("metaIdx").textContent = `${index + 1} / ${state.files.length}`;
  $("origIdx").textContent = `原 idx #${item.idx} · 原 labelCode ${item.labelCode}`;
  $("origLabelDisplay").textContent = `${item.label}（${item.labelCode}）`;

  $("btnPrev").disabled = index <= 0;
  $("btnNext").disabled = index >= state.files.length - 1;
  $("btnJump").disabled = state.files.length === 0;

  // restore correction
  const c = state.corrections[item.name] || { corr_code: "", confidence: "", notes: "" };
  setRadioGroup("corr", c.corr_code);
  setRadioGroup("conf", c.confidence);
  $("txtNotes").value = c.notes || "";

  // load video
  try {
    let url = state.blobCache[item.fileName];
    if (!url) {
      setStatus("加载中...", "info");
      const resp = await fetch(`https://raw.githubusercontent.com/${state.repo}/${state.branch}/${state.dataPath}/${item.fileName}`);
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const blob = await resp.blob();
      url = URL.createObjectURL(blob);
      state.blobCache[item.fileName] = url;
    }
    const video = $("video");
    if (state.currentObjectUrl) URL.revokeObjectURL(state.currentObjectUrl);
    state.currentObjectUrl = url;
    video.autoplay = true;
    video.src = url;
    video.currentTime = 0;
    video.load();
    video.play().catch(() => {
      setStatus("自动播放被阻止：点一次播放后再切换即可", "danger");
    });
    setStatus("已加载", "ok");
  } catch (e) {
    setStatus("加载失败：" + e.message + "（检查 data/ 是否已上传）", "danger");
  }

  updateStats();
}

function applyCorrection(patch) {
  const item = state.files[state.currentIndex];
  if (!item) return;
  const prev = state.corrections[item.name] || { corr_code: "", confidence: "", notes: "" };
  const next = { ...prev, ...patch, ts: Date.now() };
  state.corrections[item.name] = next;
  saveToLocalStorage();
  updateStats();
}

function setupEvents() {
  $("btnPrev").addEventListener("click", () => setCurrent(state.currentIndex - 1));
  $("btnNext").addEventListener("click", () => setCurrent(state.currentIndex + 1));
  $("btnJump").addEventListener("click", () => {
    const v = parseInt($("inpJump").value, 10);
    if (!Number.isFinite(v)) return;
    setCurrent(v - 1);
  });
  $("inpJump").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("btnJump").click();
  });

  document.querySelectorAll('input[name="corr"]').forEach((el) => {
    el.addEventListener("change", () => applyCorrection({ corr_code: getRadioGroup("corr") }));
  });
  document.querySelectorAll('input[name="conf"]').forEach((el) => {
    el.addEventListener("change", () => applyCorrection({ confidence: getRadioGroup("conf") }));
  });
  $("txtNotes").addEventListener("input", () => applyCorrection({ notes: $("txtNotes").value }));

  $("btnAgreeOrig").addEventListener("click", () => {
    const item = state.files[state.currentIndex];
    if (!item) return;
    setRadioGroup("corr", item.labelCode);
    applyCorrection({ corr_code: item.labelCode });
  });
  $("btnClearCorr").addEventListener("click", () => {
    clearRadioGroup("corr");
    clearRadioGroup("conf");
    $("txtNotes").value = "";
    const item = state.files[state.currentIndex];
    if (item) {
      state.corrections[item.name] = { corr_code: "", confidence: "", notes: "", ts: Date.now() };
      saveToLocalStorage();
      updateStats();
    }
  });

  $("btnResetLocal").addEventListener("click", () => {
    if (!confirm("确定清空本页面的本地修正缓存？（不会删除视频/CSV）")) return;
    localStorage.removeItem(state.storageKey);
    state.corrections = {};
    setCurrent(state.currentIndex);
  });

  $("btnExportCsv").addEventListener("click", exportCsv);

  $("fileImportCsv").addEventListener("change", async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const text = await f.text();
    const n = importCsv(text);
    alert(`已导入 ${n} 条修正（按 name 对齐）`);
    e.target.value = "";
  });

  const video = $("video");
  video.addEventListener("error", () => {
    setStatus("视频解码失败（建议确认是 H.264/AAC mp4）", "danger");
  });

  window.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;

    if (e.key === "ArrowLeft") { e.preventDefault(); setCurrent(state.currentIndex - 1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); setCurrent(state.currentIndex + 1); return; }
    if (e.key === " ") {
      e.preventDefault();
      if (video.paused) video.play(); else video.pause();
      return;
    }
    if (/^[1-6]$/.test(e.key)) {
      e.preventDefault();
      setRadioGroup("corr", e.key);
      applyCorrection({ corr_code: e.key });
      return;
    }
    if (e.key === "0") {
      e.preventDefault();
      const item = state.files[state.currentIndex];
      if (item) {
        setRadioGroup("corr", item.labelCode);
        applyCorrection({ corr_code: item.labelCode });
      }
      return;
    }
    if (e.key.toLowerCase() === "c") {
      e.preventDefault();
      const cur = getRadioGroup("conf");
      const next = cur === "3" ? "2" : cur === "2" ? "1" : cur === "1" ? "" : "3";
      setRadioGroup("conf", next);
      applyCorrection({ confidence: next });
      return;
    }
    if (e.key.toLowerCase() === "x") {
      e.preventDefault();
      $("btnClearCorr").click();
      return;
    }
  });
}

function escapeCsvCell(v) {
  const s = (v ?? "").toString();
  if (/[,"\r\n]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
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
            if (i + 1 < line.length && line[i + 1] === '"') { cell += '"'; i += 2; continue; }
            i++; break;
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

function exportCsv() {
  const header = ["idx", "fileName", "name", "orig_label", "orig_code", "corr_label", "corr_code", "agree", "confidence", "notes"];
  const rows = [header];
  for (const f of state.files) {
    const c = state.corrections[f.name] || { corr_code: "", confidence: "", notes: "" };
    const corrCode = c.corr_code || "";
    const corrName = corrCode ? CODE2NAME[corrCode] : "";
    const agree = corrCode && corrCode === f.labelCode ? "1" : (corrCode ? "0" : "");
    rows.push([
      String(f.idx),
      f.fileName,
      f.name,
      f.label,
      f.labelCode,
      corrName,
      corrCode,
      agree,
      c.confidence || "",
      c.notes || "",
    ]);
  }
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `combined_top572_corrections_${new Date().toISOString().replaceAll(":", "").slice(0, 15)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importCsv(text) {
  const rows = parseCsv(text);
  if (!rows.length) return 0;
  const header = rows[0].map((x) => x.trim());
  const idxName = header.indexOf("name");
  const idxCorr = header.indexOf("corr_code");
  const idxConf = header.indexOf("confidence");
  const idxNotes = header.indexOf("notes");
  if (idxName < 0 || idxCorr < 0) {
    alert("导入失败：CSV 必须包含列 name 和 corr_code");
    return 0;
  }
  let n = 0;
  for (let i = 1; i < rows.length; i++) {
    const name = (rows[i][idxName] || "").trim();
    const corr = (rows[i][idxCorr] || "").trim();
    if (!name || !corr) continue;
    state.corrections[name] = {
      corr_code: corr,
      confidence: idxConf >= 0 ? (rows[i][idxConf] || "").trim() : "",
      notes: idxNotes >= 0 ? (rows[i][idxNotes] || "") : "",
      ts: Date.now(),
    };
    n++;
  }
  saveToLocalStorage();
  updateStats();
  if (state.currentIndex >= 0) setCurrent(state.currentIndex);
  return n;
}

function init() {
  state.files = VIDEO_LIST;
  loadFromLocalStorage();
  setupEvents();
  setStatus(`已载入 ${state.files.length} 条`, "ok");
  setCurrent(0);
}

init();
