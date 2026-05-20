/* example2 - self-test page: 50 videos, user annotates, then check confusion matrix */

function $(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el;
}

const state = {
  repo: "HanaTokei/listeneremo_annotator",
  branch: "main",
  dataPath: "example2/data",
  files: [],
  currentIndex: 0,
  blobCache: {},
  annotations: {},
  storageKey: "mis_top450_example2_v1",
};

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  if (!pill) return;
  pill.textContent = text;
  pill.style.borderColor = kind === "ok" ? "rgba(47,208,123,.55)" : kind === "danger" ? "rgba(255,90,122,.55)" : "rgba(90,167,255,.35)";
  pill.style.background = kind === "ok" ? "rgba(47,208,123,.14)" : kind === "danger" ? "rgba(255,90,122,.16)" : "rgba(90,167,255,.12)";
  pill.style.color = kind === "ok" ? "#dff8eb" : kind === "danger" ? "#ffe1e8" : "#cfe4ff";
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(state.storageKey);
    if (!raw) return;
    const obj = JSON.parse(raw);
    if (obj && obj.annotations) state.annotations = obj.annotations;
  } catch (_) {}
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(state.storageKey, JSON.stringify({ ts: Date.now(), annotations: state.annotations }));
  } catch (_) {}
}

function updateProgress() {
  const total = state.files.length;
  const annotated = Object.keys(state.annotations).length;
  const metaProgress = $("metaProgress");
  if (metaProgress) metaProgress.textContent = `已标注：${annotated}/${total}`;
  const btnShowMatrix = $("btnShowMatrix");
  if (btnShowMatrix) btnShowMatrix.disabled = annotated < total;
  const btnExportCsv = $("btnExportCsv");
  if (btnExportCsv) btnExportCsv.disabled = annotated === 0;
}

async function setCurrent(index) {
  if (index < 0 || index >= state.files.length) return;
  state.currentIndex = index;
  const item = state.files[index];

  const metaName = $("metaName");
  if (metaName) metaName.textContent = item.fileName;
  const metaIdx = $("metaIdx");
  if (metaIdx) metaIdx.textContent = `${index + 1} / ${state.files.length}`;
  const btnPrev = $("btnPrev");
  if (btnPrev) btnPrev.disabled = index <= 0;
  const btnNext = $("btnNext");
  if (btnNext) btnNext.disabled = index >= state.files.length - 1;

  // restore user annotation
  document.querySelectorAll('input[name="label"]').forEach(n => n.checked = false);
  const userLabel = state.annotations[item.fileName];
  if (userLabel) {
    const node = document.querySelector(`input[name="label"][value="${userLabel}"]`);
    if (node) node.checked = true;
  }

  // load video
  try {
    let url = state.blobCache[item.fileName];
    if (!url) {
      setStatus("加载中...", "info");
      const resp = await fetch(`https://raw.githubusercontent.com/${state.repo}/${state.branch}/${state.dataPath}/${item.fileName}`);
      if (!resp.ok) throw new Error("加载失败 " + resp.status);
      const blob = await resp.blob();
      url = URL.createObjectURL(blob);
      state.blobCache[item.fileName] = url;
    }
    const video = $("video");
    if (!video) return;
    video.src = url;
    video.currentTime = 0;
    video.load();
    video.play().catch(() => {});
    setStatus("已加载", "ok");
  } catch (e) {
    setStatus("加载失败：" + e.message, "danger");
  }

  updateProgress();
}

function applyAnnotation(labelCode) {
  const item = state.files[state.currentIndex];
  state.annotations[item.fileName] = labelCode;
  saveToLocalStorage();
  updateProgress();
}

function setupEvents() {
  const btnPrev = $("btnPrev");
  if (btnPrev) btnPrev.addEventListener("click", () => setCurrent(state.currentIndex - 1));
  const btnNext = $("btnNext");
  if (btnNext) btnNext.addEventListener("click", () => setCurrent(state.currentIndex + 1));

  const btnClearLabel = $("btnClearLabel");
  if (btnClearLabel) {
    btnClearLabel.addEventListener("click", () => {
      document.querySelectorAll('input[name="label"]').forEach(n => n.checked = false);
      const item = state.files[state.currentIndex];
      if (item) {
        delete state.annotations[item.fileName];
        saveToLocalStorage();
        updateProgress();
      }
    });
  }

  document.querySelectorAll('input[name="label"]').forEach(el => {
    el.addEventListener("change", () => applyAnnotation(el.value));
  });

  const btnShowMatrix = $("btnShowMatrix");
  if (btnShowMatrix) btnShowMatrix.addEventListener("click", showConfusionMatrix);

  const btnExportCsv = $("btnExportCsv");
  if (btnExportCsv) {
    btnExportCsv.addEventListener("click", exportCsv);
  }

  const fileImportCsv = $("fileImportCsv");
  if (fileImportCsv) {
    fileImportCsv.addEventListener("change", async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const text = await f.text();
      const count = importCsv(text);
      alert(`已导入 ${count} 条标注，可点"混淆矩阵"查看`);
      e.target.value = "";
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); setCurrent(state.currentIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); setCurrent(state.currentIndex + 1); }
    if (e.key === " ") {
      e.preventDefault();
      const v = $("video");
      if (v) { if (v.paused) v.play(); else v.pause(); }
    }
    if (/^[1-6]$/.test(e.key)) {
      e.preventDefault();
      const node = document.querySelector(`input[name="label"][value="${e.key}"]`);
      if (node) { node.checked = true; applyAnnotation(e.key); }
    }
  });
}

function showConfusionMatrix() {
  const labels = ['1','2','3','4','5','6'];
  const labelNames = { '1':'neutral','2':'angry','3':'happy','4':'sad','5':'worried','6':'surprise' };
  const matrix = {};
  labels.forEach(r => { matrix[r] = {}; labels.forEach(c => { matrix[r][c] = 0; }); });

  let total = 0, correct = 0;
  state.files.forEach(item => {
    const user = state.annotations[item.fileName];
    const gt = item.labelCode;
    if (user) {
      matrix[gt][user]++;
      total++;
      if (user === gt) correct++;
    }
  });

  const acc = total > 0 ? (correct / total * 100).toFixed(1) : 0;

  let html = `<div style="margin-bottom:12px;font-weight:bold">准确率：${acc}%（${correct}/${total}）</div>`;
  html += `<table class="confusionTable"><tr><th>真实\\预测</th>`;
  labels.forEach(c => { html += `<th>${labelNames[c]}</th>`; });
  html += `</tr>`;
  labels.forEach(gt => {
    html += `<tr><td class="rowHeader">${labelNames[gt]}</td>`;
    labels.forEach(user => {
      const val = matrix[gt][user];
      const highlight = gt === user && val > 0 ? ' style="background:rgba(47,208,123,.3)"' : '';
      html += `<td${highlight}>${val}</td>`;
    });
    html += `</tr>`;
  });
  html += `</table>`;
  html += `<div style="margin-top:12px;font-size:12px;color:var(--muted)">行=官方标签，列=你的标注。对角线为正确数。</div>`;

  const matrixContainer = $("matrixContainer");
  const matrixContent = $("matrixContent");
  if (matrixContainer) matrixContainer.style.display = "block";
  if (matrixContent) matrixContent.innerHTML = html;
}

function exportCsv() {
  const header = ["fileName", "groundTruth", "userLabel", "labelName"];
  const rows = [header];
  state.files.forEach(item => {
    const user = state.annotations[item.fileName] || "";
    const labelName = user ? { '1':'neutral','2':'angry','3':'happy','4':'sad','5':'worried','6':'surprise' }[user] : "";
    rows.push([item.fileName, item.labelCode, user, labelName]);
  });
  const csv = rows.map(r => r.join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "example2_annotations.csv";
  a.click();
  URL.revokeObjectURL(url);
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

function importCsv(text) {
  const rows = parseCsv(text);
  if (!rows.length) return 0;
  const header = rows[0].map(x => x.trim().toLowerCase());
  const idxFname = header.indexOf("filename");
  const idxUser = header.indexOf("userlabel");

  if (idxFname < 0 || idxUser < 0) {
    alert("CSV格式错误：需要 fileName 和 userLabel 列");
    return 0;
  }

  let count = 0;
  for (let i = 1; i < rows.length; i++) {
    const fname = (rows[i][idxFname] || "").trim();
    const user = (rows[i][idxUser] || "").trim();
    if (!fname || !user) continue;
    state.annotations[fname] = user;
    count++;
  }

  saveToLocalStorage();
  updateProgress();
  if (state.files.length > 0 && state.currentIndex >= 0) {
    setCurrent(state.currentIndex);
  }
  return count;
}

function init() {
  state.files = VIDEO_LIST;
  loadFromLocalStorage();
  setupEvents();
  setStatus("已载入 " + state.files.length + " 条视频", "ok");
  setCurrent(0);
}

init();