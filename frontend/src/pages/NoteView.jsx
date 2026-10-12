import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api.js";
import Markdown from "../components/Markdown.jsx";

export default function NoteView() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setNote(null);
    setError(false);
    window.scrollTo({ top: 0 });
    api
      .note(id)
      .then(setNote)
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <article className="mx-auto max-w-prose px-6 py-16 text-center">
        <div className="label">404</div>
        <h1 className="mt-2 font-sans text-2xl font-bold">Note not found</h1>
        <Link to="/garden" className="btn mt-6">
          ← Back to the garden
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
          Garden
        </Link>
        {note.domain && (
          <>
            <span>/</span>
            <Link
              to={`/garden/notes?domain=${note.domain}`}
              className="hover:text-ink"
            >
              {note.domain} {note.domainName}
            </Link>
          </>
        )}
        {note.section && (
          <>
            <span>/</span>
            <span className="text-ink-faint">{note.section}</span>
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
              <span>{note.wordCount} words</span>
              {note.has_latex && <span>math</span>}
              {note.sectionName && <span>{note.sectionName}</span>}
            </div>
          </header>

          <div className="mt-8">
            <Markdown html={note.html} />
          </div>
        </div>

        {/* Sidebar: tags + backlinks + outgoing */}
        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">
          {note.tags?.length > 0 && (
            <div>
              <div className="label border-b border-paper-line pb-1">Tags</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {note.tags.map((t) => (
                  <Link key={t} to={`/garden/search?tag=${encodeURIComponent(t)}`} className="chip hover:border-ink">
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
              <ul className="mt-3 space-y-1.5">
                {note.backlinks.map((b) => (
                  <li key={b.id}>
                    <Link
                      to={`/garden/note/${b.id}`}
                      className="text-sm text-ink-soft hover:text-accent"
                    >
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(note.outgoing_links_detail?.length > 0 || note.outgoing_links?.length > 0) && (
            <div>
              <div className="label border-b border-paper-line pb-1">
                Outgoing ({(note.outgoing_links_detail || note.outgoing_links).length})
              </div>
              <ul className="mt-3 space-y-1.5">
                {(note.outgoing_links_detail || note.outgoing_links.map((id) => ({ id, title: id }))).map((item) => {
                  const targetId = typeof item === "string" ? item : item.id;
                  const targetTitle = typeof item === "string" ? item.replace(/-/g, " ") : item.title;
                  return (
                    <li key={targetId}>
                      <Link
                        to={`/garden/note/${targetId}`}
                        className="truncate text-sm text-ink-mute hover:text-accent"
                        title={targetTitle}
                      >
                        {targetTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
