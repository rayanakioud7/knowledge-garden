import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../api.js";

export default function Projects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "All";
  useEffect(() => {
    let alive = true; setError(false);
    api.projects().then(d=>{if(alive)setData(d);}).catch(()=>{if(alive)setError(true);});
    return ()=>{alive=false;};
  },[attempt]);
  const projects = useMemo(()=> data ? [...data.featured,...data.other] : [],[data]);
  const categories = ["All",...new Set(projects.map(p=>p.category))];
  const filtered = projects.filter(p=>category==="All" || p.category===category);
  return <article className="editorial-page">
    <header className="border-b border-paper-line pb-8">
      <div className="flex justify-between gap-3"><span className="label">Engineering / Selected work</span><a className="quiet-link" href="https://github.com/rayanakioud7" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <h1 className="display-title mt-8">Projects & experiments.</h1>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6"><p className="max-w-xl font-serif text-lg leading-relaxed text-ink-mute">Machine learning, systems programming, and web applications. Selected projects are followed by the full repository list.</p>{data && <div className="label">{data.repositoryCount} public repositories</div>}</div>
    </header>
    {error ? <div role="alert" className="card mt-8 p-6">Projects could not be loaded. <button className="link" onClick={()=>setAttempt(n=>n+1)}>Try again</button></div> : !data ? <p role="status" className="label py-10">Opening the project archive…</p> : <>
      <nav aria-label="Project categories" className="my-7 flex flex-wrap gap-2">{categories.map(c=><button aria-pressed={category===c} key={c} onClick={()=>setParams(c==="All"?{}:{category:c})} className={`filter-tab ${category===c?"is-selected":""}`}>{c}</button>)}</nav>
      {(category==="All" || filtered.some(p=>p.featured)) && <section><div className="section-rule"><h2>Selected projects</h2><span>ML systems, recognition & foundations</span></div><div className="space-y-5">{filtered.filter(p=>p.featured).map((p,i)=><ProjectFeature key={p.slug} project={p} index={i}/>)}</div></section>}
      <section className="mt-12"><div className="section-rule"><h2>Project archive</h2><span>{filtered.filter(p=>!p.featured).length} repositories</span></div><div className="grid gap-4 md:grid-cols-2">{filtered.filter(p=>!p.featured).map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>
      {category==="All" && data.independent?.length>0 && <section className="mt-12"><div className="section-rule"><h2>Other explorations</h2><span>Previously documented work · no public repository</span></div><div className="grid gap-4 md:grid-cols-2">{data.independent.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>}
      <p className="mt-10 border-t border-paper-line pt-4 font-mono text-[10px] leading-relaxed text-ink-mute">Explore the repositories for source code, documentation, and reported evaluations.</p>
    </>}
  </article>;
}
function ProjectLinks({project:p}) { return <div className="mt-5 flex flex-wrap items-center gap-5 text-xs">{p.github?.url && <a className="link" href={p.github.url} target="_blank" rel="noreferrer">Source & documentation ↗</a>}{/^https?:\/\//.test(p.github?.homepage || "") && <a className="link" href={p.github.homepage} target="_blank" rel="noreferrer">Visit website ↗</a>}{p.github?.stars>0 && <span className="font-mono text-ink-mute">☆ {p.github.stars}</span>}</div>; }
function ProjectFeature({project:p,index}) { return <div className="project-feature">
  <div className="flex items-start justify-between gap-4"><span className="label">0{index+1} / {p.category}</span><span className="font-mono text-[10px] text-ink-faint">{p.repo}</span></div>
  <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.15fr]"><div><h3 className="font-sans text-2xl font-bold tracking-tight">{p.title}</h3><p className="mt-3 max-w-sm font-serif text-2xl leading-snug text-ink-soft">{p.headline}</p><div className="mt-5 flex flex-wrap gap-1.5">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div><ProjectLinks project={p}/></div><div className="border-t border-paper-line pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0"><p className="text-sm leading-relaxed text-ink-soft">{p.summary}</p><ul className="mt-5 space-y-3">{p.bullets.map((b,i)=><li key={b} className="flex gap-3 text-xs leading-relaxed text-ink-mute"><span className="font-mono text-ink-faint">0{i+1}</span><span>{b}</span></li>)}</ul></div></div>
</div>; }
function ProjectCard({project:p}) { return <div className="flex flex-col border border-paper-line p-5 transition-colors hover:border-ink-faint"><div className="label !text-[9px]">{p.category}</div><h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">{p.summary}</p>{p.bullets?.length>0 && <details className="mt-4 text-xs text-ink-soft"><summary className="cursor-pointer py-1">Inside the project</summary><ul className="mt-2 list-inside list-disc space-y-2 leading-relaxed">{p.bullets.map(b=><li key={b}>{b}</li>)}</ul></details>}<div className="mt-4 flex flex-wrap gap-1.5">{p.tags?.map(t=><span className="chip" key={t}>{t}</span>)}</div><ProjectLinks project={p}/></div>; }
