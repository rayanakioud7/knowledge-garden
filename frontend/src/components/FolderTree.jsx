import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { api } from "../api.js";

export default function FolderTree() {
  const [tree, setTree] = useState(null);
  const [expanded, setExpanded] = useState(() => new Set());
  const [filter, setFilter] = useState("");
  const location = useLocation();

  const [treeError, setTreeError] = useState(false);

  const fetchTree = () => {
    setTreeError(false);
    api
      .tree()
      .then((data) => {
        setTree(data);
        setTreeError(false);
      })
      .catch((err) => {
        console.error("FolderTree load error:", err);
        setTreeError(true);
      });
  };

  useEffect(() => {
    fetchTree();
  }, []);

  // Path chain of the currently-open note, e.g. ["100 …", "110 …", …].
  const activeChain = useMemo(() => {
    const id = location.pathname.startsWith("/garden/note/")
      ? decodeURIComponent(location.pathname.replace("/garden/note/", ""))
      : null;
    if (!id || !tree) return [];
    return findChain(tree, id) || [];
  }, [location.pathname, tree]);

  // Auto-expand every ancestor of the active note.
  useEffect(() => {
    if (activeChain.length === 0) return;
    setExpanded((prev) => {
      const next = new Set(prev);
      let acc = "";
      for (const name of activeChain) {
        acc = acc ? `${acc}/${name}` : name;
        next.add(acc);
      }
      return next;
    });
  }, [activeChain]);

  const toggle = (path) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });

  const expandAll = () => {
    if (!tree) return;
    const allPaths = new Set();
    const collect = (node) => {
      if (node.path) allPaths.add(node.path);
      (node.children || []).forEach(collect);
    };
    (tree.children || []).forEach(collect);
    setExpanded(allPaths);
  };

  const collapseAll = () => {
    setExpanded(new Set());
  };

  if (treeError) {
    return (
      <div className="px-2 py-4 font-mono text-xs text-ink-mute space-y-2">
        <div>Failed to load vault tree.</div>
        <button onClick={fetchTree} className="link text-xs">
          Retry
        </button>
      </div>
    );
  }

  if (!tree) {
    return (
      <div className="px-2 py-4 font-mono text-xs text-ink-mute flex items-center gap-2">
        <span className="inline-block h-3 w-3 animate-spin border-2 border-ink border-t-transparent" />
        Loading vault…
      </div>
    );
  }

  return (
    <div className="text-sm select-none">
      {/* Explorer toolbar */}
      <div className="mb-2 flex items-center justify-between border-b border-paper-line pb-1.5 px-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-mute font-semibold">
          Files
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={expandAll}
            title="Expand all folders"
            className="p-1 text-[11px] text-ink-mute hover:bg-paper-shade hover:text-ink transition-colors"
          >
            <ExpandAllIcon />
          </button>
          <button
            onClick={collapseAll}
            title="Collapse all folders"
            className="p-1 text-[11px] text-ink-mute hover:bg-paper-shade hover:text-ink transition-colors"
          >
            <CollapseAllIcon />
          </button>
        </div>
      </div>

      {/* Filter input */}
      <div className="mb-2 px-1">
        <input
          type="search"
          placeholder="Filter files…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border border-paper-line bg-paper-shade/50 px-2 py-1 text-xs text-ink placeholder:text-ink-faint outline-none focus:border-ink transition-colors"
        />
      </div>

      {/* Folders and Notes */}
      <div className="space-y-0.5">
        {tree.children.map((node) => (
          <TreeNode
            key={node.path}
            node={node}
            expanded={expanded}
            toggle={toggle}
            filter={filter.toLowerCase()}
          />
        ))}

        {tree.notes.length > 0 && (
          <div className="mt-2 border-t border-paper-line/50 pt-1 space-y-0.5">
            {tree.notes
              .filter((n) => !filter || n.title.toLowerCase().includes(filter.toLowerCase()))
              .map((n) => (
                <NoteLink key={n.id} id={n.id} title={n.title} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TreeNode({ node, expanded, toggle, filter, depth = 0 }) {
  const isOpen = expanded.has(node.path) || (filter && hasFilterMatch(node, filter));
  const hasChildren = (node.children && node.children.length > 0) || (node.notes && node.notes.length > 0);

  // If search filter is active and this branch has no matches, hide it
  if (filter && !hasFilterMatch(node, filter)) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => toggle(node.path)}
        className="group flex w-full items-center justify-between gap-1.5 px-1.5 py-1 text-left transition-colors hover:bg-paper-shade"
        style={{ paddingLeft: `${depth * 0.75 + 0.375}rem` }}
      >
        <span className="flex min-w-0 items-center gap-1.5">
          {hasChildren ? (
            <span
              className={`shrink-0 text-ink-faint group-hover:text-ink transition-transform duration-150 ${
                isOpen ? "rotate-90 text-ink" : ""
              }`}
            >
              <ChevronIcon />
            </span>
          ) : (
            <span className="w-3" />
          )}

          {/* Folder Icon */}
          <span className="shrink-0 text-ink-mute group-hover:text-ink">
            {isOpen ? <FolderOpenIcon /> : <FolderIcon />}
          </span>

          {node.code && (
            <span className="shrink-0 font-mono text-[10px] text-ink-faint">
              {node.code}
            </span>
          )}

          <span className="truncate text-xs text-ink-soft group-hover:text-ink">
            {stripCode(node.name)}
          </span>
        </span>

        {node.noteCount > 0 && (
          <span className="shrink-0 font-mono text-[10px] text-ink-faint group-hover:text-ink-mute">
            {node.noteCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="relative">
          {/* Subtle Obsidian-style vertical indent guideline */}
          <div
            className="absolute bottom-1 top-0 border-l border-paper-line"
            style={{ left: `${depth * 0.75 + 0.85}rem` }}
          />

          <div className="space-y-0.5">
            {node.children.map((child) => (
              <TreeNode
                key={child.path}
                node={child}
                expanded={expanded}
                toggle={toggle}
                filter={filter}
                depth={depth + 1}
              />
            ))}

            {node.notes
              .filter((n) => !filter || n.title.toLowerCase().includes(filter))
              .map((n) => (
                <NoteLink
                  key={n.id}
                  id={n.id}
                  title={n.title}
                  depth={depth + 1}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NoteLink({ id, title, depth = 0 }) {
  return (
    <NavLink
      to={`/garden/note/${encodeURIComponent(id)}`}
      className={({ isActive }) =>
        `group flex items-center gap-1.5 truncate py-1 pr-1.5 text-xs transition-colors ${
          isActive
            ? "bg-ink text-paper font-medium"
            : "text-ink-mute hover:bg-paper-shade hover:text-ink"
        }`
      }
      style={{ paddingLeft: `${depth * 0.75 + 1.2}rem` }}
      title={title}
    >
      <span className="shrink-0 text-ink-faint group-hover:text-ink">
        <NoteFileIcon />
      </span>
      <span className="truncate">{title}</span>
    </NavLink>
  );
}

// Check if node or its descendants match search filter
function hasFilterMatch(node, q) {
  if (node.name.toLowerCase().includes(q)) return true;
  if (node.notes?.some((n) => n.title.toLowerCase().includes(q))) return true;
  return node.children?.some((c) => hasFilterMatch(c, q));
}

// "112 Algebra" -> "Algebra"
function stripCode(name) {
  return name.replace(/^\d{3}\s+/, "").replace(/^\d{3}\s*/, "") || name;
}

// Find ancestor path chain leading to target note id
function findChain(node, targetId) {
  if (node.notes?.some((n) => n.id === targetId)) {
    return node.path ? node.path.split("/") : [];
  }
  for (const child of node.children || []) {
    const found = findChain(child, targetId);
    if (found) return found;
  }
  return null;
}

// Lightweight Obsidian-aesthetic SVG icons
function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6 3.5l5 4.5-5 4.5V3.5z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function FolderOpenIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19h14a2 2 0 0 0 1.9-1.38L23 11H7.83L6.15 17.7a2 2 0 0 1-1.15 1.3z" />
      <path d="M2 5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v2H6a2 2 0 0 0-1.95 1.55L2 18V5z" />
    </svg>
  );
}

function NoteFileIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ExpandAllIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 15l5 5 5-5M7 9l5-5 5 5" />
    </svg>
  );
}

function CollapseAllIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 11l5-5 5 5M7 13l5 5 5-5" />
    </svg>
  );
}
