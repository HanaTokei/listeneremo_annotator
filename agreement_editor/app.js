/* agreement1549 JSON 编辑器
 * 依赖：samples.js (SAMPLES.metadata + SAMPLES.samples)
 * 状态：localStorage.agreement_editor_state (覆盖 SAMPLES 的 edited 部分)
 */

const LS_KEY = "agreement_editor_state";
const EMOTIONS = ["neutral", "angry", "happy", "sad", "worried", "surprise"];
const VIS_LEVELS = [0, 1, 2, 3];
const VIS_BOOL = [0, 1];
const DEFAULT_VIDEO_BASE = "./videos/";
const LS_VIDEO_BASE = "agreement_editor_video_base";

const EMOTION_CN = { neutral: "中性", angry: "生气", happy: "快乐", sad: "悲伤", worried: "担心", surprise: "惊讶" };

// 22 维社交评估中文对照: 14 个 soc_* (社交事件) + 8 个 dim_* (人际维度)
const RELATION22_CN = {
  soc_affiliation_or_praise: "亲近/赞美",
  soc_apology_or_repair: "道歉/修复",
  soc_bad_news_or_loss: "坏消息/损失",
  soc_conflict_or_blame: "冲突/指责",
  soc_disagreement_or_rejection: "反对/拒绝",
  soc_humor_or_play: "幽默/玩笑",
  soc_information_or_explanation: "信息/解释",
  soc_low_interpersonal_load: "低人际负荷",
  soc_pressure_or_threat: "压力/威胁",
  soc_question_or_probe: "提问/试探",
  soc_request_or_directive: "请求/指令",
  soc_self_disclosure_or_vulnerability: "自我披露/脆弱",
  soc_support_or_reassurance: "支持/安慰",
  soc_unexpected_reveal: "意外揭示",
  dim_affiliation_support: "亲近/支持",
  dim_conflict_blame: "冲突/指责",
  dim_dominance_pressure: "支配/压迫",
  dim_listener_directedness: "听者指向性",
  dim_novelty_unexpectedness: "新颖/意外",
  dim_repair_reconciliation: "修复/和解",
  dim_threat_risk: "威胁/风险",
  dim_vulnerability_disclosure: "脆弱/披露",
};

const state = {
  sampleNames: [],   // ordered list
  idx: 0,            // current index
  data: {},          // full edited data (deep copy of SAMPLES)
  videoBase: DEFAULT_VIDEO_BASE,
  dirtyPaths: {},    // sampleName -> Set<path>
};

const $ = (id) => document.getElementById(id);
const el = (tag, attrs = {}, children = []) => {
  const e = document.createElement(tag);
  for (const k in attrs) {
    if (k === "class") e.className = attrs[k];
    else if (k === "style") e.style.cssText = attrs[k];
    else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
    else if (k === "value") e.value = attrs[k];
    else if (k === "checked") e.checked = !!attrs[k];
    else if (k === "html") e.innerHTML = attrs[k];
    else e.setAttribute(k, attrs[k]);
  }
  for (const c of (Array.isArray(children) ? children : [children])) {
    if (c == null) continue;
    e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return e;
};

const getPath = (obj, path) => {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) { if (cur == null) return undefined; cur = cur[p]; }
  return cur;
};
const setPath = (obj, path, value) => {
  const parts = path.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null || typeof cur[parts[i]] !== "object") cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
};
const isNullVal = (v) => v === null || v === undefined;

// LS stores only the diff: { sampleName: { "agreement_label": "happy", ... }, ... }
// Much smaller than the full data, avoids 5MB quota issues.
function loadFromLS() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) || {};
  } catch (e) { console.warn("LS parse failed", e); return null; }
}
function saveToLS() {
  try {
    // Serialize each dirty path; if no edits since last save, noop
    const payload = {};
    let any = false;
    for (const name of Object.keys(state.dirtyPaths)) {
      if (!state.dirtyPaths[name].size) continue;
      payload[name] = {};
      for (const p of state.dirtyPaths[name]) {
        payload[name][p] = getPath(state.data.samples[name], p);
      }
      any = true;
    }
    if (!any) return;
    localStorage.setItem(LS_KEY, JSON.stringify(payload));
  } catch (e) { console.error("LS save failed (quota?)", e); }
}
function mergeLSIntoState(lsDiff) {
  if (!lsDiff) return;
  for (const name of Object.keys(lsDiff)) {
    if (!state.data.samples[name]) continue;
    for (const p of Object.keys(lsDiff[name])) {
      setPath(state.data.samples[name], p, lsDiff[name][p]);
    }
  }
}
function markDirty(name, path) {
  if (!state.dirtyPaths[name]) state.dirtyPaths[name] = new Set();
  state.dirtyPaths[name].add(path);
  const card = document.querySelector(`.field[data-path="${CSS.escape(path)}"]`);
  if (card) card.classList.add("dirty");
}
function clearDirty(name) {
  state.dirtyPaths[name] = new Set();
  document.querySelectorAll(".field.dirty").forEach(n => n.classList.remove("dirty"));
}

function init() {
  // Load edited data: clone from SAMPLES, then merge any saved diffs
  state.data = { metadata: SAMPLES.metadata, samples: JSON.parse(JSON.stringify(SAMPLES.samples)) };
  const lsDiff = loadFromLS();
  mergeLSIntoState(lsDiff);
  // Order sample names
  state.sampleNames = Object.keys(state.data.samples).sort();
  if (!state.sampleNames.length) { $("formRoot").textContent = "SAMPLES 为空"; return; }

  state.videoBase = localStorage.getItem(LS_VIDEO_BASE) || DEFAULT_VIDEO_BASE;
  $("inpVideoBase").value = state.videoBase;
  $("inpVideoBase").addEventListener("change", e => {
    state.videoBase = e.target.value.trim().replace(/\\$/, "/") + (e.target.value.trim() ? "/" : "");
    localStorage.setItem(LS_VIDEO_BASE, state.videoBase);
    loadVideo();
  });

  $("btnPrev").addEventListener("click", () => goto(state.idx - 1));
  $("btnNext").addEventListener("click", () => goto(state.idx + 1));
  $("btnJump").addEventListener("click", () => {
    const v = parseInt($("inpJump").value, 10);
    if (Number.isFinite(v)) goto(v - 1);
  });
  $("inpJump").addEventListener("keydown", e => { if (e.key === "Enter") $("btnJump").click(); });
  document.addEventListener("keydown", onGlobalKey);
  $("video").addEventListener("keydown", e => e.stopPropagation());
  $("inpJump").addEventListener("keydown", e => e.stopPropagation());

  $("btnExport").addEventListener("click", exportJSON);
  $("btnReset").addEventListener("click", () => {
    if (!confirm("清空浏览器 localStorage 中的所有编辑缓存？下次打开会回到 samples.js 里的原始数据。")) return;
    localStorage.removeItem(LS_KEY);
    state.data = { metadata: SAMPLES.metadata, samples: JSON.parse(JSON.stringify(SAMPLES.samples)) };
    state.dirtyPaths = {};
    render();
  });
  $("fileImport").addEventListener("change", importJSON);

  goto(0);
  updateStats();
}

function onGlobalKey(e) {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT")) {
    if (e.key === "Escape") e.target.blur();
    return;
  }
  if (e.ctrlKey && (e.key === "s" || e.key === "S")) { e.preventDefault(); exportJSON(); return; }
  if (e.key === "ArrowLeft") { e.preventDefault(); goto(state.idx - 1); }
  else if (e.key === "ArrowRight") { e.preventDefault(); goto(state.idx + 1); }
  else if (e.key === " ") { e.preventDefault(); const v = $("video"); v.paused ? v.play() : v.pause(); }
  else if (EMOTIONS.includes(["neutral","angry","happy","sad","worried","surprise"][parseInt(e.key,10)-1] || "")) {
    setPath(state.data.samples[state.sampleNames[state.idx]], "agreement_label", EMOTIONS[parseInt(e.key,10)-1]);
    markDirty(state.sampleNames[state.idx], "agreement_label");
    saveToLS(); updateStats(); renderForm(); $("video").focus();
  }
}

function goto(newIdx) {
  newIdx = Math.max(0, Math.min(state.sampleNames.length - 1, newIdx));
  state.idx = newIdx;
  render();
}

function render() {
  const name = state.sampleNames[state.idx];
  const sample = state.data.samples[name];
  $("metaIdx").textContent = `${state.idx + 1} / ${state.sampleNames.length}`;
  $("metaName").textContent = name;
  $("pillStatus").textContent = `agreement_label: ${sample.agreement_label || "—"}`;
  $("btnPrev").disabled = state.idx === 0;
  $("btnNext").disabled = state.idx === state.sampleNames.length - 1;
  $("btnJump").disabled = false;
  $("btnExport").disabled = false;
  clearDirty(name);
  loadVideo();
  renderForm();
}

function loadVideo() {
  const name = state.sampleNames[state.idx];
  const v = $("video");
  v.muted = true;
  v.src = state.videoBase + name + ".mp4";
  v.load();
  // Wait for the new src to be loadable, then play. Calling play() immediately
  // after load() races against the new source and gets rejected with AbortError.
  const onReady = () => {
    v.removeEventListener("loadeddata", onReady);
    v.removeEventListener("error", onErr);
    const p = v.play();
    if (p && p.catch) p.catch(err => console.warn("autoplay blocked:", err && err.message));
  };
  const onErr = () => {
    v.removeEventListener("loadeddata", onReady);
    v.removeEventListener("error", onErr);
    console.warn("video load failed:", name);
  };
  v.addEventListener("loadeddata", onReady);
  v.addEventListener("error", onErr);
}

function updateStats() {
  const total = state.sampleNames.length;
  let labeled = 0, vis = 0, visNoLabel = 0;
  for (const n of state.sampleNames) {
    const s = state.data.samples[n];
    if (s.agreement_label) labeled++;
    const tv = s.visibility && s.visibility.target_visible;
    if (tv === 1) {
      vis++;
      if (!s.agreement_label) visNoLabel++;
    } else if (tv === 0) { vis++; }
  }
  $("statsBar").innerHTML = `<span>共 <b>${total}</b> 条</span><span>已标 agreement_label: <b>${labeled}</b></span><span>visible=1: <b>${vis}</b></span><span>visible=1 未标: <b>${visNoLabel}</b></span>`;
}

/* ---- form rendering ---- */

function fieldCard(path, label, controlEl, hint) {
  const card = el("div", { class: "field", "data-path": path });
  const lab = el("div", { class: "field__label" });
  lab.appendChild(document.createTextNode(label));
  lab.appendChild(el("span", { class: "path" }, path));
  card.appendChild(lab);
  card.appendChild(controlEl);
  if (hint) card.appendChild(el("div", { class: "field__hint", html: hint }));
  return card;
}

function textInput(path, value, opts = {}) {
  const i = el("input", { type: "text", value: value == null ? "" : String(value) });
  i.addEventListener("input", () => {
    const v = i.value;
    setPath(state.data.samples[state.sampleNames[state.idx]], path, v === "" && opts.emptyIsNull ? null : v);
    markDirty(state.sampleNames[state.idx], path);
    saveToLS(); updateStats();
  });
  return i;
}

function numInput(path, value, opts = {}) {
  const i = el("input", { type: "number", value: value == null ? "" : String(value), step: opts.step ?? 1, min: opts.min, max: opts.max });
  i.addEventListener("input", () => {
    const raw = i.value;
    let v;
    if (raw === "" && opts.emptyIsNull) v = null;
    else if (raw === "" && opts.emptyIsUndef) v = undefined;
    else v = Number(raw);
    setPath(state.data.samples[state.sampleNames[state.idx]], path, v);
    markDirty(state.sampleNames[state.idx], path);
    saveToLS(); updateStats();
  });
  return i;
}

function textareaInput(path, value) {
  const t = el("textarea", { rows: 3 });
  t.value = value == null ? "" : String(value);
  t.addEventListener("input", () => {
    setPath(state.data.samples[state.sampleNames[state.idx]], path, t.value);
    markDirty(state.sampleNames[state.idx], path);
    saveToLS();
  });
  return t;
}

function radioGroup(path, value, options, opts = {}) {
  const wrap = el("div", { class: "chip-row" });
  for (const opt of options) {
    const id = `r_${path.replace(/\./g, "_")}_${opt}`;
    const lab = el("label", { for: id });
    const r = el("input", { type: "radio", name: `g_${path}`, id, value: String(opt) });
    if (String(value) === String(opt)) r.checked = true;
    r.addEventListener("change", () => {
      let v = opt;
      if (opts.coerceNumber) v = Number(opt);
      if (opts.coerceBool) v = Number(opt);
      setPath(state.data.samples[state.sampleNames[state.idx]], path, v);
      markDirty(state.sampleNames[state.idx], path);
      saveToLS(); updateStats(); renderForm();
    });
    const labelText = opts.labelMap ? opts.labelMap(opt) : String(opt);
    lab.appendChild(r);
    lab.appendChild(el("span", {}, labelText));
    wrap.appendChild(lab);
  }
  return wrap;
}

function checkboxInput(path, value) {
  const i = el("input", { type: "checkbox" });
  i.checked = !!value;
  i.addEventListener("change", () => {
    setPath(state.data.samples[state.sampleNames[state.idx]], path, i.checked);
    markDirty(state.sampleNames[state.idx], path);
    saveToLS();
  });
  return i;
}

function kvTable(path, obj, opts = {}) {
  const tbl = el("table");
  const tbody = el("tbody");
  const keys = Object.keys(obj || {});
  for (const k of keys) {
    const tr = el("tr");
    const labelTd = el("td", { class: "label" });
    if (opts.labelMap && opts.labelMap[k]) {
      labelTd.appendChild(el("div", {}, opts.labelMap[k]));
      labelTd.appendChild(el("div", { class: "en-key" }, k));
    } else {
      labelTd.appendChild(document.createTextNode(k));
    }
    tr.appendChild(labelTd);
    const td = el("td");
    const v = obj[k];
    const inputPath = `${path}.${k}`;
    let input;
    if (typeof v === "number") {
      input = el("input", { type: "number", step: opts.step ?? 1, min: opts.min ?? 0, max: opts.max ?? 3, value: v });
      input.addEventListener("input", () => {
        setPath(state.data.samples[state.sampleNames[state.idx]], inputPath, Number(input.value));
        markDirty(state.sampleNames[state.idx], inputPath);
        saveToLS();
      });
    } else if (typeof v === "string") {
      input = el("input", { type: "text", value: v });
      input.addEventListener("input", () => {
        setPath(state.data.samples[state.sampleNames[state.idx]], inputPath, input.value);
        markDirty(state.sampleNames[state.idx], inputPath);
        saveToLS();
      });
    } else {
      input = el("span", {}, JSON.stringify(v));
    }
    td.appendChild(input);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  tbl.appendChild(tbody);
  return el("div", { class: "scroll-x" }, tbl);
}

function renderForm() {
  const root = $("formRoot");
  root.innerHTML = "";
  const name = state.sampleNames[state.idx];
  const s = state.data.samples[name];
  if (!s) { root.textContent = "no sample"; return; }

  // 1) agreement_label
  root.appendChild(fieldCard("agreement_label", "agreement_label (GT 情感标签)",
    radioGroup("agreement_label", s.agreement_label, EMOTIONS, { labelMap: e => `${EMOTIONS.indexOf(e)+1} ${e} (${EMOTION_CN[e]||""})` }),
    "训练集用 GT 字段。快捷键 1-6 可直接选。"));

  // 2) visibility
  const visCard = el("div", { class: "field", "data-path": "visibility" });
  const visLab = el("div", { class: "field__label" }); visLab.appendChild(document.createTextNode("visibility")); visLab.appendChild(el("span", { class: "path" }, "visibility.*"));
  visCard.appendChild(visLab);
  visCard.appendChild(el("div", { class: "field__hint", html: "target_visible 是否能看到 listener；face_visibility 脸部清晰度；visual_evidence_strength 视觉证据强度。" }));
  visCard.appendChild(el("div", { class: "field__label" }, "target_visible (0/1)"));
  visCard.appendChild(radioGroup("visibility.target_visible", s.visibility && s.visibility.target_visible, VIS_BOOL, { coerceNumber: true }));
  visCard.appendChild(el("div", { class: "field__label" }, "face_visibility (0-3)"));
  visCard.appendChild(radioGroup("visibility.face_visibility", s.visibility && s.visibility.face_visibility, VIS_LEVELS, { coerceNumber: true }));
  visCard.appendChild(el("div", { class: "field__label" }, "visual_evidence_strength (0-3)"));
  visCard.appendChild(radioGroup("visibility.visual_evidence_strength", s.visibility && s.visibility.visual_evidence_strength, VIS_LEVELS, { coerceNumber: true }));
  root.appendChild(visCard);

  // 3) raw reference labels
  root.appendChild(fieldCard("minimax_label", "minimax_label (参考)", radioGroup("minimax_label", s.minimax_label, EMOTIONS, { labelMap: e => `${EMOTIONS.indexOf(e)+1} ${e}` })));
  root.appendChild(fieldCard("w6gt378_label", "w6gt378_label (参考)", radioGroup("w6gt378_label", s.w6gt378_label, EMOTIONS, { labelMap: e => `${EMOTIONS.indexOf(e)+1} ${e}` })));
  root.appendChild(fieldCard("minimax_top_label", "minimax_top_label (参考)", radioGroup("minimax_top_label", s.minimax_top_label, EMOTIONS, { labelMap: e => `${EMOTIONS.indexOf(e)+1} ${e}` })));

  // 4) confidences
  root.appendChild(fieldCard("minimax_confidence", "minimax_confidence (0..1)", numInput("minimax_confidence", s.minimax_confidence, { step: 0.01, min: 0, max: 1 })));
  root.appendChild(fieldCard("minimax_top_confidence", "minimax_top_confidence (0..1)", numInput("minimax_top_confidence", s.minimax_top_confidence, { step: 0.01, min: 0, max: 1 })));

  // 5) source
  root.appendChild(fieldCard("minimax_source", "minimax_source", textInput("minimax_source", s.minimax_source)));

  // 6) raw availability
  root.appendChild(fieldCard("_raw_relation_available", "_raw_relation_available", checkboxInput("_raw_relation_available", s._raw_relation_available)));

  // 7) relation22
  if (s.relation22) root.appendChild(fieldCard("relation22", "relation22 (22 维社交评估, 0-3)", kvTable("relation22", s.relation22, { min: 0, max: 3, labelMap: RELATION22_CN })));

  // 8) observable_cues
  if (s.observable_cues) root.appendChild(fieldCard("observable_cues", "observable_cues (14 维视觉线索, 0-3)", kvTable("observable_cues", s.observable_cues, { min: 0, max: 3 })));

  // 9) minimax_probs
  if (s.minimax_probs) root.appendChild(fieldCard("minimax_probs", "minimax_probs (6 类, 0..1)", kvTable("minimax_probs", s.minimax_probs, { min: 0, max: 1, step: 0.001 })));

  // 10) minimax_uncertainty_summary
  root.appendChild(fieldCard("minimax_uncertainty_summary", "minimax_uncertainty_summary", textareaInput("minimax_uncertainty_summary", s.minimax_uncertainty_summary)));

  // 11) description
  if (s.description) {
    const d = s.description;
    const dCard = el("div", { class: "field", "data-path": "description" });
    const dLab = el("div", { class: "field__label" }); dLab.appendChild(document.createTextNode("description")); dLab.appendChild(el("span", { class: "path" }, "description.*"));
    dCard.appendChild(dLab);
    dCard.appendChild(el("div", { class: "field__hint", html: "⚠️ 下面的 _zh 字段在原始文件里是 GBK 误读为 UTF-8 的乱码；如需可手动修正后导出。空字符串 = null。" }));
    for (const k of ["visual_summary", "context_summary", "uncertainty_summary",
                     "visual_summary_zh", "context_summary_zh", "uncertainty_summary_zh",
                     "_label_zh", "repair_reason_cn"]) {
      if (!(k in d)) continue;
      dCard.appendChild(el("div", { class: "field__label" }, `description.${k}`));
      const path = `description.${k}`;
      const v = d[k];
      if (typeof v === "string" || v === null) {
        const isNullable = v === null || k === "repair_reason_cn";
        dCard.appendChild(textareaInput(path, v == null ? "" : v));
      } else {
        dCard.appendChild(numInput(path, v));
      }
    }
    for (const k of ["motion_amount", "context_evidence_strength", "uncertainty_level"]) {
      if (!(k in d)) continue;
      dCard.appendChild(el("div", { class: "field__label" }, `description.${k}`));
      dCard.appendChild(numInput(`description.${k}`, d[k], { min: 0, max: 3 }));
    }
    root.appendChild(dCard);
  }

  // 12) gt378
  root.appendChild(fieldCard("gt378", "gt378 (string 或 null)", textInput("gt378", s.gt378, { emptyIsNull: true }), "留空 → null"));

  // 13) w16g_prediction
  if (s.w16g_prediction) {
    const wp = s.w16g_prediction;
    const wpCard = el("div", { class: "field", "data-path": "w16g_prediction" });
    const wpLab = el("div", { class: "field__label" }); wpLab.appendChild(document.createTextNode("w16g_prediction")); wpLab.appendChild(el("span", { class: "path" }, "w16g_prediction.*"));
    wpCard.appendChild(wpLab);
    wpCard.appendChild(el("div", { class: "field__label" }, "pred"));
    wpCard.appendChild(radioGroup("w16g_prediction.pred", wp.pred, EMOTIONS, { labelMap: e => `${EMOTIONS.indexOf(e)+1} ${e}` }));
    if (wp.probs) {
      wpCard.appendChild(el("div", { class: "field__label" }, "probs (6 类, 0..1)"));
      wpCard.appendChild(kvTable("w16g_prediction.probs", wp.probs, { min: 0, max: 1, step: 0.001 }));
    }
    root.appendChild(wpCard);
  }

  // 14) _editable_keys_hint (read-only display)
  if (s._editable_keys_hint) {
    const hint = el("div", { class: "field__hint", style: "margin-top:14px" }, "_editable_keys_hint (原始文件标记，导出时保留原值): " + JSON.stringify(s._editable_keys_hint));
    root.appendChild(hint);
  }
}

/* ---- export / import ---- */

function exportJSON() {
  const payload = { metadata: state.data.metadata, samples: state.data.samples };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  a.href = URL.createObjectURL(blob);
  a.download = `agreement1549_full_edit_cn_${today}_edited.json`;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
}

function importJSON(e) {
  const f = e.target.files && e.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(reader.result);
      if (!obj.samples) throw new Error("missing samples");
      if (!confirm("导入会覆盖当前页面的所有数据（包括未导出的编辑）。是否继续？")) {
        e.target.value = ""; return;
      }
      state.data = { metadata: obj.metadata || SAMPLES.metadata, samples: obj.samples };
      state.sampleNames = Object.keys(state.data.samples).sort();
      // Reset LS: store a single huge "replaced-base" entry, but better — just clear
      // the diff cache; the imported data is now the new base
      state.dirtyPaths = {};
      localStorage.removeItem(LS_KEY);
      goto(0);
      alert("导入成功，共 " + state.sampleNames.length + " 条");
    } catch (err) {
      alert("导入失败：" + err.message);
    }
    e.target.value = "";
  };
  reader.readAsText(f, "utf-8");
}

init();
