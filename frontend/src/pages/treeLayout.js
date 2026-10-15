// ============================================================================
// Stable Sumi-e Knowledge Tree — layout engine (pure, deterministic, no React)
// ----------------------------------------------------------------------------
// The whole folder skeleton is positioned ONCE from the vault tree and never
// moves as you navigate: every branch's world position depends only on its own
// path ancestry, never on which node is focused. Navigation therefore just
// moves the camera + changes what is *revealed*, so the tree never morphs.
//
// Geometry: a bounded radial canopy. Depth maps to a fixed radius ring, siblings
// split their parent's angular sector weighted by subtree size, and child limbs
// attach at staggered points along the parent bough (so boughs don't fan from a
// single knuckle).
// ============================================================================

const APEX = { x: 0, y: 120 };
const ROOT_ORIGIN = { x: 0, y: 400 };

export const AMBIENT_DEPTH = 1; // top-level domains always drawn for context
export const MAX_LEAVES = 22;

function hashf(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = (h ^ s.charCodeAt(i)) >>> 0;
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h % 1000) / 1000;
}

function weight(node) {
  return (node.noteCount || 0) + 1;
}

function radiusFor(depth) {
  return 118 + (depth - 1) * 104;
}

export function bezierPoint(p0, c1, c2, p3, t) {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * c1.x + c * c2.x + d * p3.x,
    y: a * p0.y + b * c1.y + c * c2.y + d * p3.y,
  };
}

function recurse(node, depth, parentStart, iv, out) {
  const mid = (iv[0] + iv[1]) / 2;
  const half = (iv[1] - iv[0]) / 2;
  const jitter = half > 0.01 ? (hashf(node.path) - 0.5) * (half * 0.3) : 0;
  const angle = mid + jitter;

  const R = radiusFor(depth);
  const tip = { x: APEX.x + Math.cos(angle) * R, y: APEX.y + Math.sin(angle) * R };
  const start = parentStart;
  const perp = angle + Math.PI / 2;
  const dx = tip.x - start.x;
  const dy = tip.y - start.y;
  const curve = Math.sin(depth * 1.3 + hashf(node.path) * 6) * Math.min(34, R * 0.15);
  const cp1 = {
    x: start.x + dx * 0.36 + Math.cos(perp) * curve,
    y: start.y + dy * 0.36 + Math.sin(perp) * curve,
  };
  const cp2 = { x: start.x + dx * 0.74, y: start.y + dy * 0.74 };
  const strokeWidth = Math.max(2.0, 14.0 * Math.pow(0.6, depth - 1));

  const branch = {
    path: node.path,
    name: node.name,
    code: node.code || extractCode(node.name),
    depth,
    start,
    cp1,
    cp2,
    tip,
    angle,
    strokeWidth,
    noteCount: node.noteCount || 0,
    notes: node.notes || [],
    children: [],
    parent: null,
  };
  out.branches.push(branch);
  out.byPath.set(node.path, branch);

  const kids = node.children || [];
  if (kids.length) {
    const pad = (iv[1] - iv[0]) * 0.1;
    const s0 = iv[0] + pad;
    const s1 = iv[1] - pad;
    const ws = kids.map(weight);
    const tot = ws.reduce((a, b) => a + b, 0) || 1;
    let cur = s0;
    kids.forEach((k, j) => {
      const infl = (s1 - s0) * (ws[j] / tot);
      // Staggered attachment along the parent bough (0.30 .. 0.98 of its length).
      const t = 0.3 + 0.68 * ((j + 0.5) / kids.length);
      const attach = bezierPoint(start, cp1, cp2, tip, t);
      const child = recurse(k, depth + 1, attach, [cur, cur + infl], out);
      child.parent = branch.path;
      branch.children.push(child.path);
      cur += infl;
    });
  }
  return branch;
}

function extractCode(name) {
  const m = /^(\d{3})\b/.exec(name || "");
  return m ? m[1] : null;
}

export function buildTreeLayout(treeData) {
  const out = {
    apex: APEX,
    rootOrigin: ROOT_ORIGIN,
    branches: [],
    byPath: new Map(),
    trunk: null,
  };

  const trunk = {
    path: "",
    name: treeData.name || "Vault Root",
    code: null,
    depth: 0,
    start: ROOT_ORIGIN,
    cp1: { x: -18, y: 330 },
    cp2: { x: 18, y: 235 },
    tip: APEX,
    angle: -Math.PI / 2,
    strokeWidth: 26,
    noteCount: treeData.noteCount || 0,
    notes: treeData.notes || [],
    children: [],
    parent: null,
  };
  out.trunk = trunk;
  out.branches.push(trunk);
  out.byPath.set("", trunk);

  const domains = treeData.children || [];
  const n = domains.length;
  if (n > 0) {
    const a0 = (-172 * Math.PI) / 180;
    const a1 = (-8 * Math.PI) / 180;
    const w = (a1 - a0) / n;
    domains.forEach((d, i) => {
      const child = recurse(d, 1, APEX, [a0 + i * w, a0 + (i + 1) * w], out);
      child.parent = "";
      trunk.children.push(child.path);
    });
  }

  // World bounding box (for camera framing).
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const b of out.branches) {
    minX = Math.min(minX, b.start.x, b.tip.x);
    minY = Math.min(minY, b.start.y, b.tip.y);
    maxX = Math.max(maxX, b.start.x, b.tip.x);
    maxY = Math.max(maxY, b.start.y, b.tip.y);
  }
  out.bounds = { minX, minY, maxX, maxY };

  // Representative notes per branch (subtree sample) so ambient foliage still
  // reads as leaves even when a folder holds its notes in descendants.
  const collect = (b) => {
    const picked = [];
    for (const n of b.notes) { picked.push(n); if (picked.length >= 6) break; }
    if (picked.length < 6) {
      for (const cpath of b.children) {
        const cb = out.byPath.get(cpath);
        if (!cb) continue;
        for (const n of cb.sampleNotes) { picked.push(n); if (picked.length >= 6) break; }
        if (picked.length >= 6) break;
      }
    }
    b.sampleNotes = picked;
  };
  for (let i = out.branches.length - 1; i >= 0; i--) collect(out.branches[i]);

  return out;
}

// ----------------------------------------------------------------------------
// Reveal logic: which branches are drawn for a given focus path.
// ----------------------------------------------------------------------------
export function buildReveal(layout, focusPath) {
  const focus = focusPath || "";
  const seg = focus ? focus.split("/") : [];
  const spine = new Set([""]);
  for (let i = 1; i <= seg.length; i++) spine.add(seg.slice(0, i).join("/"));

  const focusBranch = layout.byPath.get(focus) || layout.trunk;
  const revealDepth = Math.max(focusBranch.depth + 1, AMBIENT_DEPTH);

  const draw = new Set();
  for (const b of layout.branches) {
    if (b.depth === 0) { draw.add(b.path); continue; }
    if (b.depth <= AMBIENT_DEPTH) { draw.add(b.path); continue; }
    if (spine.has(b.path)) { draw.add(b.path); continue; }
    if (b.depth <= revealDepth && spine.has(b.parent)) { draw.add(b.path); continue; }
  }

  return {
    spine,
    focus,
    focusBranch,
    revealDepth,
    draw,
    isSpine: (p) => spine.has(p),
    isFocusChild: (p) => {
      const b = layout.byPath.get(p);
      return !!b && b.parent === focus && p !== "";
    },
    // A branch is "frontier" if none of its children are drawn.
    isFrontier: (b) => !b.children.some((c) => draw.has(c)),
  };
}

// ----------------------------------------------------------------------------
// Bamboo-leaf sprigs for a branch's direct notes (笹葉 Sasa-ha).
// ----------------------------------------------------------------------------
export function leafSprig(branch, maxLeaves = MAX_LEAVES, notesOverride = null) {
  const notes = notesOverride || branch.notes || [];
  const leaves = [];
  if (notes.length === 0) return leaves;
  const count = Math.min(maxLeaves, notes.length);
  const fanSpan = count === 1 ? 0 : Math.min(Math.PI * 0.78, 0.45 + count * 0.09);

  for (let i = 0; i < count; i++) {
    const ratio = count === 1 ? 0 : i / (count - 1) - 0.5;
    const angle = branch.angle + ratio * fanSpan;
    const tier = i % 2;
    const twigLength = tier === 0 ? 44 : 72;
    const base = {
      x: branch.tip.x + Math.cos(angle) * twigLength,
      y: branch.tip.y + Math.sin(angle) * twigLength,
    };
    const length = tier === 0 ? 32 : 38;
    const width = tier === 0 ? 9 : 11;
    const tip = { x: base.x + Math.cos(angle) * length, y: base.y + Math.sin(angle) * length };
    leaves.push({
      id: notes[i].id,
      title: notes[i].title,
      note: notes[i],
      twigStart: branch.tip,
      base,
      tip,
      center: { x: (base.x + tip.x) / 2, y: (base.y + tip.y) / 2 },
      angle,
      length,
      width,
      branchPath: branch.path,
      branchName: branch.name,
      domainCode: branch.code,
    });
  }
  return leaves;
}

// Category label anchor (left/right aligned to the bough tip).
export function branchLabel(branch) {
  const isLeft = Math.cos(branch.angle) < 0;
  return {
    x: branch.tip.x + (isLeft ? -26 : 26),
    y: branch.tip.y - 16,
    align: isLeft ? "right" : "left",
  };
}
