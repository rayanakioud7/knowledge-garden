import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../api.js";

// Combined search + tag browser. Reads ?q= (text) or ?tag= (tag) from the URL
// so links from the note sidebar and ⌘K flow work.
export default function SearchView() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const tag = params.get("tag") || "";
  const [input, setInput] = useState(q);
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInput(q);
  }, [q]);

  useEffect(() => {
    api.tags().then((d) => setTags(d.tags)).catch(() => {});
  }, []);

  useEffect(() => {
    if (!q && !tag) {
      setNotes([]);
      return;
    }
    setLoading(true);
    const filters = {};
    if (q) filters.q = q;
    if (tag) filters.tag = tag;
    api
      .notes(filters)
      .then((d) => setNotes(d.notes))
      .finally(() => setLoading(false));
  }, [q, tag]);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (input) next.q = input;
    setParams(next);
  };

  const topTags = useMemo(() => tags.slice(0, 40), [tags]);

  return (
    <article className="mx-auto max-w-5xl px-6 py-10">
      <div className="label">Search</div>
      <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
        Find a note
      </h1>

      <form onSubmit={submit} className="mt-6 flex gap-2">
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search titles and content…"
          className="w-full border border-paper-line2 bg-paper px-3 py-2.5 font-serif outline-none focus:border-ink"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {tag && (
        <div className="mt-4 flex items-center gap-2">
          <span className="label">Filtering by tag</span>
          <span className="chip">{tag}</span>
          <button onClick={() => setParams({})} className="link text-sm">
            clear
          </button>
        </div>
      )}

      {/* Tag cloud */}
      <div className="mt-8">
        <div className="label border-b border-paper-line pb-1">Tags</div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {topTags.map((t) => (
            <button
              key={t.tag}
              onClick={() => setParams({ tag: t.tag })}
              className={`border px-2 py-0.5 font-mono text-[11px] transition-colors ${
                tag === t.tag
                  ? "border-ink bg-ink text-paper"
                  : "border-paper-line2 text-ink-soft hover:border-ink"
              }`}
            >
              {t.tag}
              <span className="ml-1 text-ink-faint">{t.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        {(q || tag) && (
          <div className="label mb-3">
            {loading ? "Searching…" : `${notes.length} result${notes.length === 1 ? "" : "s"}`}
          </div>
        )}
        <ul className="divide-y divide-paper-line">
          {notes.map((n) => (
            <li key={n.id} className="py-3">
              <Link to={`/garden/note/${n.id}`} className="group block">
                <div className="font-serif text-[1.05rem] text-ink group-hover:text-accent">
                  {n.title}
                </div>
                {n.excerpt && (
                  <div className="mt-0.5 line-clamp-2 text-sm text-ink-mute">
                    {n.excerpt}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
