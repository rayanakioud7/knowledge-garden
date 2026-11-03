import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";

export default function About() {
  const [data,setData] = useState(null);
  const [work,setWork] = useState(null);
  const [status,setStatus] = useState(null);
  const [error,setError] = useState(false);
  useEffect(()=>{let alive=true;
    api.about().then(d=>{if(alive)setData(d);}).catch(()=>{if(alive)setError(true);});
    api.projects().then(d=>{if(alive)setWork(d);}).catch(()=>{});
    api.status().then(d=>{if(alive)setStatus(d);}).catch(()=>{});
    return ()=>{alive=false;};
  },[]);
  if(error)return <div role="alert" className="p-10">Unable to open the portfolio. <button className="link" onClick={()=>window.location.reload()}>Try again</button></div>;
  if(!data)return <p role="status" className="label p-10">Opening the portfolio…</p>;
  const {profile}=data;
  return <article className="editorial-page">
    <header className="border-b border-paper-line pb-10">
      <div className="flex flex-wrap justify-between gap-3"><span className="label">{profile.name} / {profile.location}</span><span className="label">Projects, notes & interests</span></div>
      <h1 className="display-title mt-10">Rayan Akioud.</h1>
      <div className="mt-7 grid gap-7 md:grid-cols-[1.4fr_1fr]"><p className="max-w-xl font-serif text-xl leading-relaxed text-ink-soft">I’m an engineering student in Casablanca, studying machine learning systems and the mathematics behind them. This site brings together my projects and the notes I write while learning.</p><div className="flex flex-col items-start justify-end gap-3"><Link to="/projects" className="btn">View projects ↗</Link><Link to="/garden" className="quiet-link">Browse study notes →</Link></div></div>
    </header>
    <div className="grid border-b border-paper-line sm:grid-cols-3">{[["01","Mathematical foundations","Linear algebra, calculus, probability."],["02","Machine learning systems","Training pipelines, inference, autograd."],["03","Software & infrastructure","C, Python, full-stack applications."]].map(([n,t,d])=><div key={n} className="py-6 pr-5"><span className="font-mono text-[10px] text-ink-faint">{n}</span><h2 className="mt-2 text-sm font-semibold">{t}</h2><p className="mt-1 text-xs leading-relaxed text-ink-mute">{d}</p></div>)}</div>
    {work && <section className="mt-12"><div className="section-rule"><h2>Selected work</h2><Link to="/projects">All projects ↗</Link></div><div className="grid gap-4 md:grid-cols-3">{work.featured.slice(0,3).map((p,i)=><Link to={`/projects?category=${encodeURIComponent(p.category)}`} key={p.slug} className="group flex flex-col border border-paper-line p-5 hover:border-ink"><span className="label !text-[9px]">0{i+1} / {p.category}</span><h3 className="mt-5 text-lg font-semibold tracking-tight group-hover:text-accent">{p.title}</h3><p className="mt-2 flex-1 font-serif text-base leading-relaxed text-ink-mute">{p.headline}</p><span className="mt-6 text-xs text-ink-soft">Explore project →</span></Link>)}</div></section>}
    <section className="mt-12 border-y border-paper-line bg-paper-shade px-6 py-8 sm:px-8"><div className="label">Knowledge library</div><div className="mt-4 grid gap-6 md:grid-cols-[1.3fr_1fr]"><div><h2 className="font-serif text-3xl">Study notes & references.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-mute">Notes from courses, books, and independent study: mathematics, computing, and a few other subjects. Some are worked examples; others are explanations I come back to.</p></div><div className="flex flex-col items-start justify-end">{status && <div className="mb-5 font-mono text-xs text-ink-mute">{status.noteCount} notes · {status.edgeCount.toLocaleString()} connections</div>}<Link className="btn" to="/garden">Browse the library ↗</Link></div></div></section>
    <section className="mt-12 grid gap-8 md:grid-cols-[1fr_1.7fr]"><div><div className="label">Background</div><h2 className="mt-3 font-serif text-3xl">Education.</h2><Link className="quiet-link mt-5 inline-block" to="/cv">Full curriculum vitae ↗</Link></div><div className="divide-y divide-paper-line">{data.education.map(ed=><div key={ed.degree} className="py-4 first:pt-0"><span className="font-mono text-[10px] text-ink-mute">{ed.period}</span><h3 className="mt-2 text-sm font-semibold leading-relaxed">{ed.degree}</h3><p className="mt-1 text-xs leading-relaxed text-ink-mute">{ed.school} · {ed.location}</p></div>)}</div></section>
    <section className="mt-12 grid gap-6 border-t border-paper-line pt-7 md:grid-cols-[1fr_1.7fr]">
      <div><div className="label">Outside engineering</div><h2 className="mt-3 font-serif text-3xl">Music & reading.</h2></div>
      <div className="space-y-4 text-sm leading-relaxed text-ink-soft">
        <p>I play electric guitar and listen to metal, especially Black Sabbath. I keep track of what I listen to on RateYourMusic.</p>
        <p>I also read fiction, including <cite className="font-serif">Moby-Dick</cite> and <cite className="font-serif">Crime and Punishment</cite>.</p>
        <a className="quiet-link inline-block" href="https://rateyourmusic.com/~musashi3k" target="_blank" rel="noreferrer">Records & ratings ↗</a>
      </div>
    </section>
    <section className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-paper-line pt-7"><div><h2 className="font-serif text-2xl">Contact.</h2><p className="mt-2 text-sm text-ink-mute">For questions about a project, or to get in touch.</p></div><a className="btn" href={`mailto:${profile.email}`}>Get in touch ↗</a></section>
  </article>;
}
