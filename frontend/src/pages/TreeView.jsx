import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api.js";

// ============================================================================
// Japanese Sumi-e Knowledge Tree (墨絵 · 松盆栽 Matsu Bonsai)
// Features:
// - Strictly Disjoint Recursive Angular Cone Partitioning (Zero branch crossings)
// - Calligraphic Organic Tapered Limbs (Sumi-e ink brushwork with Moyogi curve)
// - Matsuba (松葉) Pine Needle Tufts & Cloud-Pruned Tamabuki Foliage Pads for Notes
// - Tanzaku (短冊) Hanging Specimen Tags suspended into negative space via silk threads
// - Concentric Karesansui (枯山水) Zen Raked Garden Ripples
// - Idle-Aware 60fps Camera Animation Loop & Non-Passive Wheel Pan/Zoom
// ============================================================================

export default function TreeView() {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPath = params.get("path") || "";
  const [selectedLeaf, setSelectedLeaf] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [labelScale, setLabelScale] = useState(1);
  const [leafLabelMode, setLeafLabelMode] = useState("hover"); // "hover" | "zen"

  // Viewport and interactive camera state
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 0.85 });
  const targetCamera = useRef({ x: 0, y: 0, zoom: 0.85 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);
  const [svgDims, setSvgDims] = useState({ width: 1000, height: 700 });
  const touchStart = useRef({ x: 0, y: 0, dist: 0 });

  // 1. Fetch Tree Hierarchy Data
  const fetchTreeData = useCallback(() => {
    setLoading(true);
    setLoadError(false);
    api
      .tree()
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

  // 2. Measure SVG Dimensions on Mount & Resize
  useEffect(() => {
    const updateDims = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setSvgDims({ width: rect.width, height: rect.height });
        }
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // 3. Find active node in the tree hierarchy
  const activeNode = useMemo(() => {
    if (!tree) return null;
    if (!currentPath) return tree;
    return findNodeByPath(tree, currentPath) || tree;
  }, [tree, currentPath]);

  // 4. Breadcrumb trail
  const breadcrumbs = useMemo(() => {
    if (!tree || !currentPath) return [];
    const segments = currentPath.split("/");
    const crumbs = [];
    let acc = "";
    for (const seg of segments) {
      acc = acc ? `${acc}/${seg}` : seg;
      crumbs.push({ name: seg, path: acc });
    }
    return crumbs;
  }, [tree, currentPath]);

  // 5. Build Sumi-e Bonsai Layout (Strict Disjoint Angular Sector Partitioning)
  const treeLayout = useMemo(() => {
    if (!tree) return null;
    return generateSumiTreeLayout(tree, currentPath);
  }, [tree, currentPath]);

  // 6. Camera Lerp Animation Loop with Render-Idle Optimization
  useEffect(() => {
    const animate = () => {
      setCamera((prev) => {
        const dx = targetCamera.current.x - prev.x;
        const dy = targetCamera.current.y - prev.y;
        const dz = targetCamera.current.zoom - prev.zoom;

        if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15 && Math.abs(dz) < 0.001) {
          if (
            prev.x === targetCamera.current.x &&
            prev.y === targetCamera.current.y &&
            prev.zoom === targetCamera.current.zoom
          ) {
            return prev; // Settle idle: prevent React 60fps render churn!
          }
          return {
            x: targetCamera.current.x,
            y: targetCamera.current.y,
            zoom: targetCamera.current.zoom,
          };
        }

        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
          zoom: prev.zoom + dz * 0.16,
        };
      });
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId.current);
  }, []);

  // 7. Update target camera when active path changes
  useEffect(() => {
    if (!treeLayout) return;

    if (!currentPath) {
      targetCamera.current = {
        x: treeLayout.rootOrigin.x,
        y: treeLayout.rootOrigin.y - 380,
        zoom: 0.82,
      };
    } else {
      const activeBranch = treeLayout.branches.find((b) => b.path === currentPath);
      if (activeBranch) {
        targetCamera.current = {
          x: activeBranch.tip.x,
          y: activeBranch.tip.y - 120,
          zoom: Math.min(2.4, 1.2 + (activeBranch.depth || 1) * 0.28),
        };
      }
    }
  }, [currentPath, treeLayout]);

  // 8. Non-passive wheel event listener for buttery smooth zooming
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      const newZoom = Math.max(0.35, Math.min(4.5, targetCamera.current.zoom * zoomFactor));
      targetCamera.current = {
        ...targetCamera.current,
        zoom: newZoom,
      };
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Handlers for branch navigation
  const zoomIntoBranch = useCallback(
    (path) => {
      setParams({ path });
      setSelectedLeaf(null);
    },
    [setParams]
  );

  const zoomOut = useCallback(() => {
    setSelectedLeaf(null);
    if (!currentPath) return;
    const parts = currentPath.split("/");
    if (parts.length <= 1) {
      setParams({});
    } else {
      parts.pop();
      setParams({ path: parts.join("/") });
    }
  }, [currentPath, setParams]);

  const resetToRoot = useCallback(() => {
    setParams({});
    setSelectedLeaf(null);
  }, [setParams]);

  // Mouse pan drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = (e.clientX - dragStart.current.x) / camera.zoom;
    const dy = (e.clientY - dragStart.current.y) / camera.zoom;
    dragStart.current = { x: e.clientX, y: e.clientY };

    targetCamera.current = {
      x: targetCamera.current.x - dx,
      y: targetCamera.current.y - dy,
      zoom: targetCamera.current.zoom,
    };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch handlers for mobile pan & pinch
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      isDragging.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStart.current.dist = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging.current) {
      const dx = (e.touches[0].clientX - dragStart.current.x) / camera.zoom;
      const dy = (e.touches[0].clientY - dragStart.current.y) / camera.zoom;
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      targetCamera.current = {
        x: targetCamera.current.x - dx,
        y: targetCamera.current.y - dy,
        zoom: targetCamera.current.zoom,
      };
    } else if (e.touches.length === 2 && touchStart.current.dist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.sqrt(dx * dx + dy * dy);
      const ratio = newDist / touchStart.current.dist;
      touchStart.current.dist = newDist;
      const newZoom = Math.max(0.35, Math.min(4.5, targetCamera.current.zoom * ratio));
      targetCamera.current = {
        ...targetCamera.current,
        zoom: newZoom,
      };
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    touchStart.current.dist = 0;
  };

  if (loadError) {
    return (
      <article className="mx-auto max-w-4xl px-6 py-20">
        <div className="border border-paper-line bg-paper-shade p-6">
          <h2 className="font-sans text-xl font-bold text-ink">Unable to Load Knowledge Tree</h2>
          <p className="mt-2 font-serif text-ink-soft">
            Failed to fetch the vault hierarchy from the backend.
          </p>
          <button onClick={fetchTreeData} className="btn mt-4 text-xs">
            Retry Loading
          </button>
        </div>
      </article>
    );
  }

  if (loading || !tree || !treeLayout) {
    return (
      <article className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-mute">
          <span className="inline-block h-3 w-3 animate-spin border border-ink border-t-transparent" />
          Cultivating Zen Pine Bonsai Knowledge Tree...
        </div>
      </article>
    );
  }

  const currentName = currentPath ? activeNode.name || "Branch" : "Vault Root";
  const depth = breadcrumbs.length;

  return (
    <div className="relative flex h-full flex-1 flex-col bg-paper overflow-hidden select-none">
      {/* ---------------- Top Zen Architectural HUD ---------------- */}
      <header className="z-10 flex flex-wrap items-center justify-between gap-3 border-b border-paper-line bg-paper/95 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              <span>Sumi-e Knowledge Bonsai</span>
              <span className="text-ink-faint">·</span>
              <span className="text-[#9e2a2b] dark:text-accent font-semibold">松 MATSU</span>
            </div>
            <div className="font-sans text-lg font-bold tracking-tight text-ink flex items-center gap-2">
              <span>{stripCode(currentName)}</span>
              {activeNode.code && (
                <span className="font-mono text-xs font-normal text-ink-mute border border-paper-line2 px-1 py-0.5">
                  [{activeNode.code}]
                </span>
              )}
            </div>
          </div>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:inline">
            Canopy Depth: {depth} / 6
          </span>
        </div>

        {/* HUD Controls */}
        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-1 sm:pb-0">
          {/* Pine Leaf Mode */}
          <div className="flex items-center border border-paper-line2 bg-paper px-1 py-0.5">
            <span className="px-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
              Titles:
            </span>
            <button
              onClick={() => setLeafLabelMode("hover")}
              className={`px-2 py-0.5 font-mono text-xs transition-colors ${
                leafLabelMode === "hover" ? "bg-ink text-paper" : "text-ink hover:bg-paper-shade"
              }`}
              title="Show note titles on hover / click"
            >
              On Hover
            </button>
            <button
              onClick={() => setLeafLabelMode("zen")}
              className={`px-2 py-0.5 font-mono text-xs transition-colors ${
                leafLabelMode === "zen" ? "bg-ink text-paper" : "text-ink hover:bg-paper-shade"
              }`}
              title="Zen Mode: purely minimalist foliage"
            >
              Zen Clean
            </button>
          </div>

          {/* Scale Control */}
          <div className="flex items-center border border-paper-line2 bg-paper px-1 py-0.5">
            <span className="px-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
              Scale:
            </span>
            <button
              onClick={() => setLabelScale((s) => Math.max(0.7, +(s - 0.15).toFixed(2)))}
              className="px-2 py-0.5 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Decrease scale"
            >
              -
            </button>
            <span className="px-1 font-mono text-[11px] text-ink-soft">
              {Math.round(labelScale * 100)}%
            </span>
            <button
              onClick={() => setLabelScale((s) => Math.min(1.8, +(s + 0.15).toFixed(2)))}
              className="px-2 py-0.5 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Increase scale"
            >
              +
            </button>
          </div>

          {/* Camera Zoom Buttons */}
          <div className="flex items-center border border-paper-line2 bg-paper">
            <button
              onClick={() => {
                targetCamera.current.zoom = Math.min(4.5, targetCamera.current.zoom * 1.3);
              }}
              className="px-2.5 py-1 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Zoom In"
            >
              [ + ]
            </button>
            <button
              onClick={() => {
                targetCamera.current.zoom = Math.max(0.35, targetCamera.current.zoom * 0.7);
              }}
              className="px-2.5 py-1 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Zoom Out"
            >
              [ - ]
            </button>
            <button
              onClick={resetToRoot}
              className="border-l border-paper-line2 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink hover:bg-paper-shade transition-colors"
              title="Reset View to Root Trunk"
            >
              Root
            </button>
          </div>

          {/* Zoom Out Branch */}
          {currentPath && (
            <button
              onClick={zoomOut}
              className="border border-ink bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wider text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              Zoom Out
            </button>
          )}

          <Link to="/garden/notes" className="btn-ghost text-xs">
            Notes Index
          </Link>
          <Link to="/garden/graph" className="btn-ghost text-xs">
            Graph
          </Link>
        </div>
      </header>

      {/* ---------------- Breadcrumb Ribbon ---------------- */}
      <div className="z-10 flex items-center gap-1.5 border-b border-paper-line bg-paper-shade/80 px-6 py-2 font-mono text-xs text-ink-mute overflow-x-auto">
        <button
          onClick={resetToRoot}
          className={`hover:text-ink transition-colors ${!currentPath ? "font-bold text-ink" : ""}`}
        >
          ROOT
        </button>

        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <span key={crumb.path} className="flex items-center gap-1.5 shrink-0">
              <span className="text-ink-faint">/</span>
              <button
                onClick={() => zoomIntoBranch(crumb.path)}
                className={`hover:text-ink transition-colors ${
                  isLast ? "font-bold text-ink underline" : ""
                }`}
              >
                {stripCode(crumb.name)}
              </button>
            </span>
          );
        })}

        <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          Zen Matsu Bonsai · Click Tanzaku tags to zoom · Hover pine tufts for notes · Drag to pan
        </span>
      </div>

      {/* ---------------- Main Sumi-e SVG Canvas ---------------- */}
      <div
        ref={containerRef}
        className="relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <svg
          ref={svgRef}
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            {/* Soft Washi Paper Grain Filter */}
            <filter id="sumiWash" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Camera Viewport Group */}
          <g
            transform={`translate(${svgDims.width / 2 - camera.x * camera.zoom}, ${
              svgDims.height / 2 - camera.y * camera.zoom
            }) scale(${camera.zoom})`}
            className="transition-transform duration-75 ease-out"
          >
            {/* 1. Karesansui (枯山水) Zen Raked Ripple Water Concentrics */}
            <ZenRipples root={treeLayout.rootOrigin} />

            {/* 2. Gnarled Bonsai Trunk & Nebari Roots */}
            <SumiTrunkAndNebari root={treeLayout.rootOrigin} apex={treeLayout.trunkApex} />

            {/* 3. LAYER 1: Calligraphic Tapered Limbs */}
            <g id="layer-sumi-limbs">
              {treeLayout.branches.map((b) => (
                <SumiBranchLimb
                  key={b.path}
                  branch={b}
                  isActive={currentPath === b.path}
                  isAncestor={currentPath.startsWith(b.path)}
                  onSelect={() => zoomIntoBranch(b.path)}
                />
              ))}
            </g>

            {/* 4. LAYER 2: Matsuba (松葉) Pine Needle Tufts & Cloud Pads */}
            <g id="layer-pine-foliage">
              {treeLayout.foliagePads.map((pad) => (
                <PineFoliagePad
                  key={pad.id}
                  pad={pad}
                  isHovered={hoveredNode?.id === pad.id}
                  isSelected={selectedLeaf?.id === pad.id}
                  mode={leafLabelMode}
                  onHover={setHoveredNode}
                  onSelect={() => setSelectedLeaf(pad)}
                  onOpen={() => navigate(`/garden/note/${encodeURIComponent(pad.id)}`)}
                />
              ))}
            </g>

            {/* 5. LAYER 3: Tanzaku (短冊) Hanging Specimen Tags (Suspended below branch knuckles) */}
            <g id="layer-tanzaku-tags">
              {treeLayout.branches
                .filter((b) => b.tanzaku)
                .map((b) => (
                  <TanzakuTag
                    key={`tag-${b.path}`}
                    branch={b}
                    isActive={currentPath === b.path}
                    isAncestor={currentPath.startsWith(b.path)}
                    labelScale={labelScale}
                    onZoom={() => zoomIntoBranch(b.path)}
                    onHover={setHoveredNode}
                  />
                ))}
            </g>
          </g>
        </svg>

        {/* ---------------- Detail Drawer for Selected Note ---------------- */}
        {selectedLeaf && (
          <aside className="absolute bottom-6 right-6 z-20 w-84 border border-ink bg-paper p-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-start justify-between gap-2 border-b border-paper-line pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#9e2a2b] dark:bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  Pine Note · 松葉
                </span>
              </div>
              <button
                onClick={() => setSelectedLeaf(null)}
                className="font-mono text-xs text-ink-mute hover:text-ink px-1"
                aria-label="Close drawer"
              >
                [X]
              </button>
            </div>

            <h3 className="mt-3 font-serif text-lg font-bold tracking-tight text-ink">
              {selectedLeaf.title}
            </h3>

            <div className="mt-2.5 font-mono text-[11px] text-ink-soft space-y-1">
              <div>Domain: {selectedLeaf.domainCode || "—"}</div>
              <div>Section: {stripCode(selectedLeaf.sectionName || "Garden")}</div>
              <div>File: {selectedLeaf.path || selectedLeaf.id}</div>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                to={`/garden/note/${encodeURIComponent(selectedLeaf.id)}`}
                className="btn w-full justify-center text-xs"
              >
                Open Note in Garden →
              </Link>
            </div>
          </aside>
        )}

        {/* Floating status bar on hover */}
        {hoveredNode && !selectedLeaf && (
          <div className="pointer-events-none absolute bottom-4 left-6 z-20 border border-paper-line2 bg-paper/95 px-3 py-1.5 font-mono text-xs text-ink shadow-sm backdrop-blur-sm">
            {hoveredNode.isLeaf ? (
              <span>
                Note: <strong>{hoveredNode.title}</strong> — Click to inspect · Double-click to open
              </span>
            ) : (
              <span>
                Branch: <strong>{stripCode(hoveredNode.name)}</strong> ({hoveredNode.noteCount || 0} notes) — Click Tanzaku tag to zoom in
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// 1. Karesansui (枯山水) Zen Concentric Water Ripples
// ----------------------------------------------------------------------------
function ZenRipples({ root }) {
  const { x, y } = root;
  const radii = [70, 140, 220, 310, 420, 540];

  return (
    <g className="text-paper-line/50 pointer-events-none select-none">
      {/* Stone Grounding Baseline */}
      <line
        x1={x - 380}
        y1={y}
        x2={x + 380}
        y2={y}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 6"
      />
      {radii.map((r, idx) => (
        <path
          key={r}
          d={`M ${x - r} ${y} A ${r} ${r * 0.42} 0 0 1 ${x + r} ${y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={idx % 2 === 0 ? "0.8" : "0.5"}
          strokeDasharray={idx % 2 === 0 ? "8 6" : "3 5"}
          opacity={0.45 - idx * 0.06}
        />
      ))}
    </g>
  );
}

// ----------------------------------------------------------------------------
// 2. Sumi-e Trunk & Nebari Roots (Moyogi S-Curve Bonsai Trunk)
// ----------------------------------------------------------------------------
function SumiTrunkAndNebari({ root, apex }) {
  const { x, y } = root;

  // Graceful S-curve Moyogi bonsai trunk path
  const trunkPath = `
    M ${x - 22} ${y}
    C ${x - 26} ${y - 60}, ${x - 12} ${y - 120}, ${x + 6} ${y - 170}
    S ${x - 4} ${y - 230}, ${apex.x - 8} ${apex.y}
    L ${apex.x + 8} ${apex.y}
    C ${x + 12} ${y - 230}, ${x + 22} ${y - 170}, ${x + 8} ${y - 120}
    S ${x + 20} ${y - 60}, ${x + 22} ${y}
    Z
  `;

  return (
    <g className="text-ink">
      {/* Nebari Roots spreading firmly into soil */}
      <path
        d={`
          M ${x - 18} ${y} Q ${x - 60} ${y + 25} ${x - 130} ${y + 40}
          M ${x - 6} ${y} Q ${x - 30} ${y + 35} ${x - 50} ${y + 65}
          M ${x + 18} ${y} Q ${x + 70} ${y + 25} ${x + 140} ${y + 42}
          M ${x + 4} ${y} Q ${x + 35} ${y + 35} ${x + 60} ${y + 68}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="text-ink-soft"
      />

      {/* Main Calligraphic Trunk Body */}
      <path
        d={trunkPath}
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />

      {/* Vertical Sumi-e Bark Grain Streaks (Kasure Dry Brush Hatching) */}
      <path
        d={`
          M ${x - 8} ${y - 20} C ${x - 12} ${y - 80}, ${x - 4} ${y - 140}, ${x + 4} ${y - 190}
          M ${x + 4} ${y - 25} C ${x + 6} ${y - 75}, ${x + 12} ${y - 135}, ${x + 2} ${y - 195}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="14 10"
        opacity="0.35"
      />

      {/* Traditional Vermilion Red Hanko Seal (印鑑: "知識の庭" Knowledge Garden) */}
      <g transform={`translate(${x - 18}, ${y + 12})`} className="select-none">
        <rect
          x="0"
          y="0"
          width="36"
          height="18"
          fill="rgba(158, 42, 43, 0.12)"
          stroke="#9e2a2b"
          strokeWidth="1.2"
          rx="2"
        />
        <text
          x="18"
          y="12"
          textAnchor="middle"
          className="font-serif text-[8px] font-bold fill-[#9e2a2b] tracking-widest"
        >
          知·庭
        </text>
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// 3. Sumi-e Branch Limb (Tapered Calligraphic Bézier Spline)
// ----------------------------------------------------------------------------
function SumiBranchLimb({ branch, isActive, isAncestor, onSelect }) {
  const { start, tip, cp1, cp2, strokeWidth } = branch;

  const pathD = `M ${start.x} ${start.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${tip.x} ${tip.y}`;

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      {/* Invisible wider hover hit-area */}
      <path d={pathD} fill="none" stroke="transparent" strokeWidth={Math.max(16, strokeWidth + 8)} />

      {/* Main Calligraphic Ink Stroke */}
      <path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={`transition-colors duration-200 ${
          isActive
            ? "text-ink"
            : isAncestor
            ? "text-ink-soft hover:text-ink"
            : "text-ink-soft/80 group-hover:text-ink"
        }`}
      />

      {/* Secondary Interior Light Wash for Thicker Boughs */}
      {strokeWidth > 4 && (
        <path
          d={pathD}
          fill="none"
          stroke="var(--paper)"
          strokeWidth={strokeWidth * 0.22}
          strokeDasharray="6 8"
          opacity="0.4"
        />
      )}

      {/* Elbow Knuckle Node at Fork (Bonsai Branch Joint) */}
      <circle
        cx={tip.x}
        cy={tip.y}
        r={Math.max(2.4, strokeWidth * 0.38)}
        fill="currentColor"
        className="text-ink transition-transform group-hover:scale-125"
      />
    </g>
  );
}

// ----------------------------------------------------------------------------
// 4. Matsuba (松葉) Pine Needle Tufts & Cloud-Pruned Foliage Pads
// ----------------------------------------------------------------------------
function PineFoliagePad({ pad, isHovered, isSelected, mode, onHover, onSelect, onOpen }) {
  const { tip, angle, title } = pad;
  const deg = (angle * 180) / Math.PI;

  const highlighted = isHovered || isSelected;

  // Needle radius and needle length
  const needleLength = highlighted ? 24 : 19;
  const rosetteSpan = 0.55; // 32° needle fan

  // Calculate outer tip of rosette for floating text
  const labelOffsetX = Math.cos(angle) * (needleLength + 14);
  const labelOffsetY = Math.sin(angle) * (needleLength + 14);
  const isLeft = Math.cos(angle) < 0;

  return (
    <g
      className="cursor-pointer group select-none"
      onClick={onSelect}
      onDoubleClick={onOpen}
      onMouseEnter={() => onHover({ ...pad, isLeaf: true })}
      onMouseLeave={() => onHover(null)}
    >
      {/* Petiole twig connector */}
      <line
        x1={pad.origin.x}
        y1={pad.origin.y}
        x2={tip.x}
        y2={tip.y}
        stroke="currentColor"
        strokeWidth={highlighted ? "1.6" : "1.0"}
        className="text-ink-mute group-hover:text-ink transition-colors"
      />

      {/* Matsuba (松葉) Pine Needle Rosette Cluster */}
      <g transform={`translate(${tip.x}, ${tip.y}) rotate(${deg})`}>
        {/* Soft translucent ink wash cloud behind needles */}
        <circle
          cx={needleLength * 0.45}
          cy="0"
          r={needleLength * 0.75}
          fill="currentColor"
          className={`transition-opacity duration-150 ${
            isSelected
              ? "fill-ink opacity-25"
              : highlighted
              ? "fill-ink opacity-15"
              : "fill-ink-mute opacity-5 group-hover:opacity-15"
          }`}
        />

        {/* 5-stroke authentic Sumi-e Pine Needles */}
        {[-2, -1, 0, 1, 2].map((step) => {
          const needleA = step * (rosetteSpan / 2);
          const nx = Math.cos(needleA) * needleLength;
          const ny = Math.sin(needleA) * needleLength;
          return (
            <line
              key={step}
              x1="0"
              y1="0"
              x2={nx}
              y2={ny}
              stroke="currentColor"
              strokeWidth={highlighted ? "1.6" : step === 0 ? "1.4" : "1.1"}
              strokeLinecap="round"
              className={`transition-colors duration-150 ${
                highlighted ? "text-ink" : "text-ink-soft group-hover:text-ink"
              }`}
            />
          );
        })}

        {/* Center node pearl */}
        <circle cx="0" cy="0" r={highlighted ? "2.5" : "1.8"} fill="currentColor" className="text-ink" />
      </g>

      {/* Floating Note Title (Reveals cleanly on hover or when selected, or in Zen mode) */}
      {(highlighted || mode === "zen") && (
        <g
          transform={`translate(${tip.x + labelOffsetX}, ${tip.y + labelOffsetY})`}
          className="pointer-events-none"
        >
          {highlighted && (
            <rect
              x={isLeft ? -title.length * 6.5 - 14 : -4}
              y="-10"
              width={title.length * 6.5 + 18}
              height="20"
              fill="var(--paper)"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-ink shadow-lg"
            />
          )}
          <text
            x={isLeft ? -10 : 4}
            y="4"
            textAnchor={isLeft ? "end" : "start"}
            className={`font-sans text-[11px] font-semibold tracking-tight fill-ink transition-colors ${
              highlighted ? "fill-ink font-bold" : "fill-ink-soft"
            }`}
          >
            {title}
          </text>
        </g>
      )}
    </g>
  );
}

// ----------------------------------------------------------------------------
// 5. Tanzaku (短冊) Hanging Specimen Tag (Suspended in Negative Space)
// ----------------------------------------------------------------------------
function TanzakuTag({ branch, isActive, isAncestor, labelScale, onZoom, onHover }) {
  const { tanzaku } = branch;
  if (!tanzaku) return null;

  const { knuckle, x, y, width, height, code, name, noteCount } = tanzaku;

  return (
    <g
      className="cursor-pointer group select-none"
      onClick={onZoom}
      onMouseEnter={() => onHover(branch)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Delicate Silk Cord Thread connecting branch knuckle to tag eyelet */}
      <line
        x1={knuckle.x}
        y1={knuckle.y}
        x2={x + width / 2}
        y2={y}
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        className="text-ink-mute/70 group-hover:text-ink transition-colors"
      />

      {/* The Tanzaku (短冊) Paper Tag Plaque */}
      <g transform={`translate(${x}, ${y}) scale(${labelScale})`} className="transition-transform duration-100">
        {/* Shadow & Solid Washi Paper Body */}
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="var(--paper)"
          stroke="currentColor"
          strokeWidth={isActive ? "1.8" : "1.0"}
          rx="1"
          className={`transition-colors shadow-sm ${
            isActive
              ? "text-ink border-ink"
              : isAncestor
              ? "text-ink"
              : "text-paper-line2 group-hover:text-ink group-hover:border-ink"
          }`}
        />

        {/* Silk Eyelet Hole at Top Center */}
        <circle
          cx={width / 2}
          cy="3"
          r="1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-ink-mute"
        />

        {/* Small Vermilion Hanko Seal for Dewey Code */}
        {code && (
          <g transform="translate(6, 4)">
            <rect
              x="0"
              y="0"
              width="24"
              height="14"
              fill="rgba(158, 42, 43, 0.08)"
              stroke="#9e2a2b"
              strokeWidth="0.8"
              rx="1"
            />
            <text
              x="12"
              y="10.5"
              textAnchor="middle"
              className="font-mono text-[8.5px] font-bold fill-[#9e2a2b]"
            >
              {code}
            </text>
          </g>
        )}

        {/* Category Name Typography */}
        <text
          x={code ? 35 : 10}
          y="15"
          className="font-sans text-[11px] font-semibold tracking-tight fill-ink"
        >
          {stripCode(name)}
        </text>

        {/* Note Counter Circle */}
        {noteCount != null && (
          <text
            x={width - 8}
            y="15"
            textAnchor="end"
            className="font-mono text-[9px] font-normal fill-ink-mute"
          >
            {noteCount}
          </text>
        )}
      </g>
    </g>
  );
}

// ============================================================================
// Mathematical Layout Engine: Disjoint Angular Sector Partitioning
// ============================================================================

function generateSumiTreeLayout(treeData, activePath) {
  const branches = [];
  const foliagePads = [];

  const rootOrigin = { x: 0, y: 390 };
  const trunkApex = { x: 4, y: 175 };

  // 1. Root Trunk Spec
  branches.push({
    path: "",
    name: "Vault Root",
    start: rootOrigin,
    tip: trunkApex,
    cp1: { x: 0, y: 300 },
    cp2: { x: 6, y: 220 },
    strokeWidth: 16,
    depth: 0,
    noteCount: treeData.notes?.length || 0,
    rawNode: treeData,
  });

  const topCategories = treeData.children || [];
  const totalTop = topCategories.length;
  if (totalTop === 0) {
    return { rootOrigin, trunkApex, branches, foliagePads };
  }

  // 2. Total Canopy Arc Budget: from -160° (-2.8 rad) to -20° (-0.35 rad)
  const canopyMin = -Math.PI + 0.35;
  const canopyMax = -0.35;
  const totalArc = canopyMax - canopyMin;

  // 3. Compute subtree weights
  const weights = topCategories.map((cat) => {
    const n = Math.max(1, cat.noteCount || 1);
    const c = (cat.children || []).length;
    return Math.pow(n, 0.45) + c * 1.5;
  });
  const sumWeights = weights.reduce((acc, w) => acc + w, 0) || 1;

  // 4. Partition the root canopy into strictly disjoint angular cones
  let currentAngle = canopyMin;
  const padding = 0.08; // 4.5° breathing buffer between subtrees

  topCategories.forEach((cat, idx) => {
    const sectorSize = (weights[idx] / sumWeights) * (totalArc - padding * (totalTop - 1));
    const sectorStart = currentAngle;
    const sectorEnd = currentAngle + sectorSize;
    currentAngle = sectorEnd + padding;

    const branchAngle = (sectorStart + sectorEnd) / 2;

    // Staggered tiered bough lengths (260px vs 320px)
    const lengthTier = idx % 2 === 0 ? 260 : 320;
    const length = lengthTier;

    const tipX = trunkApex.x + Math.cos(branchAngle) * length;
    const tipY = trunkApex.y + Math.sin(branchAngle) * length;

    // Graceful Moyogi S-curve control points
    const curveOffset = (idx % 2 === 0 ? -1 : 1) * 28;
    const perp = branchAngle + Math.PI / 2;
    const cp1 = {
      x: trunkApex.x + Math.cos(branchAngle) * (length * 0.38) + Math.cos(perp) * curveOffset,
      y: trunkApex.y + Math.sin(branchAngle) * (length * 0.38) + Math.sin(perp) * curveOffset,
    };
    const cp2 = {
      x: trunkApex.x + Math.cos(branchAngle) * (length * 0.76),
      y: trunkApex.y + Math.sin(branchAngle) * (length * 0.76),
    };

    const b = {
      path: cat.path,
      name: cat.name,
      code: cat.code,
      noteCount: cat.noteCount,
      start: trunkApex,
      tip: { x: tipX, y: tipY },
      cp1,
      cp2,
      angle: branchAngle,
      sectorStart,
      sectorEnd,
      length,
      strokeWidth: 8.5,
      depth: 1,
      rawNode: cat,
    };
    branches.push(b);

    // Recursively partition sub-branches within this sector cone
    if (activePath.startsWith(cat.path)) {
      blossomSumiSubtree(cat, b, activePath, 2, sectorStart, sectorEnd, branches, foliagePads);
    } else {
      // If not active, cultivate pine foliage tufts for direct notes
      cultivatePineNotes(cat, b, branchAngle, foliagePads);
    }
  });

  // 5. Suspend Tanzaku Tags below branch knuckles in guaranteed negative space
  resolveTanzakuLayout(branches);

  return { rootOrigin, trunkApex, branches, foliagePads };
}

// Recursive Subtree Sector Partitioning
function blossomSumiSubtree(node, parentBranch, activePath, depth, sectorStart, sectorEnd, branches, foliagePads) {
  const children = node.children || [];
  const totalChildren = children.length;

  if (totalChildren > 0) {
    const parentSectorSpan = sectorEnd - sectorStart;
    const childPadding = 0.06;

    const childWeights = children.map((c) => {
      const n = Math.max(1, c.noteCount || 1);
      const sub = (c.children || []).length;
      return Math.pow(n, 0.42) + sub * 1.2;
    });
    const sumChildWeights = childWeights.reduce((a, b) => a + b, 0) || 1;

    let subAngle = sectorStart;

    children.forEach((child, idx) => {
      const cSectorSize =
        (childWeights[idx] / sumChildWeights) * (parentSectorSpan - childPadding * (totalChildren - 1));
      const cSectorStart = subAngle;
      const cSectorEnd = subAngle + cSectorSize;
      subAngle = cSectorEnd + childPadding;

      const childAngle = (cSectorStart + cSectorEnd) / 2;

      // Tiered staggered lengths to prevent radial tip clustering
      const tierOffset = (idx % 3) * 45 + (idx % 2) * 18;
      const baseLength = Math.max(130, 210 - depth * 22);
      const length = baseLength + tierOffset;

      const tipX = parentBranch.tip.x + Math.cos(childAngle) * length;
      const tipY = parentBranch.tip.y + Math.sin(childAngle) * length;

      // Supple calligraphic Bezier control points
      const curveAmount = ((idx % 2 === 0 ? -1 : 1) * 22) / Math.max(1, depth - 1);
      const perp = childAngle + Math.PI / 2;
      const cp1 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.35) + Math.cos(perp) * curveAmount,
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.35) + Math.sin(perp) * curveAmount,
      };
      const cp2 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.75),
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.75),
      };

      const strokeWidth = Math.max(2.2, parentBranch.strokeWidth * 0.65);

      const branch = {
        path: child.path,
        name: child.name,
        code: child.code,
        noteCount: child.noteCount,
        start: parentBranch.tip,
        tip: { x: tipX, y: tipY },
        cp1,
        cp2,
        angle: childAngle,
        sectorStart: cSectorStart,
        sectorEnd: cSectorEnd,
        length,
        strokeWidth,
        depth,
        rawNode: child,
      };
      branches.push(branch);

      if (activePath.startsWith(child.path)) {
        blossomSumiSubtree(child, branch, activePath, depth + 1, cSectorStart, cSectorEnd, branches, foliagePads);
      } else {
        cultivatePineNotes(child, branch, childAngle, foliagePads);
      }
    });
  }

  // Cultivate pine notes on this active node
  cultivatePineNotes(node, parentBranch, parentBranch.angle, foliagePads);
}

// Cultivate Matsuba Pine Needle Tufts for Notes
function cultivatePineNotes(node, parentBranch, baseAngle, foliagePads) {
  const notes = node.notes || [];
  if (notes.length === 0) return;

  const numNotes = Math.min(28, notes.length);

  // Balanced fan angle spanning 65° to 110° around baseAngle
  const fanSpan = numNotes === 1 ? 0 : Math.min(Math.PI * 0.65, 0.4 + numNotes * 0.12);

  notes.slice(0, numNotes).forEach((note, idx) => {
    const ratio = numNotes === 1 ? 0 : idx / (numNotes - 1) - 0.5;
    const leafAngle = baseAngle + ratio * fanSpan;

    // Stagger distances so no two pine rosettes overlap in radius
    const tier = idx % 2;
    const baseDist = tier === 0 ? 58 : 94;
    const stagger = (Math.floor(idx / 2) % 3) * 14;
    const dist = baseDist + stagger;

    const tip = {
      x: parentBranch.tip.x + Math.cos(leafAngle) * dist,
      y: parentBranch.tip.y + Math.sin(leafAngle) * dist,
    };

    foliagePads.push({
      id: note.id,
      title: note.title,
      path: note.path,
      origin: parentBranch.tip,
      tip,
      angle: leafAngle,
      domainCode: node.code,
      sectionName: node.name,
      ratio,
      tier,
    });
  });
}

// Cubic bezier point at parameter t
function bezierPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
    y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y,
  };
}

// Suspend Tanzaku Tags below knuckles in verified negative space with AABB relaxation
function resolveTanzakuLayout(branches) {
  const tags = [];

  branches.forEach((b) => {
    if (!b.path) return; // skip root trunk

    const displayName = stripCode(b.name);
    const width = Math.max(86, (displayName.length + (b.code ? 5 : 0) + 5) * 6.5);
    const height = 22;

    // Sample along limb at t = 0.65 where branches have diverged into disjoint angular sectors
    const knuckle = bezierPoint(b.start, b.cp1, b.cp2, b.tip, 0.65);

    // Stagger thread lengths across depths to prevent elevation clusters
    const threadLength = 24 + (b.depth % 3) * 14;
    const tagX = knuckle.x - width / 2;
    const tagY = knuckle.y + threadLength;

    tags.push({
      branch: b,
      knuckle,
      x: tagX,
      y: tagY,
      width,
      height,
      name: b.name,
      code: b.code,
      noteCount: b.noteCount,
    });
  });

  // Iterative AABB Relaxation pass to push apart any near or overlapping tags
  for (let iter = 0; iter < 50; iter++) {
    let moved = false;
    for (let i = 0; i < tags.length; i++) {
      for (let j = i + 1; j < tags.length; j++) {
        const a = tags[i];
        const b = tags[j];
        const padX = 14;
        const padY = 8;

        const minAx = a.x - padX / 2;
        const maxAx = a.x + a.width + padX / 2;
        const minAy = a.y - padY / 2;
        const maxAy = a.y + a.height + padY / 2;

        const minBx = b.x - padX / 2;
        const maxBx = b.x + b.width + padX / 2;
        const minBy = b.y - padY / 2;
        const maxBy = b.y + b.height + padY / 2;

        const overlapX = Math.min(maxAx, maxBx) - Math.max(minAx, minBx);
        const overlapY = Math.min(maxAy, maxBy) - Math.max(minAy, minBy);

        if (overlapX > 0 && overlapY > 0) {
          moved = true;
          if (overlapY < overlapX * 0.7) {
            const push = overlapY / 2 + 1;
            if (a.y < b.y) {
              a.y -= push;
              b.y += push;
            } else {
              a.y += push;
              b.y += push;
            }
          } else {
            const push = overlapX / 2 + 1;
            if (a.x < b.x) {
              a.x -= push;
              b.x += push;
            } else {
              a.x += push;
              b.x += push;
            }
          }
        }
      }
    }
    if (!moved) break;
  }

  tags.forEach((t) => {
    t.branch.tanzaku = {
      knuckle: t.knuckle,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      name: t.branch.name,
      code: t.branch.code,
      noteCount: t.branch.noteCount,
    };
  });
}

// Helpers
function findNodeByPath(node, targetPath) {
  if (node.path === targetPath) return node;
  for (const child of node.children || []) {
    const found = findNodeByPath(child, targetPath);
    if (found) return found;
  }
  return null;
}

function stripCode(name) {
  if (!name) return "";
  return name.replace(/^\d{3}\s+/, "").replace(/^\d{3}\s*/, "") || name;
}
