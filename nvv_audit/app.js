const LS_KEY = "nvv_track1_audit_v1";

const state = {
  samples: NVV_AUDIT_DATA.samples,
  filtered: [],
  idx: 0,
  annotations: {},
};

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  pill.textContent = text;
  pill.className = "pill";
  if (kind === "ok") pill.classList.add("pill--ok");
  if (kind === "danger") pill.classList.add("pill--danger");
}

function stringifyShort(value) {
  if (value == null) return "";
  if (Array.isArray(value) && value.length === 0) return "[]";
  if (typeof value === "object" && Object.keys(value).length === 0) return "{}";
  return JSON.stringify(value, null, 0);
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderTaggedText(text) {
  return escapeHtml(text).replace(/\[[^\]]+\]/g, (m) => `<span class="tag">${m}</span>`);
}

function emptyAnnotation() {
  return {
    gt_audible: "",
    gt_position_ok: "",
    pred_error_type: "",
    keep_for_validation: "",
    corrected_label: "",
    notes: "",
  };
}

function getAnnotation(sample) {
  return state.annotations[sample.audit_id] || emptyAnnotation();
}

function saveLS() {
  localStorage.setItem(LS_KEY, JSON.stringify({ ts: Date.now(), annotations: state.annotations }));
}

function loadLS() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.annotations = parsed.annotations || {};
  } catch (_) {
    state.annotations = {};
  }
}

function setChipValue(group, value) {
  document.querySelectorAll(`.chipRow[data-group="${group}"] .chip`).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.value === value);
  });
}

function getFilters() {
  return {
    source: $("filterSource").value,
    dataset: $("filterDataset").value,
    bucket: $("filterBucket").value,
    status: $("filterStatus").value,
  };
}

function isDone(sample) {
  const a = getAnnotation(sample);
  return !!(a.gt_audible || a.gt_position_ok || a.pred_error_type || a.keep_for_validation || a.corrected_label || a.notes);
}

function applyFilters() {
  const f = getFilters();
  state.filtered = state.samples.filter((s) => {
    if (f.source && s.sourceGroup !== f.source) return false;
    if (f.dataset && s.dataset !== f.dataset) return false;
    if (f.bucket && s.audit_bucket !== f.bucket) return false;
    if (f.status === "todo" && isDone(s)) return false;
    if (f.status === "done" && !isDone(s)) return false;
    return true;
  });
  state.idx = Math.min(state.idx, Math.max(0, state.filtered.length - 1));
  updateStats();
  render();
}

function populateFilter(id, values) {
  const sel = $(id);
  sel.innerHTML = "";
  sel.append(new Option("全部", ""));
  values.forEach((v) => sel.append(new Option(v, v)));
}

function setupFilters() {
  populateFilter("filterSource", [...new Set(state.samples.map((s) => s.sourceGroup).filter(Boolean))].sort());
  populateFilter("filterDataset", [...new Set(state.samples.map((s) => s.dataset).filter(Boolean))].sort());
  populateFilter("filterBucket", [...new Set(state.samples.map((s) => s.audit_bucket).filter(Boolean))].sort());
  ["filterSource", "filterDataset", "filterBucket", "filterStatus"].forEach((id) => {
    $(id).addEventListener("change", applyFilters);
  });
}

function updateStats() {
  const done = state.samples.filter(isDone).length;
  const keep = state.samples.filter((s) => getAnnotation(s).keep_for_validation === "yes").length;
  const drop = state.samples.filter((s) => getAnnotation(s).keep_for_validation === "no").length;
  $("statFiltered").textContent = String(state.filtered.length);
  $("statDone").textContent = String(done);
  $("statKeep").textContent = String(keep);
  $("statDrop").textContent = String(drop);
  $("metaProgress").textContent = state.filtered.length
    ? `${state.idx + 1}/${state.filtered.length} filtered, ${done}/${state.samples.length} filled`
    : "0 filtered";
}

function render() {
  if (!state.filtered.length) {
    setStatus("无样本", "danger");
    $("metaName").textContent = "-";
    return;
  }
  const sample = state.filtered[state.idx];
  const ann = getAnnotation(sample);
  $("metaName").textContent = `${sample.audit_id} | ${sample.dataset} | ${sample.audit_bucket}`;
  $("metaPathHint").textContent = `${sample.sourceGroup} · ${sample.lang || "-"} · ${sample.utt_id} · ${sample.path}`;
  $("inpJump").value = String(state.idx + 1);
  $("btnPrev").disabled = state.idx <= 0;
  $("btnNext").disabled = state.idx >= state.filtered.length - 1;

  $("txtLabel").innerHTML = renderTaggedText(sample.label);
  $("txtPrediction").innerHTML = renderTaggedText(sample.prediction);
  $("diagGtTags").textContent = stringifyShort(sample.gt_tags);
  $("diagPredTags").textContent = stringifyShort(sample.pred_tags);
  $("diagFnTags").textContent = stringifyShort(sample.fn_tags);
  $("diagFpTags").textContent = stringifyShort(sample.fp_tags);
  $("diagSameFar").textContent = stringifyShort(sample.same_tag_far);
  $("diagWrongNear").textContent = stringifyShort(sample.wrong_tag_near);

  setChipValue("gt_audible", ann.gt_audible);
  setChipValue("gt_position_ok", ann.gt_position_ok);
  setChipValue("keep_for_validation", ann.keep_for_validation);
  $("selPredError").value = ann.pred_error_type || "";
  $("inpCorrectedLabel").value = ann.corrected_label || "";
  $("txtNotes").value = ann.notes || "";

  const audio = $("audio");
  audio.src = sample.audio;
  audio.load();
  audio.play().catch(() => {});
  setStatus(isDone(sample) ? "已填写" : "待填写", isDone(sample) ? "ok" : "info");
  updateStats();
}

function patchAnnotation(patch) {
  const sample = state.filtered[state.idx];
  if (!sample) return;
  state.annotations[sample.audit_id] = { ...getAnnotation(sample), ...patch };
  saveLS();
  updateStats();
  setStatus("已保存", "ok");
}

function toCsvCell(value) {
  const s = String(value ?? "");
  return /[,"\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}

function toCsv(rows) {
  return rows.map((row) => row.map(toCsvCell).join(",")).join("\r\n") + "\r\n";
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c !== ""));
}

function exportCsv() {
  const header = [
    "audit_id", "sourceGroup", "seq", "dataset", "lang", "audit_bucket", "audit_priority",
    "utt_id", "path", "audio", "gt_tags", "pred_tags", "fn_tags", "fp_tags",
    "label", "prediction", "gt_audible", "gt_position_ok", "pred_error_type",
    "keep_for_validation", "corrected_label", "notes",
  ];
  const rows = [header];
  state.samples.forEach((s) => {
    const a = getAnnotation(s);
    rows.push([
      s.audit_id, s.sourceGroup, s.seq, s.dataset, s.lang, s.audit_bucket, s.audit_priority,
      s.utt_id, s.path, s.audio, stringifyShort(s.gt_tags), stringifyShort(s.pred_tags),
      stringifyShort(s.fn_tags), stringifyShort(s.fp_tags), s.label, s.prediction,
      a.gt_audible, a.gt_position_ok, a.pred_error_type, a.keep_for_validation,
      a.corrected_label, a.notes,
    ]);
  });
  const blob = new Blob([toCsv(rows)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nvv_track1_audit_${new Date().toISOString().replaceAll(":", "").slice(0, 15)}.csv`;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importCsv(text) {
  const rows = parseCsv(text);
  if (!rows.length) return;
  const header = rows[0];
  const idx = (name) => header.indexOf(name);
  const idCol = idx("audit_id");
  if (idCol < 0) {
    alert("CSV 必须包含 audit_id 列");
    return;
  }
  let count = 0;
  rows.slice(1).forEach((r) => {
    const id = r[idCol];
    if (!id) return;
    state.annotations[id] = {
      gt_audible: r[idx("gt_audible")] || "",
      gt_position_ok: r[idx("gt_position_ok")] || "",
      pred_error_type: r[idx("pred_error_type")] || "",
      keep_for_validation: r[idx("keep_for_validation")] || "",
      corrected_label: r[idx("corrected_label")] || "",
      notes: r[idx("notes")] || "",
    };
    count++;
  });
  saveLS();
  applyFilters();
  alert(`已导入 ${count} 条`);
}

function setupEvents() {
  $("btnPrev").addEventListener("click", () => {
    state.idx = Math.max(0, state.idx - 1);
    render();
  });
  $("btnNext").addEventListener("click", () => {
    state.idx = Math.min(state.filtered.length - 1, state.idx + 1);
    render();
  });
  $("btnJump").addEventListener("click", () => {
    const n = parseInt($("inpJump").value, 10);
    if (!Number.isFinite(n)) return;
    state.idx = Math.max(0, Math.min(state.filtered.length - 1, n - 1));
    render();
  });
  $("inpJump").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("btnJump").click();
  });
  document.querySelectorAll(".chipRow .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".chipRow").dataset.group;
      const current = getAnnotation(state.filtered[state.idx])[group];
      const next = current === btn.dataset.value ? "" : btn.dataset.value;
      setChipValue(group, next);
      patchAnnotation({ [group]: next });
    });
  });
  $("selPredError").addEventListener("change", () => patchAnnotation({ pred_error_type: $("selPredError").value }));
  $("inpCorrectedLabel").addEventListener("input", () => patchAnnotation({ corrected_label: $("inpCorrectedLabel").value }));
  $("txtNotes").addEventListener("input", () => patchAnnotation({ notes: $("txtNotes").value }));
  $("btnExportCsv").addEventListener("click", exportCsv);
  $("btnResetLocal").addEventListener("click", () => {
    if (!confirm("清空浏览器中本页听审缓存？")) return;
    localStorage.removeItem(LS_KEY);
    state.annotations = {};
    applyFilters();
  });
  $("fileImportCsv").addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    importCsv(await file.text());
    e.target.value = "";
  });
  window.addEventListener("keydown", (e) => {
    if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); $("btnPrev").click(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); $("btnNext").click(); }
    else if (e.key === " ") {
      e.preventDefault();
      const audio = $("audio");
      audio.paused ? audio.play() : audio.pause();
    } else if (e.key === "1") patchAnnotation({ gt_audible: "yes" }), setChipValue("gt_audible", "yes");
    else if (e.key === "2") patchAnnotation({ gt_audible: "no" }), setChipValue("gt_audible", "no");
    else if (e.key === "3") patchAnnotation({ gt_audible: "uncertain" }), setChipValue("gt_audible", "uncertain");
    else if (e.key.toLowerCase() === "k") patchAnnotation({ keep_for_validation: "yes" }), setChipValue("keep_for_validation", "yes");
    else if (e.key.toLowerCase() === "d") patchAnnotation({ keep_for_validation: "no" }), setChipValue("keep_for_validation", "no");
  });
}

function init() {
  loadLS();
  setupFilters();
  setupEvents();
  state.filtered = [...state.samples];
  render();
}

init();
