const LS_KEY = "nvv_track1_clean_v1";

const CANONICAL_TAGS = [
  "[breath]",
  "[sniff]",
  "[laugh]",
  "[cry]",
  "[cough]",
  "[throat clearing]",
  "[sneeze]",
  "[sigh]",
  "[gasp]",
  "[snore]",
  "[yawn]",
  "[hum]",
  "[moan]",
  "[hiss]",
  "[lipsmack]",
  "[burp]",
];

const state = {
  samples: [],
  filtered: [],
  idx: 0,
  records: {},
  localAudioByName: {},
  localAudioUrls: {},
  manifestName: "bundled_nvv_audit",
};

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

function basename(path) {
  return String(path || "").split(/[\\/]/).filter(Boolean).pop() || "";
}

function stripExt(name) {
  return String(name || "").replace(/\.[^.]+$/, "");
}

function isHttpUrl(value) {
  return /^https?:\/\//i.test(String(value || ""));
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

function stringifyShort(value) {
  if (value == null || value === "") return "";
  if (Array.isArray(value) && value.length === 0) return "[]";
  if (typeof value === "object" && Object.keys(value).length === 0) return "{}";
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 0);
}

function setStatus(text, kind = "info") {
  const pill = $("pillStatus");
  pill.textContent = text;
  pill.className = "pill";
  if (kind === "ok") pill.classList.add("pill--ok");
  if (kind === "warn") pill.classList.add("pill--warn");
  if (kind === "danger") pill.classList.add("pill--danger");
}

function emptyRecord() {
  return {
    decision: "",
    gt_status: "",
    split_use: "",
    corrected_label: "",
    notes: "",
    updated_at: "",
  };
}

function getRecord(sample) {
  return state.records[sample.clean_id] || emptyRecord();
}

function isDone(sample) {
  const r = getRecord(sample);
  return !!(r.decision || r.gt_status || r.corrected_label || r.notes || r.split_use);
}

function saveLS() {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      ts: Date.now(),
      manifestName: state.manifestName,
      records: state.records,
      autoNext: $("chkAutoNext").checked,
    })
  );
}

function loadLS() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.records = parsed.records || {};
    $("chkAutoNext").checked = !!parsed.autoNext;
  } catch (_) {
    state.records = {};
  }
}

function extractTags(text) {
  const counts = {};
  for (const m of String(text || "").matchAll(/\[[^\]]+\]/g)) {
    counts[m[0]] = (counts[m[0]] || 0) + 1;
  }
  return counts;
}

function normalizeSample(row, seq, sourceName) {
  const path = row.path || row.audio_path || row.wav || row.file || row.file_path || "";
  const audio = row.audio || row.audio_url || row.url || path;
  const id =
    row.clean_id ||
    row.audit_id ||
    row.utt_id ||
    row.id ||
    row.uid ||
    stripExt(basename(audio || path)) ||
    `${sourceName || "sample"}_${seq}`;
  const label = row.label || row.asr || row.text_with_nvvs || row.text || row.gt || row.original_label || "";
  const prediction = row.prediction || row.pred || row.hypothesis || row.model_output || "";
  const audioBase = basename(audio || path);
  let audioUrl = "";
  if (row.audio_url) audioUrl = row.audio_url;
  else if (isHttpUrl(audio)) audioUrl = audio;

  return {
    clean_id: String(id),
    seq,
    dataset: row.dataset || row.source_dataset || row.corpus || "",
    sourceGroup: row.sourceGroup || row.source_group || row.source || "",
    audit_bucket: row.audit_bucket || row.bucket || "",
    audit_priority: row.audit_priority || "",
    utt_id: row.utt_id || row.id || "",
    path,
    audio,
    audio_key: audioBase,
    audio_url: audioUrl,
    label,
    prediction,
    gt_tags: row.gt_tags || extractTags(label),
    pred_tags: row.pred_tags || extractTags(prediction),
    raw: row,
  };
}

function defaultSamples() {
  const auditData = typeof NVV_AUDIT_DATA !== "undefined" ? NVV_AUDIT_DATA : null;
  const data = auditData && Array.isArray(auditData.samples) ? auditData.samples : [];
  return data.map((s, i) => {
    const row = { ...s, audio_url: s.audio ? `../nvv_audit/${s.audio}` : "" };
    return normalizeSample(row, i + 1, "bundled_nvv_audit");
  });
}

function setChipValue(group, value) {
  document.querySelectorAll(`.chipRow[data-group="${group}"] .chip`).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.value === value);
  });
}

function populateFilter(id, values, allText = "全部") {
  const sel = $(id);
  const prev = sel.value;
  sel.innerHTML = "";
  sel.append(new Option(allText, ""));
  values.forEach((v) => sel.append(new Option(v, v)));
  if ([...sel.options].some((o) => o.value === prev)) sel.value = prev;
}

function setupFilterOptions() {
  populateFilter("filterDataset", [...new Set(state.samples.map((s) => s.dataset).filter(Boolean))].sort());
  populateFilter("filterGtStatus", ["clean", "wrong_text", "wrong_tag", "tag_not_audible", "missing_tag", "position_shift", "audio_bad", "uncertain"]);
  populateFilter("filterTag", CANONICAL_TAGS);
}

function hasPlayableAudio(sample) {
  if (sample.audio_key && state.localAudioByName[sample.audio_key]) return true;
  if (sample.audio_key && state.localAudioByName[stripExt(sample.audio_key)]) return true;
  return !!sample.audio_url || isHttpUrl(sample.audio);
}

function getFilters() {
  return {
    search: $("filterSearch").value.trim().toLowerCase(),
    dataset: $("filterDataset").value,
    decision: $("filterDecision").value,
    gtStatus: $("filterGtStatus").value,
    tag: $("filterTag").value,
    audio: $("filterAudio").value,
  };
}

function applyFilters() {
  const f = getFilters();
  state.filtered = state.samples.filter((s) => {
    const r = getRecord(s);
    if (f.dataset && s.dataset !== f.dataset) return false;
    if (f.decision === "todo" && isDone(s)) return false;
    if (f.decision && f.decision !== "todo" && r.decision !== f.decision) return false;
    if (f.gtStatus && r.gt_status !== f.gtStatus) return false;
    if (f.tag && !(s.label.includes(f.tag) || (r.corrected_label || "").includes(f.tag) || s.prediction.includes(f.tag))) return false;
    if (f.audio === "ready" && !hasPlayableAudio(s)) return false;
    if (f.audio === "missing" && hasPlayableAudio(s)) return false;
    if (f.search) {
      const hay = [s.clean_id, s.utt_id, s.dataset, s.sourceGroup, s.audit_bucket, s.path, s.label, s.prediction, r.corrected_label, r.notes]
        .join("\n")
        .toLowerCase();
      if (!hay.includes(f.search)) return false;
    }
    return true;
  });
  state.idx = Math.min(state.idx, Math.max(0, state.filtered.length - 1));
  updateStats();
  render();
}

function updateStats() {
  const done = state.samples.filter(isDone).length;
  const keep = state.samples.filter((s) => getRecord(s).decision === "keep").length;
  const fix = state.samples.filter((s) => getRecord(s).decision === "fix").length;
  const drop = state.samples.filter((s) => getRecord(s).decision === "drop").length;
  const uncertain = state.samples.filter((s) => getRecord(s).decision === "uncertain").length;
  $("statFiltered").textContent = String(state.filtered.length);
  $("statDone").textContent = String(done);
  $("statKeep").textContent = String(keep);
  $("statFix").textContent = String(fix);
  $("statDrop").textContent = String(drop);
  $("statUncertain").textContent = String(uncertain);
  $("metaProgress").textContent = state.filtered.length
    ? `${state.idx + 1}/${state.filtered.length} filtered, ${done}/${state.samples.length} done`
    : `0/${state.samples.length}`;
}

function resolveAudioSrc(sample) {
  const keys = [sample.audio_key, stripExt(sample.audio_key), basename(sample.path), stripExt(basename(sample.path))].filter(Boolean);
  for (const key of keys) {
    const file = state.localAudioByName[key];
    if (!file) continue;
    if (!state.localAudioUrls[key]) state.localAudioUrls[key] = URL.createObjectURL(file);
    return state.localAudioUrls[key];
  }
  if (sample.audio_url) return sample.audio_url;
  if (isHttpUrl(sample.audio)) return sample.audio;
  return "";
}

function render() {
  if (!state.filtered.length) {
    setStatus("无样本", "danger");
    $("metaName").textContent = "-";
    $("metaPathHint").textContent = "";
    $("audio").removeAttribute("src");
    $("txtOriginalLabel").innerHTML = "";
    $("txtPrediction").innerHTML = "";
    $("txtCorrectedLabel").value = "";
    return;
  }

  const sample = state.filtered[state.idx];
  const record = getRecord(sample);
  const corrected = record.corrected_label || "";
  const audioSrc = resolveAudioSrc(sample);

  $("metaName").textContent = `${sample.clean_id} | ${sample.dataset || "-"} | ${sample.audit_bucket || "-"}`;
  $("metaPathHint").textContent = `${sample.sourceGroup || "-"} · ${sample.utt_id || "-"} · ${sample.path || sample.audio || "-"}`;
  $("inpJump").value = String(state.idx + 1);
  $("btnPrev").disabled = state.idx <= 0;
  $("btnNext").disabled = state.idx >= state.filtered.length - 1;

  $("txtOriginalLabel").innerHTML = renderTaggedText(sample.label);
  $("txtPrediction").innerHTML = renderTaggedText(sample.prediction);
  $("txtCorrectedLabel").value = corrected;
  $("txtNotes").value = record.notes || "";
  $("selGtStatus").value = record.gt_status || "";
  setChipValue("decision", record.decision);
  setChipValue("split_use", record.split_use);

  $("infoDataset").textContent = sample.dataset || "";
  $("infoSource").textContent = sample.sourceGroup || "";
  $("infoBucket").textContent = sample.audit_bucket || "";
  $("infoUtt").textContent = sample.utt_id || "";
  $("infoGtTags").textContent = stringifyShort(sample.gt_tags);
  $("infoPredTags").textContent = stringifyShort(sample.pred_tags);

  const audio = $("audio");
  if (audioSrc) {
    audio.src = audioSrc;
    audio.load();
    audio.play().catch(() => {});
    setStatus(isDone(sample) ? "已处理" : "待处理", isDone(sample) ? "ok" : "info");
  } else {
    audio.removeAttribute("src");
    audio.load();
    setStatus("未匹配音频", "warn");
  }
  updateStats();
}

function patchRecord(patch, options = {}) {
  const sample = state.filtered[state.idx];
  if (!sample) return;
  const next = { ...getRecord(sample), ...patch, updated_at: new Date().toISOString() };
  state.records[sample.clean_id] = next;
  saveLS();
  updateStats();
  setStatus("已保存", "ok");
  if (options.next && $("chkAutoNext").checked) nextItem();
}

function currentSample() {
  return state.filtered[state.idx] || null;
}

function fillCorrectedLabel(value) {
  $("txtCorrectedLabel").value = value || "";
  patchRecord({ corrected_label: $("txtCorrectedLabel").value });
  $("txtCorrectedLabel").focus();
}

function insertAtCursor(textarea, text) {
  const start = textarea.selectionStart ?? textarea.value.length;
  const end = textarea.selectionEnd ?? textarea.value.length;
  const before = textarea.value.slice(0, start);
  const after = textarea.value.slice(end);
  const leftPad = before && !/\s$/.test(before) ? " " : "";
  const rightPad = after && !/^\s/.test(after) ? " " : "";
  textarea.value = `${before}${leftPad}${text}${rightPad}${after}`;
  const pos = before.length + leftPad.length + text.length + rightPad.length;
  textarea.selectionStart = pos;
  textarea.selectionEnd = pos;
  textarea.focus();
  patchRecord({ corrected_label: textarea.value });
}

function prevItem() {
  if (state.idx > 0) {
    state.idx -= 1;
    render();
  }
}

function nextItem() {
  if (state.idx < state.filtered.length - 1) {
    state.idx += 1;
    render();
  }
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
        i += 1;
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

function csvToObjects(text) {
  const rows = parseCsv(text);
  if (!rows.length) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((row) => {
    const obj = {};
    header.forEach((h, i) => {
      obj[h] = row[i] ?? "";
    });
    return obj;
  });
}

function parseManifest(text, fileName) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (/\.csv$/i.test(fileName)) return csvToObjects(text);
  if (/\.json$/i.test(fileName) || trimmed[0] === "{") {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) return parsed;
    if (Array.isArray(parsed.samples)) return parsed.samples;
    if (Array.isArray(parsed.data)) return parsed.data;
    throw new Error("JSON must be an array or contain samples/data array");
  }
  return trimmed.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function mergeImportedRecords(rows) {
  for (const row of rows) {
    const id = row.clean_id || row.audit_id || row.utt_id || row.id || row.uid;
    if (!id) continue;
    if (!("decision" in row) && !("gt_status" in row) && !("cleaned_label" in row) && !("corrected_label" in row)) continue;
    state.records[String(id)] = {
      ...getRecord({ clean_id: String(id) }),
      decision: row.decision || row.keep_decision || "",
      gt_status: row.gt_status || "",
      split_use: row.split_use || "",
      corrected_label: row.corrected_label || row.cleaned_label || "",
      notes: row.notes || "",
      updated_at: row.updated_at || new Date().toISOString(),
    };
  }
}

async function importManifest(file) {
  const text = await file.text();
  const rows = parseManifest(text, file.name);
  if (!rows.length) throw new Error("No rows found");
  mergeImportedRecords(rows);
  state.samples = rows.map((row, i) => normalizeSample(row, i + 1, file.name));
  state.manifestName = file.name.replace(/\.[^.]+$/, "");
  state.idx = 0;
  setupFilterOptions();
  applyFilters();
  saveLS();
  setStatus(`已导入 ${state.samples.length} 条`, "ok");
}

function downloadText(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function outputRows() {
  return state.samples.map((s) => {
    const r = getRecord(s);
    const cleanedLabel = r.corrected_label || s.label;
    const keep = r.decision === "keep" || r.decision === "fix";
    return {
      clean_id: s.clean_id,
      utt_id: s.utt_id,
      dataset: s.dataset,
      sourceGroup: s.sourceGroup,
      audit_bucket: s.audit_bucket,
      path: s.path,
      audio: s.audio,
      original_label: s.label,
      prediction: s.prediction,
      gt_tags: s.gt_tags,
      pred_tags: s.pred_tags,
      decision: r.decision,
      gt_status: r.gt_status,
      split_use: r.split_use,
      cleaned_label: cleanedLabel,
      keep_for_training: keep ? "yes" : "no",
      notes: r.notes,
      updated_at: r.updated_at,
    };
  });
}

function exportJsonl() {
  const text = outputRows().map((row) => JSON.stringify(row)).join("\n") + "\n";
  const stamp = new Date().toISOString().replaceAll(":", "").slice(0, 15);
  downloadText(`nvv_cleaned_${state.manifestName}_${stamp}.jsonl`, text, "application/x-ndjson;charset=utf-8");
}

function exportCsv() {
  const header = [
    "clean_id",
    "utt_id",
    "dataset",
    "sourceGroup",
    "audit_bucket",
    "path",
    "audio",
    "original_label",
    "prediction",
    "gt_tags",
    "pred_tags",
    "decision",
    "gt_status",
    "split_use",
    "cleaned_label",
    "keep_for_training",
    "notes",
    "updated_at",
  ];
  const rows = [header];
  outputRows().forEach((row) => {
    rows.push(header.map((h) => stringifyShort(row[h])));
  });
  const stamp = new Date().toISOString().replaceAll(":", "").slice(0, 15);
  downloadText(`nvv_cleaned_${state.manifestName}_${stamp}.csv`, toCsv(rows), "text/csv;charset=utf-8");
}

function loadAudioDir(files) {
  state.localAudioByName = {};
  for (const file of files) {
    if (!/\.(wav|mp3|flac|m4a|ogg|aac)$/i.test(file.name)) continue;
    state.localAudioByName[file.name] = file;
    state.localAudioByName[stripExt(file.name)] = file;
  }
  Object.values(state.localAudioUrls).forEach((url) => URL.revokeObjectURL(url));
  state.localAudioUrls = {};
  applyFilters();
  setStatus(`已匹配音频目录 ${Object.keys(state.localAudioByName).length / 2} 个文件`, "ok");
}

function buildTagPalette() {
  const box = $("tagPalette");
  box.innerHTML = "";
  CANONICAL_TAGS.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn tagBtn";
    btn.textContent = tag;
    btn.addEventListener("click", () => insertAtCursor($("txtCorrectedLabel"), tag));
    box.append(btn);
  });
}

function bindEvents() {
  $("btnPrev").addEventListener("click", prevItem);
  $("btnNext").addEventListener("click", nextItem);
  $("btnJump").addEventListener("click", () => {
    const n = Number($("inpJump").value);
    if (Number.isFinite(n) && n >= 1 && n <= state.filtered.length) {
      state.idx = n - 1;
      render();
    }
  });
  $("inpJump").addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") $("btnJump").click();
  });
  $("btnCopyGt").addEventListener("click", () => {
    const s = currentSample();
    if (s) fillCorrectedLabel(s.label);
  });
  $("btnCopyPred").addEventListener("click", () => {
    const s = currentSample();
    if (s) fillCorrectedLabel(s.prediction);
  });
  $("btnStripTags").addEventListener("click", () => {
    const text = $("txtCorrectedLabel").value || (currentSample() ? currentSample().label : "");
    fillCorrectedLabel(text.replace(/\s*\[[^\]]+\]\s*/g, " ").replace(/\s+/g, " ").trim());
  });
  $("txtCorrectedLabel").addEventListener("input", () => patchRecord({ corrected_label: $("txtCorrectedLabel").value }));
  $("txtNotes").addEventListener("input", () => patchRecord({ notes: $("txtNotes").value }));
  $("selGtStatus").addEventListener("change", () => patchRecord({ gt_status: $("selGtStatus").value }));
  $("chkAutoNext").addEventListener("change", saveLS);

  document.querySelectorAll(".chipRow .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".chipRow").dataset.group;
      const value = btn.dataset.value;
      patchRecord({ [group]: getRecord(currentSample())[group] === value ? "" : value });
      render();
    });
  });

  $("btnMarkKeep").addEventListener("click", () => {
    const s = currentSample();
    patchRecord(
      {
        decision: "keep",
        gt_status: getRecord(s).gt_status || "clean",
        split_use: getRecord(s).split_use || "train",
        corrected_label: getRecord(s).corrected_label || "",
      },
      { next: true }
    );
    render();
  });
  $("btnMarkFix").addEventListener("click", () => {
    const s = currentSample();
    patchRecord(
      {
        decision: "fix",
        split_use: getRecord(s).split_use || "train",
        corrected_label: $("txtCorrectedLabel").value || (s ? s.label : ""),
      },
      { next: true }
    );
    render();
  });
  $("btnMarkDrop").addEventListener("click", () => {
    patchRecord({ decision: "drop", split_use: "none" }, { next: true });
    render();
  });

  ["filterSearch", "filterDataset", "filterDecision", "filterGtStatus", "filterTag", "filterAudio"].forEach((id) => {
    $(id).addEventListener("input", applyFilters);
    $(id).addEventListener("change", applyFilters);
  });

  $("fileImportManifest").addEventListener("change", async (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    try {
      await importManifest(file);
    } catch (err) {
      console.error(err);
      setStatus(`导入失败: ${err.message}`, "danger");
    } finally {
      ev.target.value = "";
    }
  });
  $("fileAudioDir").addEventListener("change", (ev) => {
    loadAudioDir([...(ev.target.files || [])]);
    ev.target.value = "";
  });
  $("btnExportJsonl").addEventListener("click", exportJsonl);
  $("btnExportCsv").addEventListener("click", exportCsv);
  $("btnResetLocal").addEventListener("click", () => {
    if (!confirm("清空本页面浏览器缓存里的清洗记录？")) return;
    state.records = {};
    localStorage.removeItem(LS_KEY);
    applyFilters();
  });

  document.addEventListener("keydown", (ev) => {
    const tag = document.activeElement && document.activeElement.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    if (typing) return;
    if (ev.key === "ArrowLeft") prevItem();
    if (ev.key === "ArrowRight") nextItem();
    if (ev.key === " ") {
      ev.preventDefault();
      const audio = $("audio");
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    }
    if (ev.key.toLowerCase() === "k") $("btnMarkKeep").click();
    if (ev.key.toLowerCase() === "f") $("btnMarkFix").click();
    if (ev.key.toLowerCase() === "d") $("btnMarkDrop").click();
  });
}

function init() {
  state.samples = defaultSamples();
  loadLS();
  buildTagPalette();
  setupFilterOptions();
  bindEvents();
  applyFilters();
  if (!state.samples.length) setStatus("无默认样本，可导入清单", "warn");
}

init();
