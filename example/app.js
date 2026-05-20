/* example/training page - shows correct labels for training */

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

const state = {
  repo: "HanaTokei/listeneremo_annotator",
  branch: "main",
  dataPath: "example/data",
  files: [],
  currentIndex: 0,
  currentObjectUrl: null,
  blobCache: {},
};

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  pill.textContent = text;
  pill.style.borderColor = kind === "ok" ? "rgba(47,208,123,.55)" : "rgba(90,167,255,.35)";
  pill.style.background = kind === "ok" ? "rgba(47,208,123,.14)" : "rgba(90,167,255,.12)";
  pill.style.color = kind === "ok" ? "#dff8eb" : "#cfe4ff";
}

function loadVideoList() {
  state.files = VIDEO_LIST;
  $("btnPrev").disabled = false;
  $("btnNext").disabled = false;
  setStatus("已载入 " + state.files.length + " 条", "ok");
  setCurrent(0);
}

async function setCurrent(index) {
  if (index < 0 || index >= state.files.length) return;
  state.currentIndex = index;
  const item = state.files[index];

  $("metaName").textContent = item.fileName;
  $("metaPathHint").textContent = `标签：${item.label}（${item.labelCode}）`;
  $("metaIdx").textContent = `${index + 1} / ${state.files.length}`;
  $("labelDisplay").textContent = `${item.label}（代码 ${item.labelCode}）`;

  $("btnPrev").disabled = index <= 0;
  $("btnNext").disabled = index >= state.files.length - 1;

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
}

function setupEvents() {
  $("btnPrev").addEventListener("click", () => setCurrent(state.currentIndex - 1));
  $("btnNext").addEventListener("click", () => setCurrent(state.currentIndex + 1));

  document.querySelectorAll(".emotionBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const label = btn.dataset.label;
    const idx = state.files.findIndex(v => v.label === label);
    if (idx >= 0) setCurrent(idx);
  });
});

window.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); setCurrent(state.currentIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); setCurrent(state.currentIndex + 1); }
    if (e.key === " ") {
      e.preventDefault();
      const v = $("video");
      if (v.paused) v.play(); else v.pause();
    }
  });
}

setupEvents();
loadVideoList();