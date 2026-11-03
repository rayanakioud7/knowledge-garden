import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../api.js";
import Markdown from "../components/Markdown.jsx";
import MocConstellation from "../components/MocConstellation.jsx";
import { getTree } from "../lib/gardenData.js";
import { resolveChapter } from "../lib/chapter.js";
import { pushRecent } from "../lib/recents.js";

export default function NoteView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [error, setError] = useState(false);
  const [tree, setTree] = useState(null);

  useEffect(() => {
    let alive = true;
    setNote(null);
    setError(false);
    window.scrollTo({ top: 0 });
    api
      .note(id)
      .then((n) => {
        if (!alive) return;
        setNote(n);
        pushRecent(n); // powers the atlas "resume" strip + palette recents
      })
      .catch(() => { if (alive) setError(true); });
    return () => { alive = false; };
  }, [id]);

  useEffect(() => {
    getTree()
      .then(setTree)
      .catch(() => {
        /* the chapter rail is optional */
      });
  }, []);

  const headings = useMemo(() => {
    if (!note?.html) return [];
    const doc = new DOMParser().parseFromString(note.html, "text/html");
    return [...doc.querySelectorAll("h2[id], h3[id]")].map(h => ({ id: h.id, text: h.textContent, level: h.tagName }));
  }, [note]);

  useEffect(() => {
    if (!note || !window.location.hash) return;
    const target = decodeURIComponent(window.location.hash.slice(1));
    const frame = requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [note]);

  const chapter = useMemo(
    () => (note ? resolveChapter(tree, note) : null),
    [tree, note]
  );
  const pos = chapter ? chapter.notes.findIndex((n) => n.id === note.id) : -1;
  const prev = pos > 0 ? chapter.notes[pos - 1] : null;
  const next =
    chapter && pos >= 0 && pos < chapter.notes.length - 1
      ? chapter.notes[pos + 1]
      : null;

  // Book-style paging: [ and ] move through the chapter (unless typing).
  useEffect(() => {
    if (!prev && !next) return;
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (
        t instanceof HTMLElement &&
        (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
      ) {
        return;
      }
      if (e.key === "[" && prev) navigate(`/garden/note/${prev.id}`);
      else if (e.key === "]" && next) navigate(`/garden/note/${next.id}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, navigate]);

  if (error) {
    return (
      <article className="mx-auto max-w-prose px-6 py-16 text-center">
        <div className="label">404</div>
        <h1 className="mt-2 font-sans text-2xl font-bold">Note not found</h1>
        <Link to="/garden" className="btn mt-6">
          ← Back to the library
        </Link>
      </article>
    );
  }

  if (!note) return <div className="p-10 label">Loading…</div>;

  return (
    <article className="mx-auto max-w-6xl px-6 py-10">
      {/* Breadcrumb */}
      <nav className="label flex flex-wrap items-center gap-1.5">
        <Link to="/garden" className="hover:text-ink">
          Library
        </Link>
        {note.domain && (
          <>
            <span>/</span>
            <Link
              to={`/garden?path=${encodeURIComponent(note.folders?.[0] || "")}`}
              className="hover:text-ink"
            >
              {note.domain} {note.domainName}
            </Link>
          </>
        )}
        {note.section && (
          <>
            <span>/</span>
            <span className="text-ink-faint">
              {note.section} {note.sectionName}
            </span>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_16rem]">
        {/* Main content */}
        <div className="min-w-0">
          <header>
            <h1 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {note.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px] text-ink-mute">
              {note.date && <span>{note.date}</span>}
              <span>{Math.max(1, Math.ceil(note.wordCount / 220))} min read</span>
              <span>{note.wordCount} words</span>
              {note.hasLatex && <span>math</span>}
              {note.isMoc && <span className="text-accent">map of content</span>}
            </div>
          </header>

          {note.isMoc && <MocConstellation note={note} />}

          <div className="mt-8">
            <Markdown html={note.html} />
          </div>

          {/* Book rails: previous / next inside the chapter */}
          {(prev || next) && (
            <nav className="mt-12 grid gap-3 border-t border-paper-line pt-6 sm:grid-cols-2">
              {prev ? (
                <Link
                  to={`/garden/note/${prev.id}`}
                  className="group border border-paper-line px-4 py-3 transition-colors hover:border-ink"
                >
                  <div className="label">← Previous</div>
                  <div className="mt-1 truncate text-sm text-ink-soft group-hover:text-accent">
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/garden/note/${next.id}`}
                  className="group border border-paper-line px-4 py-3 transition-colors hover:border-ink sm:text-right"
                >
                  <div className="label">Next →</div>
                  <div className="mt-1 truncate text-sm text-ink-soft group-hover:text-accent">
                    {next.title}
                  </div>
                </Link>
              )}
            </nav>
          )}
        </div>

        {/* Sidebar: chapter TOC + tags + backlinks + outgoing */}
        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">
          {headings.length > 0 && <nav aria-label="On this page"><h2 className="label border-b border-paper-line pb-2">On this page</h2><ul className="mt-3 max-h-64 space-y-2 overflow-y-auto">{headings.map((h,i) => <li key={`${h.id}-${i}`} className={h.level === "H3" ? "pl-3" : ""}><a href={`#${h.id}`} className="block text-xs leading-relaxed text-ink-mute hover:text-accent">{h.text}</a></li>)}</ul></nav>}
          {chapter && (
            <div>
              <div className="label flex items-baseline justify-between border-b border-paper-line pb-1">
                <span>Chapter</span>
                <span className="text-ink-faint">
                  {pos >= 0 ? pos + 1 : "–"} / {chapter.notes.length}
                </span>
              </div>
              <div className="mt-2 truncate font-sans text-xs font-semibold text-ink-soft">
                {chapter.node.name}
              </div>
              <div className="mt-2 flex gap-1.5">
                <button
                  disabled={!prev}
                  onClick={() => prev && navigate(`/garden/note/${prev.id}`)}
                  className="btn-ghost !px-2 !py-1 text-xs disabled:cursor-default disabled:opacity-30"
                  aria-label="Previous note in chapter"
                  title={prev ? prev.title : "Start of chapter"}
                >
                  ←
                </button>
                <button
                  disabled={!next}
                  onClick={() => next && navigate(`/garden/note/${next.id}`)}
                  className="btn-ghost !px-2 !py-1 text-xs disabled:cursor-default disabled:opacity-30"
                  aria-label="Next note in chapter"
                  title={next ? next.title : "End of chapter"}
                >
                  →
                </button>
                <span className="ml-auto self-center font-mono text-[10px] text-ink-faint">
                  [ ]
                </span>
              </div>
              <ul className="mt-3 max-h-72 space-y-0.5 overflow-y-auto pr-1">
                {chapter.notes.map((n) => (
                  <li key={n.id}>
                    <Link
                      to={`/garden/note/${n.id}`}
                      title={n.title}
                      className={`block truncate py-0.5 text-xs ${
                        n.id === note.id
                          ? "font-medium text-accent"
                          : "text-ink-mute hover:text-ink"
                      }`}
                    >
                      {n.isMoc && (
                        <span className="mr-1 font-mono text-[9px] text-ink-faint">
                          ◆
                        </span>
                      )}
                      {n.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {note.tags?.length > 0 && (
            <div>
              <div className="label border-b border-paper-line pb-1">Tags</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {note.tags.map((t) => (
                  <Link
                    key={t}
                    to={`/garden/search?tag=${encodeURIComponent(t)}`}
                    className="chip hover:border-ink"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {note.backlinks?.length > 0 && (
            <div>
              <div className="label border-b border-paper-line pb-1">
                Linked references ({note.backlinks.length})
              </div>
              <ul className="mt-3 max-h-72 space-y-1.5 overflow-y-auto pr-1">
                {note.backlinks.map((b) => (
                  <li key={b.id}>
                    <Link
                      to={`/garden/note/${b.id}`}
                      className="truncate text-sm text-ink-soft hover:text-accent"
                      title={b.title}
                    >
                      {b.isMoc && (
                        <span className="mr-1 font-mono text-[9px] text-ink-faint">
                          ◆
                        </span>
                      )}
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {note.outgoingLinksDetail?.length > 0 && (
            <div>
              <div className="label border-b border-paper-line pb-1">
                Outgoing ({note.outgoingLinksDetail.length})
              </div>
              <ul className="mt-3 max-h-72 space-y-1.5 overflow-y-auto pr-1">
                {note.outgoingLinksDetail.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/garden/note/${item.id}`}
                      className="truncate text-sm text-ink-mute hover:text-accent"
                      title={item.title}
                    >
                      {item.isMoc && (
                        <span className="mr-1 font-mono text-[9px] text-ink-faint">
                          ◆
                        </span>
                      )}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
