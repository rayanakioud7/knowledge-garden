import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../api.js";

// The garden landing: a searchable, domain-filterable index of every note.
// This mirrors the "index of concepts" feel of aman.ai but for the vault.
export default function GardenHome() {
  const [params, setParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [domains, setDomains] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const activeDomain = params.get("domain") || "";

  useEffect(() => {
    api.domains().then((d) => setDomains(d.domains)).catch(() => {});
  }, []);

  // Debounce the text filter so a per-keystroke request is not fired.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 200);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    let alive = true;
    setError(false);
    setLoading(true);
    const filters = {};
    if (activeDomain) filters.domain = activeDomain;
    if (debouncedQuery) filters.q = debouncedQuery;
    api
      .notes(filters)
      .then((d) => { if (alive) setNotes(d.notes); })
      .catch(() => { if (alive) { setNotes([]); setError(true); } })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [activeDomain, debouncedQuery]);

  const domainName = useMemo(
    () => domains.find((d) => d.code === activeDomain)?.name,
    [domains, activeDomain]
  );

  return (
    <article className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="label">Knowledge Garden</div>
          <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
            {domainName ? `${activeDomain} · ${domainName}` : "All Notes"}
          </h1>
        </div>
        <div className="flex gap-2">
          <Link to="/garden" className="btn-ghost">
            Atlas
          </Link>
          <Link to="/garden/graph" className="btn-ghost">
            Graph
          </Link>
          <Link to="/garden/search" className="btn-ghost">
            Search
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mt-6 flex flex-col gap-3 border-y border-paper-line py-4 sm:flex-row sm:items-center">
        <input
          aria-label="Filter notes"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title or excerpt…"
          className="w-full border border-paper-line2 bg-paper px-3 py-2 text-sm outline-none focus:border-ink sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          <DomainChip
            code=""
            active={!activeDomain}
            onClick={() => setParams({})}
            label="All"
          />
          {domains.map((d) => (
            <DomainChip
              key={d.code}
              code={d.code}
              name={d.name}
              count={d.count}
              active={activeDomain === d.code}
              onClick={() => setParams({ domain: d.code })}
            />
          ))}
        </div>
      </div>

      {error && <p role="alert" className="mt-6 text-ink-soft">Could not load notes. Please reload to try again.</p>}
      {/* Notes list */}
      {loading ? (
        <div className="py-10 label">Loading…</div>
      ) : notes.length === 0 ? (
        <div className="py-10 text-ink-mute">No notes match.</div>
      ) : (
        <ul className="mt-6 divide-y divide-paper-line">
          {notes.map((n) => (
            <li key={n.id} className="py-3">
              <Link
                to={`/garden/note/${n.id}`}
                className="group flex items-baseline justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="font-serif text-[1.05rem] text-ink group-hover:text-accent">
                    {n.title}
                  </div>
                  {n.excerpt && (
                    <div className="mt-0.5 truncate text-sm text-ink-mute">
                      {n.excerpt}
                    </div>
                  )}
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {n.domain && (
                      <span className="chip">{n.domain}</span>
                    )}
                    {n.tags.slice(0, 3).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-ink-faint">
                  {n.domain || "—"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 label">{notes.length} notes</div>
    </article>
  );
}

function DomainChip({ code, name, count, active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`border px-2.5 py-1 font-mono text-[12px] transition-colors ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-paper-line2 text-ink-soft hover:border-ink hover:text-ink"
      }`}
      title={name}
    >
      {label || code}
      {count != null && !active && (
        <span className="ml-1 text-ink-faint">{count}</span>
      )}
    </button>
  );
}
