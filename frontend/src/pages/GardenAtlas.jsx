import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getMocs, getNotes } from "../lib/gardenData.js";
import { getLastRead } from "../lib/recents.js";
import MocPlate from "../components/MocPlate.jsx";

const openPalette = () =>
  window.dispatchEvent(new CustomEvent("garden:open-palette"));

// The atlas: a catalog of every Map of Content in the vault, grouped by Dewey
// domain. Each plate is a self-drawing mini-constellation (the MOC hub plus
// every note it links to); clicking one opens the MOC's own page.
export default function GardenAtlas() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const domain = params.get("domain") || "";
  const [recentNotes, setRecentNotes] = useState([]);
  const [mocs, setMocs] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const resume = useMemo(() => getLastRead(), []);

  useEffect(() => {
    let alive = true;
    setError(false);
    getNotes().then((notes) => {
      if (alive) setRecentNotes([...notes].sort((a, b) => b.mtime - a.mtime).slice(0, 6));
    }).catch(() => {});
    getMocs()
      .then((list) => alive && setMocs(list))
      .catch((err) => {
        console.error("Atlas load error:", err);
        if (alive) setError(true);
      });
    return () => {
      alive = false;
    };
  }, [attempt]);

  const groups = useMemo(() => {
    if (!mocs) return [];
    const map = new Map();
    for (const m of mocs) {
      const code = m.domain || "000";
      if (!map.has(code)) {
        map.set(code, {
          code,
          name: m.domainName || "Ungrouped",
          plates: [],
        });
      }
      map.get(code).plates.push(m);
    }
    return [...map.values()].sort((a, b) => a.code.localeCompare(b.code));
  }, [mocs]);

  const totalLinks = useMemo(
    () => (mocs ? mocs.reduce((sum, m) => sum + m.linkCount, 0) : 0),
    [mocs]
  );

  const visibleGroups = groups
    .filter((g) => !domain || g.code === domain)
    .map((g) => ({ ...g, plates: g.plates.filter((m) =>
      `${m.title} ${(m.folders || []).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())
    ) })).filter((g) => g.plates.length);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };

  return (
    <article className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="label">Knowledge Garden</div>
          <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink">
            Atlas of Maps
          </h1>
        </div>
        <button
          onClick={openPalette}
          className="btn-ghost font-mono text-xs"
          aria-label="Open the search palette"
        >
          Search <span className="chip">⌘K</span>
        </button>
      </div>

      <p className="mt-3 max-w-prose text-sm text-ink-mute">
        {mocs ? (
          <>
            {mocs.length} maps of content ·{" "}
            {totalLinks.toLocaleString()} wikilinks · {groups.length} domains.
          </>
        ) : (
          "The vault's maps of content."
        )}{" "}
        Each plate is one MOC: the hub is the map itself, every dot a note it
        links to, shaded by that note's domain.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 border-y border-paper-line py-4">
        <input type="search" aria-label="Find a topic map" placeholder="Find a topic map…" value={query}
          onChange={(e) => updateFilter("q", e.target.value)}
          className="min-w-0 flex-1 border border-paper-line2 bg-paper px-3 py-2 text-sm" />
        <select aria-label="Filter maps by domain" value={domain} onChange={(e) => updateFilter("domain", e.target.value)}
          className="max-w-full border border-paper-line2 bg-paper px-3 py-2 text-sm">
          <option value="">All domains</option>
          {groups.map((g) => <option key={g.code} value={g.code}>{g.name}</option>)}
        </select>
        <Link to="/garden/notes" className="btn-ghost">Browse all notes →</Link>
      </div>
      {mocs && !error && visibleGroups.length === 0 && <p role="status" className="mt-8 text-ink-mute">No maps match. Try another topic or browse all notes.</p>}

      {resume && (
        <Link
          to={`/garden/note/${resume.id}`}
          className="mt-6 flex items-center gap-3 border border-paper-line bg-paper-shade px-4 py-3 transition-colors hover:border-accent"
        >
          <span className="label shrink-0">Resume</span>
          <span className="truncate text-sm text-ink-soft">
            {resume.title}
          </span>
          <span className="ml-auto shrink-0 font-mono text-xs text-ink-mute">
            →
          </span>
        </Link>
      )}

      {error && (
        <div className="mt-10 border border-paper-line px-4 py-6 text-center">
          <div className="label">Failed to load the atlas</div>
          <button
            className="btn mt-4"
            onClick={() => {
              setMocs(null);
              setAttempt((n) => n + 1);
            }}
          >
            Retry
          </button>
        </div>
      )}

      {!mocs && !error && (
        <div className="mt-10 label">Loading map catalog…</div>
      )}

      {recentNotes.length > 0 && <section className="mt-8">
        <h2 className="label border-b border-paper-line pb-2">Recently updated notes</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {recentNotes.map((note) => <li key={note.id}><Link className="link text-sm" to={`/garden/note/${note.id}`}>{note.title}</Link></li>)}
        </ul>
      </section>}

      {visibleGroups.map((group) => (
        <section key={group.code} className="mt-10">
          <div className="flex items-baseline gap-3 border-b border-paper-line pb-2">
            <span className="font-mono text-[11px] text-ink-faint">
              {group.code}
            </span>
            <h2 className="label text-ink-soft">{group.name}</h2>
            <span className="ml-auto font-mono text-[11px] text-ink-faint">
              {group.plates.length}{" "}
              {group.plates.length === 1 ? "map" : "maps"}
            </span>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {group.plates.map((moc) => (
              <MocPlate key={moc.id} moc={moc} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
