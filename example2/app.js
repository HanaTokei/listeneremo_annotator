/* example2 - self-test page: annotate 50 videos and check confusion matrix */

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
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
  pill.textContent = text;
  pill.style.borderColor = kind === "ok" ? "rgba(47,208,123,.55)" : "rgba(90,167,255,.35)";
  pill.style.background = kind === "ok" ? "rgba(47,208,123,.14)" : "rgba(90,167,255,.12)";
  pill.style.color = kind === "ok" ? "#dff8eb" : "#cfe4ff";
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(state.storageKey);
    if (raw) {
      const obj = JSON.parse(raw);
      if (obj && obj.annotations) {
        state.annotations = obj.annotations;
      }
    }
  } catch (_) {}
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(state.storageKey, JSON.stringify({
      ts: Date.now(),
      annotations: state.annotations,
    }));
  } catch (_) {}
}

function updateProgress() {
  const total = state.files.length;
  const annotated = Object.keys(state.annotations).filter(k => state.annotations[k]).length;
  $("metaProgress").textContent = `已标注：${annotated}/${total}`;
  $("btnShowMatrix").disabled = annotated < total;
}

async function setCurrent(index) {
  if (index < 0 || index >= state.files.length) return;
  state.currentIndex = index;
  const item = state.files[index];

  $("metaName").textContent = item.fileName;
  $("metaIdx").textContent = `${index + 1} / ${state.files.length}`;
  $("btnPrev").disabled = index <= 0;
  $("btnNext").disabled = index >= state.files.length - 1;

  // restore user annotation
  const userLabel = state.annotations[item.fileName] || "";
  document.querySelectorAll('input[name="label"]').forEach(n => n.checked = false);
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
      if (!resp.ok) throw new Error("加载失败");
      const blob = await resp.blob();
      url = URL.createObjectURL(blob);
      state.blobCache[item.fileName] = url;
    }
    const video = $("video");
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
  $("btnPrev").addEventListener("click", () => setCurrent(state.currentIndex - 1));
  $("btnNext").addEventListener("click", () => setCurrent(state.currentIndex + 1));

  $("btnClearLabel").addEventListener("click", () => {
    document.querySelectorAll('input[name="label"]').forEach(n => n.checked = false);
    const item = state.files[state.currentIndex];
    delete state.annotations[item.fileName];
    saveToLocalStorage();
    updateProgress();
  });

  document.querySelectorAll('input[name="label"]').forEach(el => {
    el.addEventListener("change", () => applyAnnotation(el.value));
  });

  $("btnExportCsv").addEventListener("click", exportCsv);
  $("btnShowMatrix").addEventListener("click", showConfusionMatrix);

  window.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); setCurrent(state.currentIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); setCurrent(state.currentIndex + 1); }
    if (e.key === " ") {
      e.preventDefault();
      const v = $("video");
      if (v.paused) v.play(); else v.pause();
    }
    if (/^[1-6]$/.test(e.key)) {
      e.preventDefault();
      const node = document.querySelector(`input[name="label"][value="${e.key}"]`);
      if (node) { node.checked = true; applyAnnotation(e.key); }
    }
  });
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
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

  $("matrixContainer").style.display = "block";
  $("matrixContent").innerHTML = html;
}

function exportCsv() {
  const labelNames = { "1":"neutral","2":"angry","3":"happy","4":"sad","5":"worried","6":"surprise" };
  const header = ["idx","fileName","gt_code","gt_labelName","user_code","user_labelName"];
  const rows = [header];
  state.files.forEach((item, i) => {
    const user = state.annotations[item.fileName] || "";
    rows.push([String(i+1), item.fileName, item.labelCode, item.label, user, labelNames[user]||""]);
  });
  const csv = rows.map(r => r.map(v => /[,"\r\n]/.test(v) ? `"${v.replaceAll('"','""')}"` : v).join(",")).join("\r\n") + "\r\n";
  const ts = new Date().toISOString().replaceAll(":","").slice(0,15);
  downloadText(`example2_annotations_${ts}.csv`, csv);
}

function updateProgress() {
  const total = state.files.length;
  const annotated = Object.keys(state.annotations).filter(k => state.annotations[k]).length;
  $("metaProgress").textContent = `已标注：${annotated}/${total}`;
  $("btnExportCsv").disabled = annotated < total;
  $("btnShowMatrix").disabled = annotated < total;
}

function init() {
  state.files = VIDEO_LIST;
  loadFromLocalStorage();
  setupEvents();
  setStatus("已载入 " + state.files.length + " 条视频", "ok");
  setCurrent(0);
}

init();