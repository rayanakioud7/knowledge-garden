import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api.js";

// Illustrated Botanical Knowledge Tree
// Features: Organic staggered branching, anti-collision label relaxation,
// leader stems, layered SVG rendering (labels never covered by branches),
// robust illustrated botanical leaf blades with on-hover or text-only title modes.
export default function TreeView() {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPath = params.get("path") || "";
  const [selectedLeaf, setSelectedLeaf] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [labelScale, setLabelScale] = useState(1);
  const [leafLabelMode, setLeafLabelMode] = useState("hover"); // "hover" | "text"

  // Viewport and interactive camera state
  const svgRef = useRef(null);
  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 1 });
  const targetCamera = useRef({ x: 0, y: 0, zoom: 1 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  const [loadError, setLoadError] = useState(false);
  const [svgDims, setSvgDims] = useState({ width: 1000, height: 700 });
  const touchStart = useRef({ x: 0, y: 0, dist: 0 });

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

  useEffect(() => {
    const updateDims = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setSvgDims({ width: rect.width, height: rect.height });
        }
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // Find active node in the tree
  const activeNode = useMemo(() => {
    if (!tree) return null;
    if (!currentPath) return tree;
    return findNodeByPath(tree, currentPath) || tree;
  }, [tree, currentPath]);

  // Breadcrumbs path
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

  // Build the collision-free geometric branching tree structure
  const treeLayout = useMemo(() => {
    if (!tree) return null;
    return generateTreeLayout(tree, currentPath);
  }, [tree, currentPath]);

  // Camera lerp animation loop
  useEffect(() => {
    const animate = () => {
      setCamera((prev) => {
        const dx = targetCamera.current.x - prev.x;
        const dy = targetCamera.current.y - prev.y;
        const dz = targetCamera.current.zoom - prev.zoom;

        if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && Math.abs(dz) < 0.002) {
          return {
            x: targetCamera.current.x,
            y: targetCamera.current.y,
            zoom: targetCamera.current.zoom,
          };
        }

        return {
          x: prev.x + dx * 0.14,
          y: prev.y + dy * 0.14,
          zoom: prev.zoom + dz * 0.14,
        };
      });
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId.current);
  }, []);

  // Update target camera position when path or layout changes
  useEffect(() => {
    if (!treeLayout) return;

    if (!currentPath) {
      // Root view: frame the trunk and primary canopy
      targetCamera.current = {
        x: treeLayout.rootOrigin.x,
        y: treeLayout.rootOrigin.y - 360,
        zoom: 0.85,
      };
    } else {
      // Focus smoothly on the active branch
      const activeBranch = treeLayout.branches.find((b) => b.path === currentPath);
      if (activeBranch) {
        targetCamera.current = {
          x: activeBranch.tip.x,
          y: activeBranch.tip.y - 140,
          zoom: Math.min(2.2, 1.15 + (activeBranch.depth || 1) * 0.25),
        };
      }
    }
  }, [currentPath, treeLayout]);

  // Handlers for zooming
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

  // Mouse pan and wheel zoom
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

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    const newZoom = Math.max(0.35, Math.min(4.5, targetCamera.current.zoom * zoomFactor));
    targetCamera.current = {
      ...targetCamera.current,
      zoom: newZoom,
    };
  };

  // Mobile Touch pan and pinch zoom
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
          Rendering botanical knowledge tree...
        </div>
      </article>
    );
  }

  const currentName = currentPath ? activeNode.name || "Branch" : "Vault Root";
  const depth = breadcrumbs.length;

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] flex-col bg-paper overflow-hidden select-none">
      {/* ---------------- Top Architectural HUD ---------------- */}
      <header className="z-10 flex flex-wrap items-center justify-between gap-3 border-b border-paper-line bg-paper/95 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              Knowledge Tree Explorer [01]
            </div>
            <div className="font-sans text-lg font-bold tracking-tight text-ink">
              {stripCode(currentName)}
              {activeNode.code && (
                <span className="ml-2 font-mono text-xs font-normal text-ink-mute">
                  [{activeNode.code}]
                </span>
              )}
            </div>
          </div>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:inline">
            Depth: {depth} / 6
          </span>
        </div>

        {/* HUD Controls */}
        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-1 sm:pb-0">
          {/* Leaf Titles Mode */}
          <div className="flex items-center border border-paper-line2 bg-paper px-1 py-0.5">
            <span className="px-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
              Leaves:
            </span>
            <button
              onClick={() => setLeafLabelMode("hover")}
              className={`px-2 py-0.5 font-mono text-xs transition-colors ${
                leafLabelMode === "hover" ? "bg-ink text-paper" : "text-ink hover:bg-paper-shade"
              }`}
              title="Hide cards by default; show title on hover"
            >
              On Hover
            </button>
            <button
              onClick={() => setLeafLabelMode("text")}
              className={`px-2 py-0.5 font-mono text-xs transition-colors ${
                leafLabelMode === "text" ? "bg-ink text-paper" : "text-ink hover:bg-paper-shade"
              }`}
              title="Show clean text without boxes"
            >
              Text Only
            </button>
          </div>

          {/* Label Scaling */}
          <div className="flex items-center border border-paper-line2 bg-paper px-1 py-0.5">
            <span className="px-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
              Scale:
            </span>
            <button
              onClick={() => setLabelScale((s) => Math.max(0.65, +(s - 0.15).toFixed(2)))}
              className="px-2 py-0.5 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Decrease scale"
            >
              -
            </button>
            <span className="px-1 font-mono text-[11px] text-ink-soft">
              {Math.round(labelScale * 100)}%
            </span>
            <button
              onClick={() => setLabelScale((s) => Math.min(2.0, +(s + 0.15).toFixed(2)))}
              className="px-2 py-0.5 font-mono text-xs text-ink hover:bg-paper-shade transition-colors"
              title="Increase scale"
            >
              +
            </button>
          </div>

          {/* Camera Zoom buttons */}
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
              title="Zoom Out Viewport"
            >
              [ - ]
            </button>
            <button
              onClick={resetToRoot}
              className="border-l border-paper-line2 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink hover:bg-paper-shade transition-colors"
              title="Reset View to Trunk"
            >
              Root
            </button>
          </div>

          {/* Branch Zoom Out */}
          {currentPath && (
            <button
              onClick={zoomOut}
              className="border border-ink bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wider text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              Zoom Out Branch
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

      {/* ---------------- Breadcrumbs Bar ---------------- */}
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
          Click any branch to zoom in · Hover leaves to see notes · Drag to pan
        </span>
      </div>

      {/* ---------------- Main Illustrated SVG Canvas ---------------- */}
      <div
        className="relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
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
            {/* Architectural Grid pattern */}
            <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-paper-line/30"
              />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#archGrid)" />

          {/* Camera Viewport Group with Dynamic Transform */}
          <g
            transform={`translate(${svgDims.width / 2 - camera.x * camera.zoom}, ${
              svgDims.height / 2 - camera.y * camera.zoom
            }) scale(${camera.zoom})`}
            className="transition-transform duration-75 ease-out"
          >
            {/* Trunk Base / Roots */}
            <TrunkRoots root={treeLayout.rootOrigin} />

            {/* 1. LAYER 1: ALL BRANCH STEMS (rendered in back so lines never overlap labels) */}
            <g id="layer-branch-stems">
              {treeLayout.branches.map((b) => (
                <BranchStem key={b.path} branch={b} isActive={currentPath === b.path} />
              ))}
            </g>

            {/* 2. LAYER 2: LEAF STEMS AND BLADES (Real botanical foliage) */}
            <g id="layer-leaves">
              {treeLayout.leaves.map((leaf) => (
                <LeafStemAndBlade
                  key={leaf.id}
                  leaf={leaf}
                  isHovered={hoveredNode?.id === leaf.id}
                  isSelected={selectedLeaf?.id === leaf.id}
                  onClick={() => setSelectedLeaf(leaf)}
                  onDoubleClick={() => navigate(`/garden/note/${leaf.id}`)}
                  onHover={setHoveredNode}
                />
              ))}
            </g>

            {/* 3. LAYER 3: LEADER LINES (Connecting branch tips to anti-collided labels) */}
            <g id="layer-leader-lines">
              {treeLayout.branches
                .filter((b) => b.label)
                .map((b) => (
                  <LeaderLine key={`leader-${b.path}`} branch={b} />
                ))}
            </g>

            {/* 4. LAYER 4: BRANCH LABELS */}
            <g id="layer-branch-labels">
              {treeLayout.branches
                .filter((b) => b.label)
                .map((b) => (
                  <BranchLabel
                    key={`label-${b.path}`}
                    branch={b}
                    isActive={currentPath === b.path}
                    isAncestor={currentPath.startsWith(b.path)}
                    labelScale={labelScale}
                    onZoom={() => zoomIntoBranch(b.path)}
                    onHover={setHoveredNode}
                  />
                ))}
            </g>

            {/* 5. LAYER 5: LEAF LABELS (Only on hover, or pure text without boxes) */}
            <g id="layer-leaf-labels">
              {treeLayout.leaves.map((leaf) => (
                <LeafLabel
                  key={`leaf-label-${leaf.id}`}
                  leaf={leaf}
                  mode={leafLabelMode}
                  isHovered={hoveredNode?.id === leaf.id}
                  isSelected={selectedLeaf?.id === leaf.id}
                  labelScale={labelScale}
                  onClick={() => setSelectedLeaf(leaf)}
                  onDoubleClick={() => navigate(`/garden/note/${leaf.id}`)}
                  onHover={setHoveredNode}
                />
              ))}
            </g>
          </g>
        </svg>

        {/* ---------------- Side Detail Drawer for Inspected Leaf / Branch ---------------- */}
        {selectedLeaf && (
          <aside className="absolute bottom-6 right-6 z-20 w-80 border border-ink bg-paper p-5 shadow-lg">
            <div className="flex items-start justify-between gap-2 border-b border-paper-line pb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                Leaf Note
              </span>
              <button
                onClick={() => setSelectedLeaf(null)}
                className="font-mono text-xs text-ink-mute hover:text-ink"
              >
                [X]
              </button>
            </div>

            <h3 className="mt-3 font-serif text-base font-bold text-ink">
              {selectedLeaf.title}
            </h3>

            <div className="mt-2 font-mono text-[11px] text-ink-mute space-y-1">
              <div>Path: {selectedLeaf.path || selectedLeaf.id}</div>
              <div>Type: Markdown Document (.md)</div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                to={`/garden/note/${selectedLeaf.id}`}
                className="btn w-full justify-center text-xs"
              >
                Open Note
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
                Branch: <strong>{stripCode(hoveredNode.name)}</strong> ({hoveredNode.noteCount || 0} notes) — Click to zoom in
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Illustrated Trunk and Roots at Base
// -------------------------------------------------------------
function TrunkRoots({ root }) {
  const { x, y } = root;
  return (
    <g className="text-ink">
      {/* Soil Baseline */}
      <line
        x1={x - 260}
        y1={y}
        x2={x + 260}
        y2={y}
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-ink-mute"
      />
      {/* Root Tendrils */}
      <path
        d={`M ${x - 20} ${y} Q ${x - 60} ${y + 35} ${x - 120} ${y + 50}
            M ${x} ${y} Q ${x} ${y + 40} ${x - 30} ${y + 70}
            M ${x + 20} ${y} Q ${x + 70} ${y + 35} ${x + 130} ${y + 55}
            M ${x + 5} ${y} Q ${x + 30} ${y + 45} ${x + 40} ${y + 75}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="text-ink-faint"
      />

      {/* Main Massive Trunk with woodcut hatching lines */}
      <path
        d={`M ${x - 30} ${y}
            C ${x - 26} ${y - 80}, ${x - 22} ${y - 140}, ${x - 16} ${y - 200}
            L ${x + 16} ${y - 200}
            C ${x + 22} ${y - 140}, ${x + 26} ${y - 80}, ${x + 30} ${y}
            Z`}
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Botanical woodcut hatch lines on trunk */}
      <line x1={x - 16} y1={y - 30} x2={x - 9} y2={y - 80} stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1={x} y1={y - 20} x2={x + 2} y2={y - 120} stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1={x + 16} y1={y - 30} x2={x + 9} y2={y - 80} stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* Base plaque */}
      <rect
        x={x - 48}
        y={y + 8}
        width="96"
        height="18"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <text
        x={x}
        y={y + 20}
        textAnchor="middle"
        className="font-mono text-[9px] uppercase tracking-widest fill-ink"
      >
        VAULT ROOT
      </text>
    </g>
  );
}

// -------------------------------------------------------------
// Layer 1: Branch Stems
// -------------------------------------------------------------
function BranchStem({ branch, isActive }) {
  const { start, tip, cp1, cp2, strokeWidth } = branch;
  const pathD = `M ${start.x} ${start.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${tip.x} ${tip.y}`;

  return (
    <g>
      {/* Organic Curved Limb */}
      <path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={`transition-colors duration-200 ${
          isActive ? "text-ink" : "text-ink-soft hover:text-ink"
        }`}
      />
      {/* Secondary interior wood grain highlight */}
      {strokeWidth > 3 && (
        <path
          d={pathD}
          fill="none"
          stroke="var(--paper)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          opacity="0.35"
        />
      )}
      {/* Fork node pin dot */}
      <rect
        x={tip.x - 3}
        y={tip.y - 3}
        width="6"
        height="6"
        fill="currentColor"
        className="text-ink"
      />
    </g>
  );
}

// -------------------------------------------------------------
// Layer 2: Leaf Stems and Illustrated Blades
// -------------------------------------------------------------
function LeafStemAndBlade({ leaf, isHovered, isSelected, onClick, onDoubleClick, onHover }) {
  const { origin, tip, angle } = leaf;
  const deg = (angle * 180) / Math.PI;

  const midX = (origin.x + tip.x) / 2 + Math.cos(angle + Math.PI / 2) * 6;
  const midY = (origin.y + tip.y) / 2 + Math.sin(angle + Math.PI / 2) * 6;

  const highlighted = isHovered || isSelected;

  return (
    <g
      className="group cursor-pointer select-none"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => onHover({ ...leaf, isLeaf: true })}
      onMouseLeave={() => onHover(null)}
    >
      {/* Petiole Stem */}
      <path
        d={`M ${origin.x} ${origin.y} Q ${midX} ${midY} ${tip.x} ${tip.y}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={highlighted ? "1.8" : "1.2"}
        className={`transition-colors duration-150 ${
          highlighted ? "text-ink" : "text-ink-mute group-hover:text-ink"
        }`}
      />

      {/* Botanical Leaf Blade */}
      <g transform={`translate(${tip.x}, ${tip.y}) rotate(${deg - 90}) scale(${highlighted ? 1.25 : 1})`}>
        {/* Solid leaf body with opaque background and dark contour */}
        <path
          d="M 0 0 C -12 -16 -16 -36 0 -52 C 16 -36 12 -16 0 0 Z"
          fill={isSelected ? "currentColor" : "var(--paper)"}
          stroke="currentColor"
          strokeWidth={highlighted ? "1.8" : "1.2"}
          className={`transition-colors duration-150 ${
            isSelected
              ? "text-ink fill-ink/20"
              : "text-ink-soft group-hover:text-ink group-hover:fill-ink/10"
          }`}
        />

        {/* Central Midrib Vein */}
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-48"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-ink-mute group-hover:text-ink"
        />

        {/* Lateral Veinlets */}
        <line x1="0" y1="-12" x2="-5" y2="-19" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
        <line x1="0" y1="-12" x2="5" y2="-19" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
        <line x1="0" y1="-24" x2="-7" y2="-32" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
        <line x1="0" y1="-24" x2="7" y2="-32" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
        <line x1="0" y1="-36" x2="-5" y2="-43" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
        <line x1="0" y1="-36" x2="5" y2="-43" stroke="currentColor" strokeWidth="0.6" className="text-ink-faint group-hover:text-ink-mute" />
      </g>
    </g>
  );
}

// -------------------------------------------------------------
// Layer 3: Leader Lines from Branch Tips to Relaxed Labels
// -------------------------------------------------------------
function LeaderLine({ branch }) {
  const { tip, label } = branch;
  if (!label || !label.hasOffset) return null;

  return (
    <line
      x1={tip.x}
      y1={tip.y}
      x2={label.anchorX}
      y2={label.y + 11}
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="2 3"
      className="text-ink-faint"
    />
  );
}

// -------------------------------------------------------------
// Layer 4: Branch Labels (Collision-Free, Top Z-Index)
// -------------------------------------------------------------
function BranchLabel({ branch, isActive, isAncestor, labelScale, onZoom, onHover }) {
  const { label } = branch;
  if (!label) return null;

  return (
    <g
      transform={`translate(${label.x}, ${label.y}) scale(${labelScale})`}
      className="cursor-pointer group select-none"
      onClick={onZoom}
      onMouseEnter={() => onHover(branch)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background Plaque with solid fill to prevent limb strikethrough */}
      <rect
        x="0"
        y="0"
        width={label.width}
        height="22"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth={isActive ? "1.8" : "1"}
        className={`transition-colors shadow-sm ${
          isActive
            ? "text-ink border-ink"
            : isAncestor
            ? "text-ink"
            : "text-paper-line2 group-hover:text-ink"
        }`}
      />

      {/* Code badge */}
      {label.code && (
        <text
          x="6"
          y="15"
          className="font-mono text-[9px] font-semibold fill-ink-mute"
        >
          {label.code}
        </text>
      )}

      {/* Label Text */}
      <text
        x={label.code ? 30 : 8}
        y="15"
        className="font-sans text-[11px] font-semibold tracking-tight fill-ink"
      >
        {stripCode(label.name)}
      </text>

      {/* Note Count Badge */}
      {label.noteCount != null && (
        <text
          x={label.width - 6}
          y="15"
          textAnchor="end"
          className="font-mono text-[9px] fill-ink-mute"
        >
          {label.noteCount}
        </text>
      )}
    </g>
  );
}

// -------------------------------------------------------------
// Layer 5: Leaf Labels (On-Hover Tooltip or Clean Text)
// -------------------------------------------------------------
function LeafLabel({ leaf, mode, isHovered, isSelected, labelScale, onClick, onDoubleClick, onHover }) {
  const showActive = isHovered || isSelected;

  const isLeft = Math.cos(leaf.angle) < 0;
  const width = Math.max(90, leaf.title.length * 6.5 + 18);

  // Mode 1: On-Hover only (Leaves are pure clean foliage by default; tooltip appears on hover/selection)
  if (mode === "hover") {
    if (!showActive) return null;

    const tooltipX = isLeft ? leaf.tip.x - width - 12 : leaf.tip.x + 12;
    const tooltipY = leaf.tip.y - 11;

    return (
      <g
        transform={`translate(${tooltipX}, ${tooltipY}) scale(${labelScale})`}
        className="cursor-pointer select-none"
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseEnter={() => onHover({ ...leaf, isLeaf: true })}
        onMouseLeave={() => onHover(null)}
      >
        {/* Floating Tooltip Plaque with hard architectural borders */}
        <rect
          x="0"
          y="0"
          width={width}
          height="22"
          fill="var(--paper)"
          stroke="currentColor"
          strokeWidth="1.4"
          className="text-ink shadow-lg"
        />
        <text
          x="8"
          y="15"
          className="font-sans text-[11px] font-semibold tracking-tight fill-ink"
        >
          {leaf.title}
        </text>
      </g>
    );
  }

  // Mode 2: Text-Only (Clean typography without card boxes)
  return (
    <g
      className="cursor-pointer select-none"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => onHover({ ...leaf, isLeaf: true })}
      onMouseLeave={() => onHover(null)}
    >
      <text
        x={isLeft ? leaf.tip.x - 10 : leaf.tip.x + 10}
        y={leaf.tip.y + 4}
        textAnchor={isLeft ? "end" : "start"}
        className={`font-sans text-[10px] tracking-tight transition-colors ${
          showActive
            ? "font-bold fill-ink underline"
            : "font-medium fill-ink-soft hover:fill-ink"
        }`}
      >
        {leaf.title}
      </text>
    </g>
  );
}

// -------------------------------------------------------------
// Advanced Layout Engine with Tiered Staggering & Collision Solver
// -------------------------------------------------------------
function generateTreeLayout(treeData, activePath) {
  const branches = [];
  const leaves = [];

  const rootOrigin = { x: 0, y: 380 };
  const trunkApex = { x: 0, y: 180 };

  // Trunk
  branches.push({
    path: "",
    name: "Vault Trunk",
    start: rootOrigin,
    tip: trunkApex,
    cp1: { x: 0, y: 300 },
    cp2: { x: 0, y: 220 },
    strokeWidth: 14,
    depth: 0,
    noteCount: treeData.notes?.length || 0,
  });

  const topCategories = treeData.children || [];
  const totalTop = topCategories.length;

  topCategories.forEach((cat, index) => {
    const angleRatio = totalTop === 1 ? 0 : index / (totalTop - 1) - 0.5;
    const angle = -Math.PI / 2 + angleRatio * 1.6; // wide fan (-85° to +85°)

    // Tiered radial staggering: alternate lengths so adjacent tips don't bunch
    const lengthTier = index % 2 === 0 ? 280 : 340;
    const length = lengthTier;

    const tipX = trunkApex.x + Math.cos(angle) * length;
    const tipY = trunkApex.y + Math.sin(angle) * length;

    // Organic supple Bezier curve
    const cp1 = {
      x: trunkApex.x + Math.cos(angle) * (length * 0.35) - angleRatio * 25,
      y: trunkApex.y + Math.sin(angle) * (length * 0.35),
    };
    const cp2 = {
      x: trunkApex.x + Math.cos(angle) * (length * 0.75),
      y: trunkApex.y + Math.sin(angle) * (length * 0.75),
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
      angle,
      length,
      strokeWidth: 7,
      depth: 1,
      rawNode: cat,
    };
    branches.push(b);

    // Blossom sub-branches if this category is in the active path
    if (activePath.startsWith(cat.path)) {
      blossomSubBranches(cat, b, activePath, 2, branches, leaves);
    }
  });

  // Calculate non-colliding label positions with relaxation
  resolveLabelLayout(branches, activePath);

  return { rootOrigin, branches, leaves };
}

// Recursively blossom children with tiered staggered lengths
function blossomSubBranches(node, parentBranch, activePath, depth, branches, leaves) {
  const children = node.children || [];
  const notes = node.notes || [];

  const totalChildren = children.length;
  if (totalChildren > 0) {
    const parentAngle = parentBranch.angle;
    // Dynamic spread angle: more children = wider canopy
    const spreadSpan = Math.min(2.5, 0.6 + totalChildren * 0.28);
    const strokeWidth = Math.max(1.4, parentBranch.strokeWidth * 0.65);

    children.forEach((child, idx) => {
      const ratio = totalChildren === 1 ? 0 : idx / (totalChildren - 1) - 0.5;
      const childAngle = parentAngle + ratio * spreadSpan;

      // 3-tier staggered length: breaks up circular radius clusters!
      const tierOffset = (idx % 3) * 60 + (idx % 2) * 20;
      const baseLength = Math.max(160, 260 - depth * 20);
      const length = baseLength + tierOffset;

      const tipX = parentBranch.tip.x + Math.cos(childAngle) * length;
      const tipY = parentBranch.tip.y + Math.sin(childAngle) * length;

      // Supple curved stem
      const curveAmount = ratio * 35;
      const cp1 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.35) - Math.sin(childAngle) * curveAmount,
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.35) + Math.cos(childAngle) * curveAmount,
      };
      const cp2 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.75),
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.75),
      };

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
        length,
        strokeWidth,
        depth,
        rawNode: child,
      };
      branches.push(branch);

      if (activePath.startsWith(child.path)) {
        blossomSubBranches(child, branch, activePath, depth + 1, branches, leaves);
      }
    });
  }

  // Botanical Leaf Notes: alternating left-right sprig foliage
  if (notes.length > 0) {
    const numNotes = Math.min(36, notes.length);
    const baseAngle = parentBranch.angle;

    notes.slice(0, numNotes).forEach((note, nIdx) => {
      // Alternate leaves along sides like a real botanical fern/twig
      const side = nIdx % 2 === 0 ? -1 : 1;
      const row = Math.floor(nIdx / 2);
      const leafAngle = baseAngle + side * (0.45 + (row % 3) * 0.15);
      const leafDist = 65 + row * 26;

      const leafTip = {
        x: parentBranch.tip.x + Math.cos(leafAngle) * leafDist,
        y: parentBranch.tip.y + Math.sin(leafAngle) * leafDist,
      };

      leaves.push({
        id: note.id,
        title: note.title,
        path: note.path,
        origin: parentBranch.tip,
        tip: leafTip,
        angle: leafAngle,
        side,
      });
    });
  }
}

// -------------------------------------------------------------
// Anti-Collision Label Layout & Relaxation Pass
// -------------------------------------------------------------
function resolveLabelLayout(branches, activePath) {
  // 1. Calculate ideal initial label positions pointing OUTWARD
  branches.forEach((b) => {
    if (!b.path) return; // skip trunk
    const isParentOfSprouted = activePath.startsWith(b.path) && activePath !== b.path;

    const width = Math.max(90, (stripCode(b.name).length + (b.code ? 6 : 0) + 7) * 7);
    const height = 22;

    const cosA = Math.cos(b.angle);
    const sinA = Math.sin(b.angle);

    // If this branch is an active parent that already sprouted children,
    // position its label behind its fork along its limb so the fork is clear!
    if (isParentOfSprouted) {
      b.label = {
        name: b.name,
        code: b.code,
        noteCount: b.noteCount,
        width,
        height,
        x: b.tip.x - cosA * 55 - width / 2,
        y: b.tip.y - sinA * 55 - 11,
        anchorX: b.tip.x,
        hasOffset: false,
      };
      return;
    }

    // Outward pointing: if pointing leftwards (cosA < 0), label extends left.
    // If pointing rightwards (cosA >= 0), label extends right.
    const isLeft = cosA < 0;
    const radialPad = 14;

    const labelX = isLeft
      ? b.tip.x + cosA * radialPad - width
      : b.tip.x + cosA * radialPad;

    const labelY = b.tip.y + sinA * radialPad - height / 2;

    b.label = {
      name: b.name,
      code: b.code,
      noteCount: b.noteCount,
      width,
      height,
      x: labelX,
      y: labelY,
      idealY: labelY,
      anchorX: isLeft ? labelX + width : labelX,
      hasOffset: true,
      isLeft,
    };
  });

  // 1D Anti-Collision Relaxation for Left and Right label groups
  relaxLabels(
    branches.filter((b) => b.label?.hasOffset && b.label.isLeft).map((b) => b.label)
  );
  relaxLabels(
    branches.filter((b) => b.label?.hasOffset && !b.label.isLeft).map((b) => b.label)
  );
}

// 1D Relaxation: ensures no two labels overlap vertically
function relaxLabels(labelList) {
  if (labelList.length <= 1) return;

  // Sort by Y coordinate
  labelList.sort((a, b) => a.idealY - b.idealY);

  const minGap = 26; // Height (22) + 4px breathing gap

  // Forward push
  for (let i = 1; i < labelList.length; i++) {
    const prev = labelList[i - 1];
    const curr = labelList[i];
    if (curr.y < prev.y + minGap) {
      curr.y = prev.y + minGap;
    }
  }

  // Backward push relaxation toward idealY
  for (let i = labelList.length - 2; i >= 0; i--) {
    const next = labelList[i + 1];
    const curr = labelList[i];
    if (curr.y > next.y - minGap) {
      curr.y = next.y - minGap;
    }
  }
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
