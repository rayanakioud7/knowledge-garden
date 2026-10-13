import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api.js";

// ============================================================================
// Japanese Sumi-e Procedural Ink Bonsai Knowledge Tree (水墨画 · 竹笹盆栽)
// Features:
// - HTML5 Canvas 2D Procedural Calligraphy Engine (Real brushwork, zero plastic SVG)
// - Classical Sumi-e Bamboo Leaves (笹葉 Sasa-ha): Every note is an individual, clickable leaf!
// - Pixel-Perfect Coordinate Alignment (Screen-to-World synced with getBoundingClientRect)
// - Full-Branch & Floating Label Hit-Testing with Visual Hover Highlights
// - Multi-Bristle Simulation (毛筆 Kehitsu) with Dry-Brush (飛白 Kasure) & Ink Bleed (滲み Nijimi)
// - Wide Lateral Moyogi Bonsai Boughs: Spreads widely across 120°-160° fans (Zero vertical broom)
// - Floating Calligraphy & Vermilion Hanko Seals (印鑑): Zero clunky boxes
// - Interactive Slide-Out Washi Parchment Drawer for Note Inspection
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

  // Viewport & Interactive Canvas State
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 0.85 });
  const targetCamera = useRef({ x: 0, y: 0, zoom: 0.85 });
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const mouseDownPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);
  const [viewportDims, setViewportDims] = useState({ width: 1000, height: 700 });
  const [cursorScreenPos, setCursorScreenPos] = useState(null);
  const cursorWorldPos = useRef({ x: 0, y: 0 });
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

  // 2. Measure Container Dimensions on Mount & Resize via ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateDims = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setViewportDims({ width: rect.width, height: rect.height });
      }
    };
    updateDims();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setViewportDims({ width, height });
        }
      }
    });
    ro.observe(el);

    window.addEventListener("resize", updateDims);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDims);
    };
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

  // 5. Build Wide Lateral Moyogi Bonsai Layout
  const treeLayout = useMemo(() => {
    if (!tree) return null;
    return generateMoyogiBonsaiLayout(tree, currentPath);
  }, [tree, currentPath]);

  // 6. Camera Lerp Animation Loop
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
            return prev;
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
        y: treeLayout.rootOrigin.y - 360,
        zoom: 0.82,
      };
    } else {
      const activeBranch = treeLayout.branches.find((b) => b.path === currentPath);
      if (activeBranch) {
        targetCamera.current = {
          x: activeBranch.tip.x,
          y: activeBranch.tip.y - 80,
          zoom: Math.min(2.2, 1.1 + (activeBranch.depth || 1) * 0.22),
        };
      }
    }
  }, [currentPath, treeLayout]);

  // 8. Non-passive wheel event listener for smooth zooming
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

  // --------------------------------------------------------------------------
  // 9. Coordinate Conversion: 100% Synced with Exact Canvas Dimensions
  // --------------------------------------------------------------------------
  const screenToWorld = useCallback(
    (screenX, screenY) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      const relX = screenX - rect.left;
      const relY = screenY - rect.top;
      const worldX = (relX - rect.width / 2) / camera.zoom + camera.x;
      const worldY = (relY - rect.height / 2) / camera.zoom + camera.y;
      return { x: worldX, y: worldY };
    },
    [camera]
  );

  // --------------------------------------------------------------------------
  // 10. Procedural Canvas 2D Painting Loop
  // --------------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !treeLayout) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width <= 0 || height <= 0) return;

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Theme colors
    const isDark = document.documentElement.classList.contains("dark");
    const inkBase = isDark ? "#f4f4f5" : "#121214";
    const inkSoft = isDark ? "#d4d4d8" : "#38383c";
    const inkMute = isDark ? "#a1a1aa" : "#71717a";
    const paperBg = isDark ? "#0d0d0f" : "#fbf9f5"; // Warm washi parchment tone
    const vermilion = "#9e2a2b"; // Authentic Japanese seal red

    // Clear Canvas
    ctx.fillStyle = paperBg;
    ctx.fillRect(0, 0, width, height);

    // Subtle Washi Paper Texture Specks (Organic fibers)
    drawWashiFibers(ctx, width, height, isDark);

    // Apply Camera Transform
    ctx.save();
    ctx.translate(width / 2 - camera.x * camera.zoom, height / 2 - camera.y * camera.zoom);
    ctx.scale(camera.zoom, camera.zoom);

    // 1. Zen Rock Garden Sand Ripples (枯山水 Karesansui)
    drawZenRipples(ctx, treeLayout.rootOrigin, inkMute, isDark);

    // 2. Moyogi S-Curve Trunk & Nebari Spreading Roots
    drawSumiTrunk(ctx, treeLayout.rootOrigin, treeLayout.trunkApex, inkBase, inkSoft, vermilion);

    // 3. Calligraphic Tapered Boughs & Branches (Categories)
    treeLayout.branches.forEach((branch) => {
      if (branch.path === "") return;
      const isActive = currentPath === branch.path;
      const isAncestor = currentPath.startsWith(branch.path);
      const isHovered = hoveredNode?.branch?.path === branch.path || hoveredNode?.path === branch.path;

      drawSumiBranch(ctx, branch, inkBase, inkSoft, vermilion, isActive, isAncestor, isHovered);
    });

    // 4. Classical Sumi-e Bamboo Leaves (笹葉 Sasa-ha): Every note is an individual leaf!
    treeLayout.leaves.forEach((leaf) => {
      const isHovered = hoveredNode?.leaf?.id === leaf.id || hoveredNode?.id === leaf.id;
      const isSelected = selectedLeaf?.id === leaf.id;

      drawBambooLeaf(ctx, leaf, inkBase, inkSoft, vermilion, isDark, isHovered, isSelected);
    });

    // 5. Floating Calligraphy Titles & Vermilion Hanko Stamps for Categories (Zero Boxes)
    treeLayout.branches.forEach((branch) => {
      if (branch.path === "") return;
      const isActive = currentPath === branch.path;
      const isAncestor = currentPath.startsWith(branch.path);
      const isHovered = hoveredNode?.branch?.path === branch.path || hoveredNode?.path === branch.path;

      drawFloatingCalligraphy(ctx, branch, inkBase, inkSoft, vermilion, isActive, isAncestor, isHovered);
    });

    // 6. Interactive Zen Cursor Ring on Canvas
    if (cursorWorldPos.current && cursorScreenPos) {
      const cw = cursorWorldPos.current;
      const isHovering = Boolean(hoveredNode);
      ctx.save();
      ctx.strokeStyle = isHovering ? vermilion : isDark ? "rgba(244, 244, 245, 0.35)" : "rgba(18, 18, 20, 0.3)";
      ctx.lineWidth = isHovering ? 1.5 : 0.8;
      ctx.setLineDash(isHovering ? [] : [3, 3]);

      ctx.beginPath();
      ctx.arc(cw.x, cw.y, isHovering ? 16 : 10, 0, Math.PI * 2);
      ctx.stroke();

      if (isHovering) {
        ctx.fillStyle = vermilion;
        ctx.beginPath();
        ctx.arc(cw.x, cw.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    ctx.restore(); // Restore Camera
    ctx.restore(); // Restore DPR
  }, [treeLayout, camera, viewportDims, currentPath, hoveredNode, selectedLeaf, cursorScreenPos]);

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

  // Mouse pan drag & hit test handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    setCursorScreenPos({ x: e.clientX, y: e.clientY });

    if (isDragging.current) {
      const distMoved = Math.hypot(e.clientX - mouseDownPos.current.x, e.clientY - mouseDownPos.current.y);
      if (distMoved > 4) {
        hasDragged.current = true;
      }
      const dx = (e.clientX - dragStart.current.x) / camera.zoom;
      const dy = (e.clientY - dragStart.current.y) / camera.zoom;
      dragStart.current = { x: e.clientX, y: e.clientY };

      targetCamera.current = {
        x: targetCamera.current.x - dx,
        y: targetCamera.current.y - dy,
        zoom: targetCamera.current.zoom,
      };
      return;
    }

    // Hit Testing under cursor
    if (!treeLayout) return;
    const world = screenToWorld(e.clientX, e.clientY);
    cursorWorldPos.current = world;

    const hit = findHitTarget(world, treeLayout);
    setHoveredNode(hit);
  };

  const handleMouseLeave = () => {
    setCursorScreenPos(null);
    setHoveredNode(null);
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleClick = (e) => {
    if (hasDragged.current) {
      return; // User was panning, ignore click
    }
    if (!treeLayout) return;
    const world = screenToWorld(e.clientX, e.clientY);
    const hit = findHitTarget(world, treeLayout);

    if (!hit) return;

    if (hit.type === "leaf") {
      setSelectedLeaf({
        ...hit.note,
        sectionName: hit.sectionName,
        domainCode: hit.domainCode,
      });
    } else if (hit.type === "branch") {
      zoomIntoBranch(hit.branch.path);
    }
  };

  const handleDoubleClick = (e) => {
    if (!treeLayout) return;
    const world = screenToWorld(e.clientX, e.clientY);
    const hit = findHitTarget(world, treeLayout);

    if (hit && hit.type === "leaf") {
      navigate(`/garden/note/${encodeURIComponent(hit.id)}`);
    } else if (hit && hit.type === "branch") {
      zoomIntoBranch(hit.branch.path);
    }
  };

  // Touch handlers for mobile pan & pinch
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      hasDragged.current = false;
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      mouseDownPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      isDragging.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStart.current.dist = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging.current) {
      const distMoved = Math.hypot(
        e.touches[0].clientX - mouseDownPos.current.x,
        e.touches[0].clientY - mouseDownPos.current.y
      );
      if (distMoved > 4) {
        hasDragged.current = true;
      }
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
          Grinding Sumi ink and painting bamboo foliage...
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
              <span>Sumi-e Knowledge Garden</span>
              <span className="text-ink-faint">·</span>
              <span className="text-[#9e2a2b] dark:text-accent font-semibold">水墨画 · 竹笹盆栽</span>
            </div>
            <div className="font-serif text-lg font-bold tracking-tight text-ink flex items-center gap-2">
              <span>{stripCode(currentName)}</span>
              {activeNode.code && (
                <span className="font-mono text-xs font-normal text-ink-mute border border-paper-line2 px-1.5 py-0.5 rounded-sm">
                  [{activeNode.code}]
                </span>
              )}
            </div>
          </div>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:inline">
            Tier: {depth} / 6
          </span>
        </div>

        {/* HUD Controls */}
        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-1 sm:pb-0">
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
          Sumi-e Bamboo Tree · Click branch to zoom in · Click individual bamboo leaf to inspect note · Drag to pan
        </span>
      </div>

      {/* ---------------- Main Procedural Sumi-e Canvas Container ---------------- */}
      <div
        ref={containerRef}
        className={`relative flex-1 overflow-hidden touch-none ${
          hoveredNode ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full block"
          style={{ width: "100%", height: "100%" }}
        />

        {/* ---------------- Floating Tooltip Follower ---------------- */}
        {cursorScreenPos && hoveredNode && (
          <div
            className="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-12 border border-ink bg-paper/95 px-3.5 py-1 font-mono text-xs text-ink shadow-xl backdrop-blur-md rounded-sm whitespace-nowrap"
            style={{ left: cursorScreenPos.x, top: cursorScreenPos.y }}
          >
            {hoveredNode.type === "leaf" ? (
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#9e2a2b]" />
                <span>
                  Note: <strong>{hoveredNode.title}</strong> — Click to inspect
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <span className="text-[#9e2a2b] font-bold">⤢</span>
                <span>
                  Category: <strong>{stripCode(hoveredNode.name)}</strong> — Click to zoom
                </span>
              </div>
            )}
          </div>
        )}

        {/* ---------------- Slide-Out Washi Parchment Drawer ---------------- */}
        {selectedLeaf && (
          <aside className="absolute bottom-6 right-6 z-20 w-88 border border-ink bg-paper p-6 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-start justify-between gap-2 border-b border-paper-line pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9e2a2b] dark:bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  Bamboo Leaf · 笹の葉
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

            <h3 className="mt-3.5 font-serif text-xl font-bold tracking-tight text-ink leading-snug">
              {selectedLeaf.title}
            </h3>

            <div className="mt-3 font-mono text-[11px] text-ink-soft space-y-1.5 border-t border-paper-line2/60 pt-2.5">
              {selectedLeaf.domainCode && (
                <div className="flex items-center gap-2">
                  <span className="text-ink-mute">Code:</span>
                  <span className="font-bold text-[#9e2a2b] dark:text-accent">
                    [{selectedLeaf.domainCode}]
                  </span>
                </div>
              )}
              <div>
                <span className="text-ink-mute">Bough:</span> {stripCode(selectedLeaf.sectionName || "Garden")}
              </div>
              <div className="truncate">
                <span className="text-ink-mute">File:</span> {selectedLeaf.path || selectedLeaf.id}
              </div>
            </div>

            {selectedLeaf.tags && selectedLeaf.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1 border-t border-paper-line2/60 pt-2.5">
                {selectedLeaf.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] border border-paper-line2 px-1.5 py-0.5 text-ink-mute"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

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

        {/* Floating status badge on hover */}
        {hoveredNode && !selectedLeaf && (
          <div className="pointer-events-none absolute bottom-5 left-6 z-20 border border-paper-line2 bg-paper/95 px-3.5 py-1.5 font-mono text-xs text-ink shadow-sm backdrop-blur-sm">
            {hoveredNode.type === "leaf" ? (
              <span>
                Note Leaf: <strong>{hoveredNode.title}</strong> — Click to inspect · Double-click to open
              </span>
            ) : (
              <span>
                Category Limb: <strong>{stripCode(hoveredNode.name)}</strong> — Click to zoom in
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Canvas 2D Procedural Sumi-e Drawing Engines
// ============================================================================

// 1. Subtle Washi Paper Texture Fibers
function drawWashiFibers(ctx, width, height, isDark) {
  ctx.save();
  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.015)" : "rgba(30, 20, 10, 0.02)";
  const seed = 42;
  for (let i = 0; i < 40; i++) {
    const rx = ((Math.sin(seed + i * 17) + 1) / 2) * width;
    const ry = ((Math.cos(seed + i * 29) + 1) / 2) * height;
    const rlen = 4 + (i % 8);
    const rang = (i * 0.4) % Math.PI;

    ctx.beginPath();
    ctx.moveTo(rx, ry);
    ctx.lineTo(rx + Math.cos(rang) * rlen, ry + Math.sin(rang) * rlen);
    ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(40, 30, 20, 0.03)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
  ctx.restore();
}

// 2. Zen Rock Garden Sand Concentrics (枯山水 Karesansui)
function drawZenRipples(ctx, root, inkMute, isDark) {
  const { x, y } = root;
  const radii = [80, 160, 250, 350, 480];

  ctx.save();
  ctx.strokeStyle = isDark ? "rgba(244, 244, 245, 0.08)" : "rgba(18, 18, 20, 0.07)";
  ctx.lineWidth = 0.9;
  ctx.setLineDash([8, 6]);

  // Baseline
  ctx.beginPath();
  ctx.moveTo(x - 450, y);
  ctx.lineTo(x + 450, y);
  ctx.stroke();

  // Upper concentric ellipses
  radii.forEach((r, idx) => {
    ctx.setLineDash(idx % 2 === 0 ? [8, 6] : [4, 5]);
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.45, 0, Math.PI, 0, false);
    ctx.stroke();
  });

  ctx.restore();
}

// 3. Moyogi S-Curve Trunk & Nebari Roots
function drawSumiTrunk(ctx, root, apex, inkBase, inkSoft, vermilion) {
  const { x, y } = root;

  ctx.save();

  // Nebari Spreading Roots (Gripping the soil)
  const rootStrokes = [
    { p0: { x: x - 20, y }, cp: { x: x - 70, y: y + 25 }, p1: { x: x - 150, y: y + 42 }, w: 8 },
    { p0: { x: x - 8, y }, cp: { x: x - 35, y: y + 35 }, p1: { x: x - 65, y: y + 70 }, w: 5 },
    { p0: { x: x + 20, y }, cp: { x: x + 80, y: y + 25 }, p1: { x: x + 160, y: y + 45 }, w: 9 },
    { p0: { x: x + 6, y }, cp: { x: x + 40, y: y + 35 }, p1: { x: x + 75, y: y + 72 }, w: 5 },
  ];

  rootStrokes.forEach((r) => {
    drawMultiBristleCurve(ctx, r.p0, r.cp, r.cp, r.p1, r.w, 1.5, inkSoft);
  });

  // Main S-Curve Trunk Calligraphic Body
  const cp1 = { x: x - 30, y: y - 80 };
  const cp2 = { x: x + 35, y: y - 170 };

  // 1. Soft Wet Wash Under-Bleed (Nijimi)
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = inkBase;
  ctx.lineWidth = 36;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, apex.x, apex.y);
  ctx.stroke();
  ctx.restore();

  // 2. Multi-Bristle Core Body
  drawMultiBristleCurve(ctx, { x, y }, cp1, cp2, apex, 30, 14, inkBase);

  // 3. Dry-Brush Bark Grain Hatching (Kasure)
  ctx.save();
  ctx.strokeStyle = inkSoft;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = 1.2;
  ctx.setLineDash([14, 10]);

  ctx.beginPath();
  ctx.moveTo(x - 6, y - 25);
  ctx.bezierCurveTo(cp1.x - 8, cp1.y, cp2.x - 6, cp2.y, apex.x - 4, apex.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 8, y - 30);
  ctx.bezierCurveTo(cp1.x + 8, cp1.y, cp2.x + 10, cp2.y, apex.x + 4, apex.y);
  ctx.stroke();
  ctx.restore();

  // 4. Traditional Vermilion Red Hanko Seal (印鑑: "知·庭")
  ctx.save();
  ctx.translate(x - 22, y + 14);
  ctx.fillStyle = "rgba(158, 42, 43, 0.12)";
  ctx.strokeStyle = vermilion;
  ctx.lineWidth = 1.4;
  ctx.strokeRect(0, 0, 44, 22);
  ctx.fillRect(0, 0, 44, 22);

  ctx.fillStyle = vermilion;
  ctx.font = "bold 10px 'Source Serif 4', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("知·庭", 22, 11);
  ctx.restore();

  ctx.restore();
}

// 4. Calligraphic Sumi-e Branch Limb (Category Folders)
function drawSumiBranch(ctx, branch, inkBase, inkSoft, vermilion, isActive, isAncestor, isHovered) {
  const { start, cp1, cp2, tip, strokeWidth } = branch;

  ctx.save();

  // Active or Hovered Glowing Ink Halo
  if (isActive || isHovered) {
    ctx.save();
    ctx.globalAlpha = 0.22;
    ctx.strokeStyle = vermilion;
    ctx.lineWidth = strokeWidth + 14;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, tip.x, tip.y);
    ctx.stroke();
    ctx.restore();
  }

  // Soft Ink Bleed Underlayer (Nijimi)
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = inkBase;
  ctx.lineWidth = strokeWidth + 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, tip.x, tip.y);
  ctx.stroke();
  ctx.restore();

  // Multi-Bristle Stroke Body
  const endW = Math.max(2.2, strokeWidth * 0.55);
  const color = isHovered ? vermilion : isActive ? inkBase : isAncestor ? inkSoft : inkSoft;
  drawMultiBristleCurve(ctx, start, cp1, cp2, tip, strokeWidth, endW, color);

  // Branch Knuckle Joint (Bonsai Node)
  ctx.fillStyle = isHovered ? vermilion : inkBase;
  ctx.beginPath();
  ctx.arc(tip.x, tip.y, Math.max(2.8, endW * 0.75), 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// 5. Classical Sumi-e Bamboo Leaf Blades (笹葉 Sasa-ha) for Individual Notes
function drawBambooLeaf(ctx, leaf, inkBase, inkSoft, vermilion, isDark, isHovered, isSelected) {
  const { twigStart, base, angle, length, width, title } = leaf;

  ctx.save();

  // 1. Petiole Twig: connects branch knuckle cleanly to leaf base
  ctx.save();
  ctx.strokeStyle = isHovered || isSelected ? vermilion : isDark ? "rgba(244, 244, 245, 0.45)" : "rgba(18, 18, 20, 0.35)";
  ctx.lineWidth = isHovered ? 1.4 : 0.9;
  ctx.beginPath();
  ctx.moveTo(twigStart.x, twigStart.y);
  ctx.lineTo(base.x, base.y);
  ctx.stroke();
  ctx.restore();

  // 2. Leaf Blade Dynamic Dimensions
  const curWidth = isHovered ? width * 1.3 : width;
  const curLength = isHovered ? length * 1.15 : length;

  const actualTip = {
    x: base.x + Math.cos(angle) * curLength,
    y: base.y + Math.sin(angle) * curLength,
  };

  const perpX = -Math.sin(angle);
  const perpY = Math.cos(angle);

  // Curved belly control points
  const cpLeft = {
    x: base.x + Math.cos(angle) * (curLength * 0.36) + perpX * (curWidth * 0.55),
    y: base.y + Math.sin(angle) * (curLength * 0.36) + perpY * (curWidth * 0.55),
  };
  const cpRight = {
    x: base.x + Math.cos(angle) * (curLength * 0.36) - perpX * (curWidth * 0.55),
    y: base.y + Math.sin(angle) * (curLength * 0.36) - perpY * (curWidth * 0.55),
  };

  // Hover Glowing Halo
  if (isHovered || isSelected) {
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = vermilion;
    ctx.beginPath();
    ctx.moveTo(base.x, base.y);
    ctx.quadraticCurveTo(cpLeft.x + perpX * 4, cpLeft.y + perpY * 4, actualTip.x, actualTip.y);
    ctx.quadraticCurveTo(cpRight.x - perpX * 4, cpRight.y - perpY * 4, base.x, base.y);
    ctx.fill();
    ctx.restore();
  }

  // 3. Bamboo Leaf Blade Body (Classic Sumi-e Wash Fill)
  ctx.beginPath();
  ctx.moveTo(base.x, base.y);
  ctx.quadraticCurveTo(cpLeft.x, cpLeft.y, actualTip.x, actualTip.y);
  ctx.quadraticCurveTo(cpRight.x, cpRight.y, base.x, base.y);
  ctx.closePath();

  if (isSelected) {
    ctx.fillStyle = "rgba(158, 42, 43, 0.88)";
  } else if (isHovered) {
    ctx.fillStyle = isDark ? "rgba(244, 244, 245, 0.78)" : "rgba(18, 18, 20, 0.78)";
  } else {
    ctx.fillStyle = isDark ? "rgba(244, 244, 245, 0.22)" : "rgba(18, 18, 20, 0.18)";
  }
  ctx.fill();

  // 4. Calligraphic Edge Contour
  ctx.strokeStyle = isSelected
    ? vermilion
    : isHovered
    ? (isDark ? "#f4f4f5" : "#121214")
    : (isDark ? "rgba(244, 244, 245, 0.6)" : "rgba(18, 18, 20, 0.5)");
  ctx.lineWidth = isHovered ? 1.6 : 1.0;
  ctx.stroke();

  // 5. Central Midrib Vein (Single swift calligraphic stroke)
  ctx.beginPath();
  ctx.moveTo(base.x, base.y);
  ctx.lineTo(actualTip.x, actualTip.y);
  ctx.strokeStyle = isSelected
    ? "#ffffff"
    : isHovered
    ? (isDark ? "#121214" : "#ffffff")
    : (isDark ? "rgba(244, 244, 245, 0.35)" : "rgba(18, 18, 20, 0.3)");
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // 6. Floating Title Label when this specific leaf is hovered
  if (isHovered) {
    ctx.save();
    const isLeft = Math.cos(angle) < 0;
    const labelX = actualTip.x + (isLeft ? -10 : 10);
    const labelY = actualTip.y;

    ctx.font = "bold 11px 'Source Serif 4', Georgia, serif";
    ctx.textAlign = isLeft ? "right" : "left";
    ctx.textBaseline = "middle";

    const metrics = ctx.measureText(title);
    const textW = metrics.width;

    ctx.fillStyle = isDark ? "rgba(13, 13, 15, 0.95)" : "rgba(251, 249, 245, 0.95)";
    ctx.strokeStyle = vermilion;
    ctx.lineWidth = 1;
    const pillX = isLeft ? labelX - textW - 8 : labelX - 4;
    ctx.beginPath();
    ctx.roundRect(pillX, labelY - 10, textW + 12, 20, 3);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isDark ? "#f4f4f5" : "#121214";
    ctx.fillText(title, labelX, labelY);
    ctx.restore();
  }

  ctx.restore();
}

// 6. Floating Calligraphy Titles & Vermilion Hanko Stamps for Categories (Zero Boxes!)
function drawFloatingCalligraphy(ctx, branch, inkBase, inkSoft, vermilion, isActive, isAncestor, isHovered) {
  if (!branch.labelPos) return;
  const { x, y, align } = branch.labelPos;
  const displayName = stripCode(branch.name);
  const code = branch.code;

  ctx.save();

  const isHighlighted = isActive || isHovered;
  const bounds = getBranchLabelBounds(branch);

  // Subtle washi pill highlight badge on hover / active
  if (isHighlighted && bounds) {
    ctx.save();
    ctx.fillStyle = "rgba(158, 42, 43, 0.08)";
    ctx.strokeStyle = "rgba(158, 42, 43, 0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bounds.minX, bounds.minY, bounds.width, bounds.height, 3);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  ctx.textAlign = align || "left";
  ctx.textBaseline = "middle";

  // Title Text (Editorial Serif Calligraphy)
  ctx.font = `${isHighlighted ? "bold" : "600"} 13px 'Source Serif 4', Georgia, serif`;
  ctx.fillStyle = isHighlighted ? (isActive ? vermilion : inkBase) : inkSoft;
  ctx.fillText(displayName, x, y);

  // Vermilion Hanko Stamp for Dewey Code
  if (code) {
    const codeText = `[${code}]`;
    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.fillStyle = isHighlighted ? vermilion : "rgba(158, 42, 43, 0.85)";
    const codeY = y - 14;
    ctx.fillText(codeText, x, codeY);
  }

  // Delicate Silk Leader Cord connecting branch knuckle to calligraphy baseline
  ctx.save();
  ctx.strokeStyle = isHighlighted ? vermilion : "rgba(113, 113, 122, 0.45)";
  ctx.lineWidth = isHighlighted ? 1.0 : 0.7;
  ctx.setLineDash([2, 3]);

  ctx.beginPath();
  ctx.moveTo(branch.tip.x, branch.tip.y);
  ctx.lineTo(x + (align === "right" ? 10 : -10), y + 6);
  ctx.stroke();
  ctx.restore();

  // Subtle Note Count Indicator
  if (branch.noteCount != null && branch.noteCount > 0) {
    ctx.font = "normal 10px 'JetBrains Mono', monospace";
    ctx.fillStyle = isHighlighted ? vermilion : "rgba(113, 113, 122, 0.7)";
    const countOffset = align === "right" ? -displayName.length * 7 - 14 : displayName.length * 7 + 12;
    ctx.fillText(`· ${branch.noteCount}`, x + countOffset, y);
  }

  ctx.restore();
}

// ----------------------------------------------------------------------------
// Multi-Bristle Brush Engine (Simulates Hair Strands + Dry Brush Kasure)
// ----------------------------------------------------------------------------
function drawMultiBristleCurve(ctx, p0, cp1, cp2, p3, startW, endW, strokeColor) {
  const steps = 36;
  const bristleCount = 7;

  const samples = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pt = bezierPoint(p0, cp1, cp2, p3, t);

    const dt = 0.01;
    const ptNext = bezierPoint(p0, cp1, cp2, p3, Math.min(1, t + dt));
    const tx = ptNext.x - pt.x;
    const ty = ptNext.y - pt.y;
    const tlen = Math.hypot(tx, ty) || 1;

    const nx = -ty / tlen;
    const ny = tx / tlen;

    const bellFactor = 1 + 0.3 * Math.sin(Math.PI * t);
    const w = (startW * (1 - t) + endW * t) * bellFactor;

    samples.push({ pt, nx, ny, w, t });
  }

  ctx.save();
  ctx.strokeStyle = strokeColor;
  ctx.lineCap = "round";

  for (let b = 0; b < bristleCount; b++) {
    const bristleRatio = (b / (bristleCount - 1) - 0.5) * 2;
    const strandOpacity = 0.35 + (1 - Math.abs(bristleRatio)) * 0.45;
    ctx.globalAlpha = strandOpacity;
    ctx.lineWidth = Math.max(0.7, (endW / bristleCount) * 1.6);

    ctx.beginPath();
    let started = false;

    for (let i = 0; i < samples.length; i++) {
      const s = samples[i];
      const kasure = Math.abs(bristleRatio) > 0.6 && (i + b * 5) % 11 === 0;
      if (kasure) {
        started = false;
        continue;
      }

      const jitter = Math.sin(i * 1.2 + b * 2.5) * 0.6;
      const offset = bristleRatio * (s.w / 2) + jitter;
      const bx = s.pt.x + s.nx * offset;
      const by = s.pt.y + s.ny * offset;

      if (!started) {
        ctx.moveTo(bx, by);
        started = true;
      } else {
        ctx.lineTo(bx, by);
      }
    }
    ctx.stroke();
  }

  ctx.restore();
}

// Cubic Bezier point math
function bezierPoint(p0, cp1, cp2, p3, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    x: mt3 * p0.x + 3 * mt2 * t * cp1.x + 3 * mt * t2 * cp2.x + t3 * p3.x,
    y: mt3 * p0.y + 3 * mt2 * t * cp1.y + 3 * mt * t2 * cp2.y + t3 * p3.y,
  };
}

// Distance from point to cubic Bezier curve
function distToBranchCurve(point, branch) {
  const steps = 14;
  let minDist = Infinity;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pt = bezierPoint(branch.start, branch.cp1, branch.cp2, branch.tip, t);
    const d = Math.hypot(point.x - pt.x, point.y - pt.y);
    if (d < minDist) minDist = d;
  }
  return minDist;
}

// Bounding box calculation for branch labels
function getBranchLabelBounds(b) {
  if (!b.labelPos) return null;
  const displayName = stripCode(b.name);
  const textWidth = Math.max(90, displayName.length * 8.5 + (b.code ? 35 : 0) + 20);
  const isLeft = b.labelPos.align === "right";
  const minX = isLeft ? b.labelPos.x - textWidth - 8 : b.labelPos.x - 8;
  const maxX = isLeft ? b.labelPos.x + 8 : b.labelPos.x + textWidth + 8;
  const minY = b.labelPos.y - 20;
  const maxY = b.labelPos.y + 14;
  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}

// Find Hit Target under world coordinates
function findHitTarget(world, treeLayout) {
  if (!treeLayout) return null;

  // 1. Individual Bamboo Leaves (Highest priority: individual notes)
  for (const leaf of treeLayout.leaves) {
    const dist = Math.hypot(world.x - leaf.center.x, world.y - leaf.center.y);
    if (dist <= leaf.hitRadius) {
      return {
        type: "leaf",
        leaf,
        title: leaf.title,
        id: leaf.id,
        note: leaf.note,
        path: leaf.path,
        sectionName: leaf.sectionName,
        domainCode: leaf.domainCode,
      };
    }
  }

  // 2. Floating Branch Labels (Exact Text Bounding Box)
  for (const b of treeLayout.branches) {
    if (b.path === "") continue;
    const bounds = getBranchLabelBounds(b);
    if (bounds) {
      if (
        world.x >= bounds.minX &&
        world.x <= bounds.maxX &&
        world.y >= bounds.minY &&
        world.y <= bounds.maxY
      ) {
        return { type: "branch", branch: b, name: b.name, path: b.path, x: b.tip.x, y: b.tip.y };
      }
    }
  }

  // 3. Branch Limbs (Cubic Bezier curve proximity)
  for (const b of treeLayout.branches) {
    if (b.path === "") continue;
    const distCurve = distToBranchCurve(world, b);
    const hitRadius = Math.max(16, b.strokeWidth / 2 + 10);
    if (distCurve <= hitRadius) {
      return { type: "branch", branch: b, name: b.name, path: b.path, x: b.tip.x, y: b.tip.y };
    }
  }

  return null;
}

// ============================================================================
// Wide Lateral Moyogi Bonsai Layout Engine with Bamboo Leaf Sprigs
// ============================================================================

function generateMoyogiBonsaiLayout(treeData, activePath) {
  const branches = [];
  const leaves = [];

  const rootOrigin = { x: 0, y: 380 };
  const trunkApex = { x: 10, y: 140 };

  // 1. Root Trunk
  branches.push({
    id: "root-trunk",
    path: "",
    name: "Vault Root",
    start: rootOrigin,
    tip: trunkApex,
    cp1: { x: -25, y: 290 },
    cp2: { x: 30, y: 200 },
    strokeWidth: 28,
    depth: 0,
    noteCount: treeData.notes?.length || 0,
  });

  const topCategories = treeData.children || [];
  const totalTop = topCategories.length;
  if (totalTop === 0) {
    return { rootOrigin, trunkApex, branches, leaves };
  }

  // 2. Moyogi Bonsai Primary Boughs (Alternating Wide Left and Right Lateral Wings)
  const boughConfigs = [
    { angle: -2.35, length: 390, curve: -40, side: "left" }, // ~ -135° (wide sweeping left)
    { angle: -0.78, length: 420, curve: 40, side: "right" }, // ~ -45°  (wide sweeping right)
    { angle: -2.05, length: 450, curve: -45, side: "left" }, // ~ -117° (high left)
    { angle: -1.05, length: 470, curve: 45, side: "right" }, // ~ -60°  (high right)
    { angle: -1.57, length: 380, curve: -25, side: "center" }, // ~ -90°  (apex crown)
    { angle: -2.75, length: 340, curve: -35, side: "left" }, // ~ -158° (low sweeping left)
  ];

  topCategories.forEach((cat, idx) => {
    const cfg = boughConfigs[idx % boughConfigs.length];
    const angle = cfg.angle;
    const length = cfg.length;

    const tipX = trunkApex.x + Math.cos(angle) * length;
    const tipY = trunkApex.y + Math.sin(angle) * length;

    const perp = angle + Math.PI / 2;
    const cp1 = {
      x: trunkApex.x + Math.cos(angle) * (length * 0.38) + Math.cos(perp) * cfg.curve,
      y: trunkApex.y + Math.sin(angle) * (length * 0.38) + Math.sin(perp) * cfg.curve,
    };
    const cp2 = {
      x: trunkApex.x + Math.cos(angle) * (length * 0.75),
      y: trunkApex.y + Math.sin(angle) * (length * 0.75),
    };

    const isLeft = cfg.side === "left";
    const labelPos = {
      x: tipX + (isLeft ? -28 : 28),
      y: tipY - 22,
      align: isLeft ? "right" : "left",
    };

    const branch = {
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
      strokeWidth: 15,
      depth: 1,
      side: cfg.side,
      labelPos,
    };
    branches.push(branch);

    if (activePath.startsWith(cat.path)) {
      blossomMoyogiSubtree(cat, branch, activePath, 2, branches, leaves);
    } else {
      // If terminal/inactive, sprout bamboo leaves for direct notes
      if (cat.notes && cat.notes.length > 0) {
        generateBambooLeaves(cat.notes, branch.tip, branch.angle, leaves, cat.name, cat.code);
      }
    }
  });

  return { rootOrigin, trunkApex, branches, leaves };
}

// Recursive Lateral Subtree Blossom
function blossomMoyogiSubtree(node, parentBranch, activePath, depth, branches, leaves) {
  const children = node.children || [];
  const total = children.length;

  if (total > 0) {
    const fanSpan = Math.min(2.1, 0.95 + total * 0.26);

    children.forEach((child, idx) => {
      const ratio = total === 1 ? 0 : idx / (total - 1) - 0.5;
      const childAngle = parentBranch.angle + ratio * fanSpan;

      const tierOffset = (idx % 2 === 0 ? 0 : 55) + (idx % 3) * 35;
      const length = Math.max(160, 260 - depth * 25) + tierOffset;

      const tipX = parentBranch.tip.x + Math.cos(childAngle) * length;
      const tipY = parentBranch.tip.y + Math.sin(childAngle) * length;

      const curve = ((idx % 2 === 0 ? -1 : 1) * 26) / Math.max(1, depth - 1);
      const perp = childAngle + Math.PI / 2;
      const cp1 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.35) + Math.cos(perp) * curve,
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.35) + Math.sin(perp) * curve,
      };
      const cp2 = {
        x: parentBranch.tip.x + Math.cos(childAngle) * (length * 0.75),
        y: parentBranch.tip.y + Math.sin(childAngle) * (length * 0.75),
      };

      const strokeWidth = Math.max(3.0, parentBranch.strokeWidth * 0.62);
      const isLeft = Math.cos(childAngle) < 0;

      const labelPos = {
        x: tipX + (isLeft ? -22 : 22),
        y: tipY - 20,
        align: isLeft ? "right" : "left",
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
        labelPos,
      };
      branches.push(branch);

      if (activePath.startsWith(child.path)) {
        blossomMoyogiSubtree(child, branch, activePath, depth + 1, branches, leaves);
      } else {
        if (child.notes && child.notes.length > 0) {
          generateBambooLeaves(child.notes, branch.tip, branch.angle, leaves, child.name, child.code);
        }
      }
    });
  }

  // Sprout bamboo leaves for direct notes on this active node
  if (node.notes && node.notes.length > 0) {
    generateBambooLeaves(node.notes, parentBranch.tip, parentBranch.angle, leaves, node.name, node.code);
  }
}

// Generate Individual Bamboo Leaves for Notes (笹葉 Sasa-ha)
function generateBambooLeaves(notes, branchTip, baseAngle, leavesList, branchName, branchCode) {
  const count = notes.length;
  if (count === 0) return;

  const visibleCount = Math.min(22, count);
  const fanSpan = count === 1 ? 0 : Math.min(Math.PI * 0.78, 0.45 + visibleCount * 0.1);

  for (let i = 0; i < visibleCount; i++) {
    const ratio = visibleCount === 1 ? 0 : i / (visibleCount - 1) - 0.5;
    const leafAngle = baseAngle + ratio * fanSpan;

    // Staggered twigs (two tiers) to give each leaf distinct space
    const tier = i % 2;
    const twigLength = tier === 0 ? 44 : 74 + (i % 3) * 10;

    const baseX = branchTip.x + Math.cos(leafAngle) * twigLength;
    const baseY = branchTip.y + Math.sin(leafAngle) * twigLength;

    const bladeLength = tier === 0 ? 32 : 38;
    const bladeWidth = tier === 0 ? 9 : 11;
    const tipX = baseX + Math.cos(leafAngle) * bladeLength;
    const tipY = baseY + Math.sin(leafAngle) * bladeLength;

    const centerX = (baseX + tipX) / 2;
    const centerY = (baseY + tipY) / 2;

    leavesList.push({
      id: notes[i].id,
      title: notes[i].title,
      path: notes[i].path,
      note: notes[i],
      sectionName: branchName,
      domainCode: branchCode,
      twigStart: branchTip,
      base: { x: baseX, y: baseY },
      tip: { x: tipX, y: tipY },
      center: { x: centerX, y: centerY },
      hitRadius: Math.max(16, bladeLength / 2 + 4),
      angle: leafAngle,
      length: bladeLength,
      width: bladeWidth,
    });
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
