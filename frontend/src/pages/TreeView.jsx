import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api.js";
import { getTree } from "../lib/gardenData.js";
import {
  buildTreeLayout,
  buildReveal,
  leafSprig,
  bezierPoint,
  MAX_LEAVES,
} from "./treeLayout.js";

// ============================================================================
// Sumi-e Knowledge Tree (水墨画)
// ----------------------------------------------------------------------------
// A stable, bounded radial ink-canopy. The whole folder skeleton is positioned
// once (see ./treeLayout.js) and NEVER moves as you navigate — branch focus
// only moves the camera and changes what is revealed. Rendering is imperative
// (two stacked canvases) with zero React re-renders during pan/zoom/hover:
//   • scene canvas  — paper + boughs + foliage + labels (redrawn on change)
//   • overlay canvas — hover/selection highlights + cursor ring (cheap)
// The camera eases toward a target and the rAF loop stops when everything is
// idle, so the page costs nothing while you read a note.
// ============================================================================

function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n, f) => (cs.getPropertyValue(n) || f).trim();
  return {
    paper: v("--paper", "#ffffff"),
    ink: v("--ink", "#111113"),
    soft: v("--ink-soft", "#3f3f46"),
    mute: v("--ink-mute", "#71717a"),
    faint: v("--ink-faint", "#a1a1aa"),
    accent: v("--accent", "#002d62"),
  };
}

export default function TreeView() {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPath = params.get("path") || "";

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const overlayRef = useRef(null);
  const dimsRef = useRef({ w: 1, h: 1 });
  const [dimsVersion, setDimsVersion] = useState(0);

  const cameraRef = useRef({ x: 0, y: 0, zoom: 0.9 });
  const targetRef = useRef({ x: 0, y: 0, zoom: 0.9 });
  const cursorRef = useRef(null); // {x,y} screen coords
  const hoverRef = useRef(null); // hit target
  const mocLinksRef = useRef(null); // Map<noteId, Set<linkedId>> from /api/graph/
  const mocHoverRef = useRef(null); // {id, targets} while hovering a MOC leaf
  const touchSelRef = useRef(null); // tap-to-preview selection on touch/pen
  const hoverCardCache = useRef({ key: "" }); // measured hover-card layout
  const rafRef = useRef(null);
  const sceneDirty = useRef(true);
  const overlayDirty = useRef(true);
  const dragRef = useRef({ active: false, moved: false, lx: 0, ly: 0, downX: 0, downY: 0 });
  const touchDistRef = useRef(0);

  // ---- data ----
  const fetchTreeData = useCallback(() => {
    setLoading(true);
    setLoadError(false);
    getTree()
      .then((data) => {
        setTree(data);
        setLoadError(false);
      })
      .catch((err) => {
        console.error("Tree API error:", err);
        setLoadError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchTreeData();
  }, [fetchTreeData]);

  const layout = useMemo(() => (tree ? buildTreeLayout(tree) : null), [tree]);

  const scene = useMemo(() => {
    if (!layout) return null;
    const reveal = buildReveal(layout, currentPath);
    const branches = layout.branches.filter((b) => reveal.draw.has(b.path));
    const foliage = [];
    for (const b of branches) {
      if (b.depth === 0) continue;
      const bold = reveal.isSpine(b.path) || reveal.isFocusChild(b.path);
      const isFocus = b.path === reveal.focus;
      if (!bold && !isFocus) continue; // ambient boughs carry no foliage
      const frontier = reveal.isFrontier(b);
      let notes = null;
      let cap = 6;
      if (frontier) {
        // Frontier boughs show their own notes, or a representative sample of
        // their subtree so the canopy never reads as bare spokes.
        notes = b.notes && b.notes.length ? b.notes : b.sampleNotes;
        cap = MAX_LEAVES;
      } else if (isFocus) {
        notes = b.notes;
        cap = 8;
      }
      if (!notes || notes.length === 0) continue;
      for (const leaf of leafSprig(b, cap, notes)) {
        foliage.push({ ...leaf, bold: true });
      }
    }
    return { layout, reveal, branches, foliage, activePath: currentPath };
  }, [layout, currentPath]);

  // Keep the latest scene in a ref for the imperative loop + handlers.
  const sceneRefData = useRef(null);
  sceneRefData.current = scene;

  // ---- frame scheduler ----
  const renderNow = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const cam = cameraRef.current;
      const tgt = targetRef.current;
      let moved = false;
      const dx = tgt.x - cam.x;
      const dy = tgt.y - cam.y;
      const dz = tgt.zoom - cam.zoom;
      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2 || Math.abs(dz) > 0.0015) {
        cam.x += dx * 0.18;
        cam.y += dy * 0.18;
        cam.zoom += dz * 0.18;
        moved = true;
      } else if (cam.x !== tgt.x || cam.y !== tgt.y || cam.zoom !== tgt.zoom) {
        cam.x = tgt.x;
        cam.y = tgt.y;
        cam.zoom = tgt.zoom;
        moved = true;
      }

      if (sceneDirty.current || moved) {
        try {
          drawScene();
        } catch (err) {
          console.error("tree draw error:", err);
        }
        sceneDirty.current = false;
        overlayDirty.current = true;
      }
      if (overlayDirty.current) {
        try {
          drawOverlay();
        } catch (err) {
          console.error("tree overlay error:", err);
        }
        overlayDirty.current = false;
      }
      if (moved) renderNow();
    });
  }, []);

  // Wikilink adjacency (fetched once): powers "hover a MOC → highlight its links".
  // NOTE: must live below `renderNow` — the deps array is evaluated during render.
  useEffect(() => {
    let alive = true;
    api
      .graph()
      .then((g) => {
        if (!alive) return;
        const map = new Map();
        for (const e of g.edges || []) {
          const src = e.source && typeof e.source === "object" ? e.source.id : e.source;
          const tgt = e.target && typeof e.target === "object" ? e.target.id : e.target;
          if (!src || !tgt) continue;
          let set = map.get(src);
          if (!set) map.set(src, (set = new Set()));
          set.add(tgt);
        }
        mocLinksRef.current = map;
        updateMocHover(hoverRef.current);
        overlayDirty.current = true;
        renderNow();
      })
      .catch(() => {
        mocLinksRef.current = null; // link highlighting degrades silently
      });
    return () => {
      alive = false;
    };
  }, [renderNow]);

  // Hovering a MOC leaf collects the ids of everything it links to.
  function updateMocHover(hit) {
    if (hit && hit.type === "leaf" && hit.leaf.isMoc) {
      const targets = mocLinksRef.current ? mocLinksRef.current.get(hit.leaf.id) : null;
      mocHoverRef.current = { id: hit.leaf.id, targets: targets || new Set() };
    } else {
      mocHoverRef.current = null;
    }
  }

  // ---- canvas sizing ----
  // NOTE: the container only exists once loading finishes, so this must re-run
  // when `loading` flips to false (otherwise dimsRef stays at its 1×1 default).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const apply = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const changed = rect.width !== dimsRef.current.w || rect.height !== dimsRef.current.h;
        dimsRef.current = { w: rect.width, h: rect.height };
        sceneDirty.current = true;
        overlayDirty.current = true;
        renderNow();
        if (changed) setDimsVersion((v) => v + 1);
      }
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [renderNow, loading, loadError]);

  // ---- recolour on theme toggle ----
  useEffect(() => {
    const obs = new MutationObserver(() => {
      sceneDirty.current = true;
      overlayDirty.current = true;
      renderNow();
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [renderNow]);

  // ---- camera focus when the path changes ----
  useEffect(() => {
    if (!layout || !scene) return;
    hoverRef.current = null;
    mocHoverRef.current = null;
    touchSelRef.current = null;
    const { h: vh, w: vw } = dimsRef.current;
    const focus = scene.reveal.focusBranch;
    const pts = [];
    if (currentPath === "") {
      pts.push(layout.apex, layout.rootOrigin);
      for (const b of layout.branches) {
        if (b.depth !== 1) continue;
        pts.push(b.tip, foliageExtent(b));
      }
    } else {
      const parent = layout.byPath.get(focus.parent) || layout.trunk;
      pts.push(parent.tip, focus.start, focus.tip, foliageExtent(focus));
      if (focus.depth <= 2) pts.push(layout.rootOrigin);
      for (const cp of focus.children) {
        const cb = layout.byPath.get(cp);
        if (!cb) continue;
        pts.push(cb.tip, foliageExtent(cb));
      }
    }
    const box = padBox(bbox(pts), 110);
    const zoom = clamp(Math.min(vw / Math.max(box.w, 1), vh / Math.max(box.h, 1)), 0.28, 2.6);
    targetRef.current = { x: box.cx, y: box.cy, zoom };
    renderNow();
  }, [currentPath, layout, scene, renderNow, dimsVersion]);

  // ---- helpers shared by draw + hit-test ----
  function screenToWorld(sx, sy) {
    const { w, h } = dimsRef.current;
    const c = cameraRef.current;
    return { x: (sx - w / 2) / c.zoom + c.x, y: (sy - h / 2) / c.zoom + c.y };
  }

  // ------------------------------------------------------------------
  // Scene painter
  // ------------------------------------------------------------------
  function drawScene() {
    const canvas = sceneRef.current;
    const s = sceneRefData.current;
    if (!canvas) return;
    const { w, h } = dimsRef.current;
    if (w < 2 || h < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    const pal = readPalette();
    const { x: cx, y: cy, zoom } = cameraRef.current;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = pal.paper;
    ctx.fillRect(0, 0, w, h);

    if (!s) return;
    const { layout: L } = s;

    // world transform
    ctx.save();
    ctx.translate(w / 2 - cx * zoom, h / 2 - cy * zoom);
    ctx.scale(zoom, zoom);

    drawWashi(ctx, L, pal);
    drawRipples(ctx, L, pal);

    // trunk
    drawBrush(ctx, L.trunk.start, L.trunk.cp1, L.trunk.cp2, L.trunk.tip, 26, 10, pal.ink, 0.95);

    // boughs
    for (const b of s.branches) {
      if (b.depth === 0) continue;
      const bold = s.reveal.isSpine(b.path) || s.reveal.isFocusChild(b.path);
      const active = b.path === s.reveal.focus;
      const color = active ? pal.accent : bold ? pal.ink : pal.faint;
      const alpha = bold ? 0.95 : 0.16;
      drawBrush(ctx, b.start, b.cp1, b.cp2, b.tip, b.strokeWidth, Math.max(1.4, b.strokeWidth * 0.5), color, alpha);
      // knuckle
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.arc(b.tip.x, b.tip.y, Math.max(1.6, b.strokeWidth * 0.28), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // foliage
    for (const leaf of s.foliage) drawLeaf(ctx, leaf, pal);

    ctx.restore();
  }

  function drawOverlay() {
    const canvas = overlayRef.current;
    const s = sceneRefData.current;
    if (!canvas) return;
    const { w, h } = dimsRef.current;
    if (w < 2 || h < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    const pal = readPalette();
    const { x: cx, y: cy, zoom } = cameraRef.current;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (!s) return;
    ctx.save();
    ctx.translate(w / 2 - cx * zoom, h / 2 - cy * zoom);
    ctx.scale(zoom, zoom);

    // MOC hover: ink vines to every visible leaf the hub links to.
    const moc = mocHoverRef.current;
    if (moc) {
      const src = s.foliage.find((lf) => lf.id === moc.id);
      const targets = [];
      for (const lf of s.foliage) {
        if (lf.id !== moc.id && moc.targets && moc.targets.has(lf.id)) targets.push(lf);
      }
      if (src && targets.length) {
        ctx.save();
        ctx.strokeStyle = pal.accent;
        ctx.setLineDash([4 / zoom, 4 / zoom]);
        ctx.lineWidth = 1.1 / zoom;
        ctx.globalAlpha = 0.22;
        for (const t of targets) {
          const mx = (src.center.x + t.center.x) / 2;
          const my = (src.center.y + t.center.y) / 2;
          const nx = -(t.center.y - src.center.y);
          const ny = t.center.x - src.center.x;
          const nl = Math.hypot(nx, ny) || 1;
          ctx.beginPath();
          ctx.moveTo(src.center.x, src.center.y);
          ctx.quadraticCurveTo(
            mx + (nx / nl) * 18,
            my + (ny / nl) * 18,
            t.center.x,
            t.center.y
          );
          ctx.stroke();
        }
        ctx.restore();
        for (const t of targets) {
          ctx.save();
          ctx.strokeStyle = pal.accent;
          ctx.globalAlpha = 0.75;
          ctx.lineWidth = 1.4 / zoom;
          ctx.beginPath();
          ctx.ellipse(t.center.x, t.center.y, t.length * 0.62 + 3, t.width * 0.95 + 3, t.angle, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    const hover = hoverRef.current;
    if (hover && hover.type === "branch") {
      const b = hover.branch;
      ctx.save();
      ctx.strokeStyle = pal.accent;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = b.strokeWidth + 10;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(b.start.x, b.start.y);
      ctx.bezierCurveTo(b.cp1.x, b.cp1.y, b.cp2.x, b.cp2.y, b.tip.x, b.tip.y);
      ctx.stroke();
      ctx.restore();
    } else if (hover && hover.type === "leaf") {
      const lf = hover.leaf;
      ctx.save();
      ctx.fillStyle = pal.accent;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.ellipse(lf.center.x, lf.center.y, lf.length * 0.6, lf.width * 0.9, lf.angle, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // cursor ring
    if (cursorRef.current) {
      const world = screenToWorld(cursorRef.current.x, cursorRef.current.y);
      ctx.save();
      ctx.strokeStyle = hoverRef.current ? pal.accent : pal.faint;
      ctx.globalAlpha = hoverRef.current ? 0.9 : 0.5;
      ctx.lineWidth = 1 / zoom;
      ctx.setLineDash(hoverRef.current ? [] : [3 / zoom, 3 / zoom]);
      ctx.beginPath();
      ctx.arc(world.x, world.y, hoverRef.current ? 15 / zoom : 9 / zoom, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();

    // The hover card is drawn in screen space so text stays crisp at any zoom.
    drawHoverCard(ctx, pal);
  }

  // Screen-space hover card: note title + metadata (or bough name + count).
  function drawHoverCard(ctx, pal) {
    const hover = hoverRef.current;
    const s = sceneRefData.current;
    if (!hover || !s) return;
    const { w, h } = dimsRef.current;
    if (w < 2 || h < 2) return;

    const key = hover.type === "leaf" ? `l:${hover.leaf.id}` : `b:${hover.branch.path}`;
    const cache = hoverCardCache.current;
    if (cache.key !== key) {
      const title =
        hover.type === "leaf"
          ? hover.leaf.title || hover.leaf.note?.title || ""
          : stripCode(hover.branch.name || "Branch");
      const meta = [];
      if (hover.type === "leaf") {
        const note = hover.leaf.note || {};
        if (hover.leaf.isMoc) {
          meta.push({ text: "MOC", accent: true });
          const n = mocHoverRef.current?.targets?.size || 0;
          if (n > 0) meta.push({ text: `links to ${n}` });
        }
        if (note.domain) meta.push({ text: `[${note.domain}]` });
        for (const t of (note.tags || []).slice(0, 3)) meta.push({ text: `#${t}` });
        if (note.wordCount) meta.push({ text: `${note.wordCount} words` });
      } else {
        if (hover.branch.code) meta.push({ text: `[${hover.branch.code}]` });
        if (hover.branch.noteCount > 0) meta.push({ text: `${hover.branch.noteCount} notes` });
        meta.push({ text: "click to focus" });
      }

      // Measure once per hover target; truncate very long titles with an ellipsis.
      ctx.save();
      ctx.font = "600 13px 'Source Serif 4', Georgia, serif";
      let shown = title;
      const MAX_TITLE_W = 360;
      if (ctx.measureText(shown).width > MAX_TITLE_W) {
        let cut = shown.length;
        while (cut > 6 && ctx.measureText(shown.slice(0, cut) + "…").width > MAX_TITLE_W) cut -= 1;
        shown = shown.slice(0, cut) + "…";
      }
      const titleW = ctx.measureText(shown).width;
      ctx.font = "500 10px 'JetBrains Mono', monospace";
      const pieces = meta.map((m) => ({ ...m, w: ctx.measureText(m.text).width }));
      const sepW = ctx.measureText(" · ").width;
      ctx.restore();

      const metaW = pieces.reduce((acc, p, i) => acc + p.w + (i ? sepW : 0), 0);
      cache.key = key;
      cache.title = shown;
      cache.pieces = pieces;
      cache.sepW = sepW;
      cache.width = Math.max(titleW, metaW, 40) + 20;
      cache.height = (pieces.length ? 18 + 2 + 13 : 18) + 14;
    }
    if (!cache.pieces) return;

    // Anchor: the cursor for mouse hover, the item itself for touch previews.
    let ax = null;
    let ay = null;
    if (cursorRef.current) {
      ax = cursorRef.current.x;
      ay = cursorRef.current.y;
    } else if (hover.type === "leaf") {
      const cam = cameraRef.current;
      ax = (hover.leaf.center.x - cam.x) * cam.zoom + w / 2;
      ay = (hover.leaf.center.y - cam.y) * cam.zoom + h / 2;
    } else if (hover.type === "branch") {
      const p = bezierPoint(hover.branch.start, hover.branch.cp1, hover.branch.cp2, hover.branch.tip, 0.82);
      const cam = cameraRef.current;
      ax = (p.x - cam.x) * cam.zoom + w / 2;
      ay = (p.y - cam.y) * cam.zoom + h / 2;
    }
    if (ax == null) return;

    const cw = cache.width;
    const ch = cache.height;
    let x = ax + 16;
    let y = ay + 18;
    if (x + cw > w - 8) x = ax - 16 - cw;
    if (y + ch > h - 8) y = ay - 18 - ch;
    x = clamp(x, 8, Math.max(8, w - cw - 8));
    y = clamp(y, 8, Math.max(8, h - ch - 8));

    ctx.save();
    ctx.globalAlpha = 0.96;
    ctx.fillStyle = pal.paper;
    roundRectPath(ctx, x, y, cw, ch, 4);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = pal.faint;
    ctx.lineWidth = 1;
    roundRectPath(ctx, x, y, cw, ch, 4);
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = "600 13px 'Source Serif 4', Georgia, serif";
    ctx.fillStyle = pal.ink;
    ctx.fillText(cache.title, x + 10, y + 16);

    if (cache.pieces.length) {
      let mx = x + 10;
      const my = y + 33.5;
      cache.pieces.forEach((p, i) => {
        if (i > 0) {
          ctx.font = "500 10px 'JetBrains Mono', monospace";
          ctx.fillStyle = pal.faint;
          ctx.fillText(" · ", mx, my);
          mx += cache.sepW;
        }
        ctx.font = "500 10px 'JetBrains Mono', monospace";
        ctx.fillStyle = p.accent ? pal.accent : pal.faint;
        ctx.fillText(p.text, mx, my);
        mx += p.w;
      });
    }
    ctx.restore();
  }

  function drawLeaf(ctx, leaf, pal) {
    const { base, angle, length, width, bold } = leaf;
    const tip = leaf.tip;
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);
    const cpL = {
      x: base.x + Math.cos(angle) * (length * 0.36) + perpX * (width * 0.55),
      y: base.y + Math.sin(angle) * (length * 0.36) + perpY * (width * 0.55),
    };
    const cpR = {
      x: base.x + Math.cos(angle) * (length * 0.36) - perpX * (width * 0.55),
      y: base.y + Math.sin(angle) * (length * 0.36) - perpY * (width * 0.55),
    };
    // twig
    ctx.beginPath();
    ctx.strokeStyle = bold ? pal.soft : pal.faint;
    ctx.globalAlpha = bold ? 0.6 : 0.35;
    ctx.lineWidth = 0.8;
    ctx.moveTo(leaf.twigStart.x, leaf.twigStart.y);
    ctx.lineTo(base.x, base.y);
    ctx.stroke();
    // blade
    ctx.globalAlpha = bold ? 0.34 : 0.2;
    ctx.fillStyle = pal.ink;
    ctx.beginPath();
    ctx.moveTo(base.x, base.y);
    ctx.quadraticCurveTo(cpL.x, cpL.y, tip.x, tip.y);
    ctx.quadraticCurveTo(cpR.x, cpR.y, base.x, base.y);
    ctx.closePath();
    ctx.fill();
    // Map-of-Content hubs wear the accent + a hanko-style seal dot.
    ctx.globalAlpha = bold ? 0.8 : 0.55;
    ctx.strokeStyle = leaf.isMoc ? pal.accent : pal.soft;
    ctx.lineWidth = leaf.isMoc ? 1.4 : 1;
    ctx.stroke();
    if (leaf.isMoc) {
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = pal.accent;
      ctx.beginPath();
      ctx.arc(base.x + Math.cos(angle) * 8, base.y + Math.sin(angle) * 8, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawBrush(ctx, p0, cp1, cp2, p3, w0, w1, color, alpha) {
    const dist = Math.hypot(p3.x - p0.x, p3.y - p0.y);
    const steps = clamp(Math.round(dist / 6), 14, 52);
    const pts = [];
    for (let i = 0; i <= steps; i++) pts.push(bezierPoint(p0, cp1, cp2, p3, i / steps));
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Solid tapering core (segmented strokes give a smooth ink taper).
    ctx.globalAlpha = alpha;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      ctx.lineWidth = Math.max(0.8, w0 * (1 - t) + w1 * t);
      ctx.beginPath();
      ctx.moveTo(pts[i].x, pts[i].y);
      ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
      ctx.stroke();
    }
    // Two soft dry-brush edges for texture (kasure).
    ctx.globalAlpha = alpha * 0.3;
    for (const s of [-1, 1]) {
      ctx.lineWidth = Math.max(0.7, w1 * 0.55);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const a = pts[Math.min(steps, i + 1)];
        const b = pts[i];
        const tx = a.x - b.x;
        const ty = a.y - b.y;
        const tl = Math.hypot(tx, ty) || 1;
        const ox = -ty / tl;
        const oy = tx / tl;
        const w = w0 * (1 - t) + w1 * t;
        const j = Math.sin(i * 1.7 + s * 3.1) * 0.6;
        const off = s * (w * 0.32) + j;
        const x = b.x + ox * off;
        const y = b.y + oy * off;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawWashi(ctx, L, pal) {
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = pal.faint;
    ctx.lineWidth = 1 / cameraRef.current.zoom;
    for (let i = 0; i < 26; i++) {
      const bx = L.bounds.minX + ((Math.sin(i * 17.3) + 1) / 2) * (L.bounds.maxX - L.bounds.minX);
      const by = L.bounds.minY + ((Math.cos(i * 29.7) + 1) / 2) * (L.bounds.maxY - L.bounds.minY);
      const ang = (i * 0.7) % Math.PI;
      const len = 8 + (i % 7) * 2;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + Math.cos(ang) * len, by + Math.sin(ang) * len);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawRipples(ctx, L, pal) {
    const { x, y } = L.rootOrigin;
    ctx.save();
    ctx.strokeStyle = pal.faint;
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 1 / cameraRef.current.zoom;
    ctx.setLineDash([8, 6]);
    const radii = [80, 160, 250, 350];
    ctx.beginPath();
    ctx.moveTo(x - 420, y + 60);
    ctx.lineTo(x + 420, y + 60);
    ctx.stroke();
    radii.forEach((r, idx) => {
      ctx.setLineDash(idx % 2 === 0 ? [8, 6] : [4, 5]);
      ctx.beginPath();
      ctx.ellipse(x, y + 60, r, r * 0.4, 0, Math.PI, 0, false);
      ctx.stroke();
    });
    ctx.restore();
  }

  // ------------------------------------------------------------------
  // Hit testing (world space, only over drawn items)
  // ------------------------------------------------------------------
  function hitTest(world) {
    const s = sceneRefData.current;
    if (!s) return null;
    for (const lf of s.foliage) {
      const d = Math.hypot(world.x - lf.center.x, world.y - lf.center.y);
      if (d <= Math.max(14, lf.length * 0.62 + 6)) return { type: "leaf", leaf: lf };
    }
    for (const b of s.branches) {
      if (b.depth === 0) continue;
      if (distToCurve(world, b) <= Math.max(14, b.strokeWidth / 2 + 10)) return { type: "branch", branch: b };
    }
    return null;
  }

  // ------------------------------------------------------------------
  // Pointer handlers
  // ------------------------------------------------------------------
  const onPointerMove = useCallback((e) => {
    const isMouse = e.pointerType !== "touch" && e.pointerType !== "pen";
    const rect = containerRef.current.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    if (isMouse) cursorRef.current = { x: sx, y: sy };

    if (dragRef.current.active) {
      const dx = (e.clientX - dragRef.current.lx) / cameraRef.current.zoom;
      const dy = (e.clientY - dragRef.current.ly) / cameraRef.current.zoom;
      dragRef.current.lx = e.clientX;
      dragRef.current.ly = e.clientY;
      if (Math.hypot(e.clientX - dragRef.current.downX, e.clientY - dragRef.current.downY) > 4) {
        if (!dragRef.current.moved) {
          // A drag begins: drop any hover card / tap preview.
          hoverRef.current = null;
          mocHoverRef.current = null;
          touchSelRef.current = null;
        }
        dragRef.current.moved = true;
      }
      cameraRef.current.x -= dx;
      cameraRef.current.y -= dy;
      targetRef.current.x = cameraRef.current.x;
      targetRef.current.y = cameraRef.current.y;
      sceneDirty.current = true;
      overlayDirty.current = true;
      renderNow();
      return;
    }

    if (!isMouse) return; // touch/pen previews are set on tap (pointerup)

    const world = screenToWorld(sx, sy);
    const hit = hitTest(world);
    const prev = hoverRef.current;
    const changed =
      (!!hit !== !!prev) ||
      (hit && prev && (hit.type !== prev.type ||
        (hit.type === "leaf" && hit.leaf.id !== prev.leaf.id) ||
        (hit.type === "branch" && hit.branch.path !== prev.branch.path)));
    hoverRef.current = hit;
    if (changed) updateMocHover(hit);
    overlayDirty.current = true;
    renderNow();
    if (changed && containerRef.current) {
      containerRef.current.style.cursor = hit ? "pointer" : "grab";
    }
  }, [renderNow]);

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    dragRef.current = {
      active: true,
      moved: false,
      lx: e.clientX,
      ly: e.clientY,
      downX: e.clientX,
      downY: e.clientY,
      pointerType: e.pointerType || "mouse",
    };
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      const wasDrag = dragRef.current.moved;
      const pType = e.pointerType || dragRef.current.pointerType || "mouse";
      dragRef.current.active = false;
      if (wasDrag) return;

      const rect = containerRef.current.getBoundingClientRect();
      const world = screenToWorld(e.clientX - rect.left, e.clientY - rect.top);
      const hit = hitTest(world);

      // Touch/pen: the first tap previews (hover card), a second tap on the
      // same target activates it (open note / focus branch).
      if (pType === "touch" || pType === "pen") {
        const sel = touchSelRef.current;
        const same =
          !!hit &&
          !!sel &&
          ((hit.type === "leaf" && sel.type === "leaf" && sel.id === hit.leaf.id) ||
            (hit.type === "branch" && sel.type === "branch" && sel.path === hit.branch.path));
        if (hit && !same) {
          touchSelRef.current =
            hit.type === "leaf"
              ? { type: "leaf", id: hit.leaf.id }
              : { type: "branch", path: hit.branch.path };
          hoverRef.current = hit;
          updateMocHover(hit);
          overlayDirty.current = true;
          renderNow();
          return;
        }
        if (!hit) {
          touchSelRef.current = null;
          hoverRef.current = null;
          updateMocHover(null);
          overlayDirty.current = true;
          renderNow();
          return;
        }
        touchSelRef.current = null; // second tap on the same target: act
      }

      if (!hit) return;
      if (hit.type === "leaf") {
        navigate(`/garden/note/${encodeURIComponent(hit.leaf.id)}`);
      } else if (hit.type === "branch") {
        setParams({ path: hit.branch.path });
      }
    },
    [navigate, setParams, renderNow]
  );

  const onPointerLeave = useCallback((e) => {
    // Touch/pen leave fires right after a tap — keep the preview card alive.
    if (e && e.pointerType && e.pointerType !== "mouse") return;
    cursorRef.current = null;
    hoverRef.current = null;
    mocHoverRef.current = null;
    overlayDirty.current = true;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
    renderNow();
  }, [renderNow]);

  const onWheel = useCallback(
    (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 0.89;
      const z = clamp(targetRef.current.zoom * factor, 0.25, 4.5);
      targetRef.current = { ...targetRef.current, zoom: z };
      renderNow();
    },
    [renderNow]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  // touch pinch
  const onTouchMove = useCallback(
    (e) => {
      if (e.touches.length !== 2) return;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      if (touchDistRef.current > 0) {
        const ratio = dist / touchDistRef.current;
        targetRef.current = { ...targetRef.current, zoom: clamp(targetRef.current.zoom * ratio, 0.25, 4.5) };
        renderNow();
      }
      touchDistRef.current = dist;
    },
    [renderNow]
  );
  const onTouchEnd = useCallback(() => {
    touchDistRef.current = 0;
  }, []);

  // ---- navigation ----
  const resetToRoot = useCallback(() => setParams({}), [setParams]);
  const zoomOut = useCallback(() => {
    if (!currentPath) return;
    const parts = currentPath.split("/");
    parts.pop();
    setParams(parts.length ? { path: parts.join("/") } : {});
  }, [currentPath, setParams]);

  if (loadError) {
    return (
      <article className="mx-auto max-w-4xl px-6 py-20">
        <div className="border border-paper-line bg-paper-shade p-6">
          <h2 className="font-sans text-xl font-bold text-ink">Unable to load the knowledge tree</h2>
          <p className="mt-2 font-serif text-ink-soft">The vault hierarchy could not be fetched from the backend.</p>
          <button onClick={fetchTreeData} className="btn mt-4 text-xs">
            Retry
          </button>
        </div>
      </article>
    );
  }

  if (loading || !tree || !layout || !scene) {
    return (
      <article className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-mute">
          <span className="inline-block h-3 w-3 animate-spin border border-ink border-t-transparent" />
          Grinding Sumi ink…
        </div>
      </article>
    );
  }

  const activeNode = scene.reveal.focusBranch;
  const depth = activeNode.depth;
  const crumbs = currentPath ? currentPath.split("/") : [];

  return (
    <div className="relative flex h-full flex-1 flex-col bg-paper overflow-hidden select-none">
      <header className="z-10 flex flex-wrap items-center justify-between gap-3 border-b border-paper-line bg-paper/95 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              <span>Knowledge Tree</span>
              <span className="text-ink-faint">·</span>
              <span className="text-accent font-semibold">水墨画</span>
            </div>
            <div className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-ink">
              <span>{currentPath ? stripCode(activeNode.name || "Branch") : "Vault Root"}</span>
              {activeNode.code && (
                <span className="rounded-sm border border-paper-line2 px-1.5 py-0.5 font-mono text-xs font-normal text-ink-mute">
                  [{activeNode.code}]
                </span>
              )}
            </div>
          </div>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:inline">Tier: {depth} / 6</span>
        </div>

        <div className="flex max-w-full flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center border border-paper-line2 bg-paper">
            <button
              onClick={() => {
                targetRef.current = { ...targetRef.current, zoom: clamp(targetRef.current.zoom * 1.3, 0.25, 4.5) };
                renderNow();
              }}
              className="px-2.5 py-1 font-mono text-xs text-ink transition-colors hover:bg-paper-shade"
              title="Zoom in"
            >
              [ + ]
            </button>
            <button
              onClick={() => {
                targetRef.current = { ...targetRef.current, zoom: clamp(targetRef.current.zoom * 0.72, 0.25, 4.5) };
                renderNow();
              }}
              className="px-2.5 py-1 font-mono text-xs text-ink transition-colors hover:bg-paper-shade"
              title="Zoom out"
            >
              [ − ]
            </button>
            <button
              onClick={resetToRoot}
              className="border-l border-paper-line2 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-paper-shade"
              title="Back to the trunk"
            >
              Root
            </button>
          </div>
          {currentPath && (
            <button
              onClick={zoomOut}
              className="border border-ink bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Up one
            </button>
          )}
          <Link to="/garden/notes" className="btn-ghost text-xs">
            Notes
          </Link>
          <Link to="/garden/graph" className="btn-ghost text-xs">
            Graph
          </Link>
        </div>
      </header>

      <div className="z-10 flex items-center gap-1.5 overflow-x-auto border-b border-paper-line bg-paper-shade/80 px-6 py-2 font-mono text-xs text-ink-mute">
        <button
          onClick={resetToRoot}
          className={`transition-colors hover:text-ink ${!currentPath ? "font-bold text-ink" : ""}`}
        >
          ROOT
        </button>
        {crumbs.map((seg, i) => {
          const path = crumbs.slice(0, i + 1).join("/");
          const isLast = i === crumbs.length - 1;
          const node = layout.byPath.get(path);
          return (
            <span key={path} className="flex shrink-0 items-center gap-1.5">
              <span className="text-ink-faint">/</span>
              <button
                onClick={() => setParams({ path })}
                className={`transition-colors hover:text-ink ${isLast ? "font-bold text-ink underline" : ""}`}
              >
                {stripCode(node ? node.name : seg)}
              </button>
            </span>
          );
        })}
        <span className="ml-auto hidden shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-faint sm:inline">
          Hover for names · Click a bough to focus · Click a leaf to open · Drag to pan · Scroll to zoom
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative flex-1 touch-none overflow-hidden"
        style={{ cursor: "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        onTouchStart={(e) => {
          if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            touchDistRef.current = Math.hypot(dx, dy);
          }
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <canvas ref={sceneRef} className="absolute inset-0 block h-full w-full" />
        <canvas ref={overlayRef} className="pointer-events-none absolute inset-0 block h-full w-full" />
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// small pure helpers
// ----------------------------------------------------------------------------
function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, w, h, r);
    return;
  }
  const rr = Math.min(r, w / 2, h / 2);
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function bbox(pts) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of pts) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  return { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
}

function padBox(b, pad) {
  return { minX: b.minX - pad, minY: b.minY - pad, maxX: b.maxX + pad, maxY: b.maxY + pad, w: b.w + pad * 2, h: b.h + pad * 2, cx: b.cx, cy: b.cy };
}

function foliageExtent(b) {
  const len = 110;
  return { x: b.tip.x + Math.cos(b.angle) * len, y: b.tip.y + Math.sin(b.angle) * len };
}

function distToCurve(p, b) {
  let min = Infinity;
  const steps = 16;
  for (let i = 0; i <= steps; i++) {
    const pt = bezierPoint(b.start, b.cp1, b.cp2, b.tip, i / steps);
    const d = Math.hypot(p.x - pt.x, p.y - pt.y);
    if (d < min) min = d;
  }
  return min;
}

function stripCode(name) {
  if (!name) return "";
  return name.replace(/^\d{3}\s+/, "").replace(/^\d{3}\s*/, "") || name;
}
