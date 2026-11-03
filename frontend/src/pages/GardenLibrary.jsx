import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getMocs, getNotes, getTree } from "../lib/gardenData.js";
import { getLastRead } from "../lib/recents.js";

const label = (name = "") => name.replace(/^\d{3}\s*/, "").replace(/^MOC\s*[—–-]\s*/, "");
const titleCase = (name) => label(name).toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\bAi\b/g, "AI");
function findFolder(node, path) {
  if (node.path === path) return node;
  for (const child of node.children || []) { const match = findFolder(child, path); if (match) return match; }
  return null;
}
export default function GardenLibrary() {
  const [params, setParams] = useSearchParams();
  const path = params.get("path") || "";
  const query = params.get("q") || "";
  const sort = params.get("sort") || "title";
  const requestedPage = Math.max(1, Number(params.get("page")) || 1);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const resume = useMemo(() => getLastRead(), []);
  useEffect(() => {
    let alive = true;
    setError(false);
    Promise.all([getTree(), getNotes(), getMocs()])
      .then(([tree, notes, maps]) => { if (alive) setData({ tree, notes, maps }); })
      .catch(() => { if (alive) setError(true); });
    return () => { alive = false; };
  }, [attempt]);
  const folder = data ? findFolder(data.tree, path) : null;
  const searching = Boolean(query.trim());
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (key !== "page") next.delete("page");
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };
  const notes = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.notes.filter((n) => (!path || n.folders?.join("/") === path || n.folders?.join("/").startsWith(`${path}/`)) &&
      (!q || `${n.title} ${n.excerpt} ${(n.tags || []).join(" ")}`.toLowerCase().includes(q)))
      .sort((a, b) => sort === "updated" ? b.mtime - a.mtime : a.title.localeCompare(b.title, undefined, { numeric: true }));
  }, [data, path, query, sort]);
  const pageCount = Math.max(1, Math.ceil(notes.length / 30));
  const page = Math.min(requestedPage, pageCount);
  const pageNotes = notes.slice((page - 1) * 30, page * 30);
  const recent = useMemo(() => data ? [...data.notes].filter(n => !n.isMoc && n.wordCount > 80 && n.domain).sort((a,b) => b.mtime-a.mtime).slice(0,4) : [], [data]);
  const maps = data?.maps.filter(m => path && (m.folders.join("/") === path || m.folders.join("/").startsWith(`${path}/`))) || [];
  const crumbs = path.split("/").filter(Boolean);
  const overview = !path && !searching;
  return (
    <article className="editorial-page">
      <header className="border-b border-paper-line pb-8">
        <div className="flex items-center justify-between gap-4"><span className="label">The knowledge garden / Library</span><Link to="/garden/atlas" className="quiet-link">Explore the Atlas ↗</Link></div>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div><h1 className="display-title">{path ? titleCase(crumbs.at(-1)) : "Notes & references."}</h1>
            <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-ink-mute">{path ? "Follow a topic deeper, open a map, or find a note in this subject." : "Notes from courses, books, and independent study. Browse by subject or search for a specific topic."}</p></div>
          {!path && data && <div className="flex gap-8 pb-1"><Metric value={data.notes.length} title="Notes" /><Metric value={data.maps.length} title="Topic maps" /><Metric value={data.tree.children.length} title="Subjects" /></div>}
        </div>
      </header>
      <div className="my-6 flex flex-wrap gap-3">
        <form className="flex min-w-0 flex-1 items-center border border-paper-line2 bg-paper" onSubmit={e=>e.preventDefault()} role="search">
          <span aria-hidden="true" className="pl-4 text-ink-mute">⌕</span>
          <input aria-label="Search the library" type="search" value={query} onChange={e=>update("q", e.target.value)} placeholder={path ? "Search this subject…" : "Find an idea, a concept, a question…"} className="w-full min-w-0 bg-transparent px-3 py-3.5 text-sm outline-none" />
        </form>
        <Link to="/garden/notes" className="btn-ghost">All notes ↗</Link>
      </div>
      {path && <nav aria-label="Library breadcrumb" className="mb-6 flex flex-wrap gap-2 text-xs text-ink-mute"><Link to="/garden" className="link">Library</Link>{crumbs.map((part,i)=><span key={i}> / <Link className="hover:text-accent" to={`/garden?path=${encodeURIComponent(crumbs.slice(0,i+1).join("/"))}`}>{label(part)}</Link></span>)}</nav>}
      {error ? <div role="alert" className="card p-6">The library could not be loaded. <button className="link" onClick={()=>setAttempt(n=>n+1)}>Try again</button></div> : !data ? <p role="status" className="label py-10">Opening the library…</p> : path && !folder ? <p>This subject could not be found. <Link className="link" to="/garden">Return to the library</Link>.</p> : <>
        {overview && <>
          {resume && <Link to={`/garden/note/${resume.id}`} className="mb-8 flex items-center gap-4 border-l-2 border-ink bg-paper-shade p-4"><span className="label shrink-0">Continue reading</span><span className="truncate font-serif text-sm">{resume.title}</span><span className="ml-auto">→</span></Link>}
          <SectionHeader number="01" title="Browse by subject" aside="Organized by subject" />
          <div className="grid gap-x-8 md:grid-cols-2">
            {data.tree.children.map((subject)=><Link key={subject.path} to={`/garden?path=${encodeURIComponent(subject.path)}`} className="subject-row group"><span className="font-mono text-xs text-ink-faint">{subject.code || "000"}</span><div className="min-w-0"><h3 className="font-serif text-xl group-hover:text-accent">{subject.name === "000" ? "Learning & references" : titleCase(subject.name)}</h3><p className="mt-1 truncate text-xs text-ink-mute">{subject.name === "000" ? "Study methods · Reference material · Indexes" : subject.children.slice(0,3).map(c=>label(c.name)).join(" · ") || "Notes, references and connections"}</p></div><span className="ml-auto text-right"><span className="font-mono text-xs text-ink-mute">{subject.noteCount}</span><span className="ml-3 inline-block transition-transform group-hover:translate-x-1">↗</span></span></Link>)}
          </div>
          <section className="mt-12 grid gap-8 border-y border-paper-line bg-paper-shade px-6 py-7 md:grid-cols-[1.2fr_1fr]">
            <div><div className="label">Other views</div><h2 className="mt-3 font-serif text-3xl">Maps & links.</h2><p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-mute">Subjects give the library structure. Maps collect related ideas. The graph reveals the links between them.</p></div>
            <div className="flex flex-col justify-center divide-y divide-paper-line"><Link className="flex justify-between py-3 text-sm" to="/garden/atlas">Atlas of topic maps <span>↗</span></Link><Link className="flex justify-between py-3 text-sm" to="/garden/graph">Explore the knowledge graph <span>↗</span></Link><Link className="flex justify-between py-3 text-sm" to="/projects">See what I’m building <span>↗</span></Link></div>
          </section>
          <section className="mt-12"><SectionHeader number="02" title="Recent notes" aside="Recently updated notes" /><div className="grid gap-6 sm:grid-cols-2">{recent.map(note=><NoteRow key={note.id} note={note}/>)}</div></section>
        </>}
        {path && !searching && <>
          {folder.children.length>0 && <section><SectionHeader number="01" title="Go deeper" /><div className="grid gap-x-8 md:grid-cols-2">{folder.children.map(c=><Link key={c.path} className="subject-row group" to={`/garden?path=${encodeURIComponent(c.path)}`}><h3 className="font-serif text-xl group-hover:text-accent">{label(c.name)}</h3><span className="ml-auto font-mono text-xs text-ink-mute">{c.noteCount} notes ↗</span></Link>)}</div></section>}
          {maps.length>0 && <section className="mt-8"><SectionHeader title="Start with a map" /><div className="flex flex-wrap gap-2">{maps.map(m=><Link className="btn-ghost !text-xs" to={`/garden/note/${m.id}`} key={m.id}>{label(m.title)} ↗</Link>)}</div></section>}
        </>}
        {(!overview) && <section className="mt-10"><div className="mb-3 flex flex-wrap items-center justify-between gap-3"><h2 className="label">{notes.length} {searching ? "matching notes" : "notes in this subject"}</h2><select className="border border-paper-line bg-paper p-2 text-xs" aria-label="Sort library notes" value={sort} onChange={e=>update("sort",e.target.value)}><option value="title">Title A–Z</option><option value="updated">Recently updated</option></select></div><div className="divide-y divide-paper-line">{pageNotes.map(note=><NoteRow key={note.id} note={note}/>)}</div>{pageCount > 1 && <nav aria-label="Note result pages" className="mt-6 flex items-center justify-between border-t border-paper-line pt-4"><button className="btn-ghost" disabled={page===1} onClick={()=>update("page",String(page-1))}>← Previous</button><span className="label">{page} / {pageCount}</span><button className="btn-ghost" disabled={page===pageCount} onClick={()=>update("page",String(page+1))}>Next →</button></nav>}{notes.length===0 && <p role="status" className="py-8 text-ink-mute">No notes match this search. Try a broader term.</p>}</section>}
      </>}
    </article>
  );
}
function Metric({value,title}) { return <div><div className="font-serif text-3xl">{value}</div><div className="label mt-1 !text-[9px]">{title}</div></div>; }
function SectionHeader({number,title,aside}) { return <div className="mb-3 flex flex-wrap items-baseline gap-3 border-b border-paper-line pb-3">{number && <span className="font-mono text-[10px] text-ink-faint">{number}</span>}<h2 className="text-sm font-semibold">{title}</h2>{aside && <span className="ml-auto text-xs text-ink-mute">{aside}</span>}</div>; }
function NoteRow({note}) { return <Link to={`/garden/note/${note.id}`} className="group block py-4"><div className="mb-1 flex items-center gap-3"><span className="label !text-[9px]">{note.isMoc ? "Topic map" : note.sectionName || note.domainName || "Reference"}</span>{note.wordCount>0 && <span className="ml-auto shrink-0 font-mono text-[10px] text-ink-faint">{Math.max(1,Math.ceil(note.wordCount/220))} min read</span>}</div><h3 className="font-serif text-xl leading-snug group-hover:text-accent">{label(note.title)} <span className="text-sm text-ink-faint">↗</span></h3><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-mute">{note.excerpt}</p></Link>; }
