import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNotes } from "../lib/gardenData.js";
import { getRecents } from "../lib/recents.js";
import { fuzzyMatch } from "../lib/fuzzy.js";
import { toggleTheme } from "../useTheme.js";

const MAX_NOTE_RESULTS = 10;
const MAX_COMMAND_RESULTS = 4;

// Score one note against the query using its title (primary), domain name and
// tags. Maps of content get a boost so "lin alg" surfaces the MOC first.
function scoreNote(q, note) {
  let best = null;

  const title = fuzzyMatch(q, note.title);
  if (title) {
    best = {
      score: title.score + (note.isMoc ? 40 : 0),
      indices: title.indices,
      via: null,
    };
  }

  const domain = fuzzyMatch(q, note.domainName || "");
  if (domain && (!best || domain.score * 0.6 > best.score)) {
    best = { score: domain.score * 0.6, indices: [], via: note.domainName };
  }

  for (const tag of note.tags || []) {
    const hit = fuzzyMatch(q, tag);
    if (hit && (!best || hit.score * 0.7 > best.score)) {
      best = { score: hit.score * 0.7, indices: [], via: `#${tag}` };
    }
  }

  return best;
}

function Highlight({ text, indices }) {
  if (!indices?.length) return text;
  const marked = new Set(indices);
  return [...text].map((ch, i) =>
    marked.has(i) ? (
      <span key={i} className="font-semibold text-accent">
        {ch}
      </span>
    ) : (
      <span key={i}>{ch}</span>
    )
  );
}

// A site-wide quick switcher: ⌘K / Ctrl+K (or the sidebar's Search chip) opens
// a fuzzy palette over the whole vault — notes, maps of content, tags, routes
// and actions. The corpus loads lazily on first open so landing pages stay light.
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const restoreRef = useRef(null);
  const navigate = useNavigate();

  const commands = useMemo(
    () => [
      { id: "nav-atlas", title: "Knowledge Library", hint: "/garden", run: () => navigate("/garden") },
      { id: "nav-maps", title: "Atlas of Maps", hint: "/garden/atlas", run: () => navigate("/garden/atlas") },
      { id: "nav-notes", title: "Notes Index", hint: "/garden/notes", run: () => navigate("/garden/notes") },
      { id: "nav-graph", title: "Graph View", hint: "/garden/graph", run: () => navigate("/garden/graph") },
      { id: "nav-search", title: "Search all notes", hint: "/garden/search", run: () => navigate("/garden/search") },
      { id: "nav-about", title: "About", hint: "/", run: () => navigate("/") },
      { id: "nav-cv", title: "CV", hint: "/cv", run: () => navigate("/cv") },
      { id: "nav-projects", title: "Projects", hint: "/projects", run: () => navigate("/projects") },
      { id: "act-theme", title: "Toggle theme", hint: "light / dark", run: () => toggleTheme() },
    ],
    [navigate]
  );

  // Global keybinding + the custom event buttons elsewhere dispatch.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("garden:open-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("garden:open-palette", onOpenEvent);
    };
  }, []);

  // On open: reset, focus the input, lazy-load the corpus once.
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement;
    setQuery("");
    setCursor(0);
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    {
      setLoading(true);
      getNotes()
        .then(setNotes)
        .catch((err) => console.error("Palette corpus error:", err))
        .finally(() => setLoading(false));
    }
    return () => {
      clearTimeout(t);
      if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      const recents = getRecents()
        .slice(0, 5)
        .map((r) => ({
          key: `recent-${r.id}`,
          title: r.title,
          meta: "note",
          run: () => navigate(`/garden/note/${r.id}`),
        }));
      return [
        { label: "Recent", items: recents },
        {
          label: "Go to & actions",
          items: commands.map((c) => ({ ...c, meta: c.hint })),
        },
      ].filter((s) => s.items.length);
    }

    const scored = [];
    for (const note of notes || []) {
      const hit = scoreNote(q, note);
      if (hit) scored.push({ note, ...hit });
    }
    scored.sort((a, b) => b.score - a.score);

    const maps = [];
    const plain = [];
    for (const hit of scored) {
      const item = {
        key: `note-${hit.note.id}`,
        title: hit.note.title,
        meta: hit.via || hit.note.domainName || "",
        indices: hit.indices,
        isMoc: hit.note.isMoc,
        run: () => navigate(`/garden/note/${hit.note.id}`),
      };
      (hit.note.isMoc ? maps : plain).push(item);
    }

    const cmdItems = commands
      .map((c) => {
        const m = fuzzyMatch(q, c.title);
        return m
          ? { key: c.id, title: c.title, meta: c.hint, indices: m.indices, score: m.score, run: c.run }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_COMMAND_RESULTS);

    return [
      { label: "Maps of content", items: maps.slice(0, MAX_NOTE_RESULTS) },
      { label: "Notes", items: plain.slice(0, MAX_NOTE_RESULTS) },
      {
        label: "Go to & actions",
        items: [
          {
            key: "search-all",
            title: `Search all notes for “${query.trim()}”`,
            meta: "Enter",
            run: () => navigate(`/garden/search?q=${encodeURIComponent(query.trim())}`),
          },
          ...cmdItems,
        ],
      },
    ].filter((s) => s.items.length);
  }, [query, notes, commands, navigate]);

  // Flat list for keyboard navigation; stamp each item with its index.
  const flat = useMemo(() => {
    const items = [];
    for (const section of sections) {
      for (const item of section.items) {
        item.idx = items.length;
        items.push(item);
      }
    }
    return items;
  }, [sections]);

  // Keep the highlighted row in view.
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor, flat.length]);

  if (!open) return null;

  const close = () => setOpen(false);

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flat[cursor];
      if (item) {
        close();
        item.run();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-[10vh]"
      onMouseDown={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl border border-paper-line bg-paper shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-paper-line px-4 py-3">
          <span className="font-mono text-[11px] text-ink-faint">⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search notes, maps, tags — or jump somewhere…"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck="false"
          />
          <button onClick={close} className="label shrink-0 hover:text-ink">
            Esc
          </button>
        </div>

        <ul
          id="palette-list"
          ref={listRef}
          role="listbox"
          aria-label="Results"
          className="max-h-[55vh] overflow-y-auto py-2"
        >
          {loading && <li className="px-4 py-3 label">Loading vault…</li>}
          {!loading && flat.length === 0 && (
            <li className="px-4 py-3 label">No matches.</li>
          )}
          {sections.map((section) => (
            <Fragment key={section.label}>
              <li role="presentation" className="px-4 pb-1 pt-3 label">
                {section.label}
              </li>
              {section.items.map((item) => {
                const active = item.idx === cursor;
                return (
                  <li
                    key={item.key}
                    role="option"
                    aria-selected={active}
                    data-active={active}
                    onMouseEnter={() => setCursor(item.idx)}
                    onClick={() => {
                      close();
                      item.run();
                    }}
                    className={`flex cursor-pointer items-baseline gap-3 px-4 py-2 ${
                      active ? "bg-paper-shade" : ""
                    }`}
                  >
                    <span
                      className={`truncate text-sm ${
                        active ? "font-medium text-accent" : "text-ink-soft"
                      }`}
                    >
                      <Highlight text={item.title} indices={item.indices} />
                    </span>
                    {item.isMoc && (
                      <span className="chip shrink-0 !text-[9px]">MOC</span>
                    )}
                    <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                      {item.meta}
                    </span>
                  </li>
                );
              })}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
