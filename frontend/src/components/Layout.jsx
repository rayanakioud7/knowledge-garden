import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import SyncBadge from "./SyncBadge.jsx";
import FolderTree from "./FolderTree.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import CommandPalette from "./CommandPalette.jsx";
const openPalette=()=>window.dispatchEvent(new CustomEvent("garden:open-palette"));
const primary=[{to:"/",label:"Overview",end:true},{to:"/projects",label:"Projects"},{to:"/garden",label:"Knowledge library"},{to:"/cv",label:"Curriculum vitae"}];
const garden=[{to:"/garden",label:"Library",end:true},{to:"/garden/notes",label:"All notes"},{to:"/garden/atlas",label:"Atlas of maps"},{to:"/garden/graph",label:"Knowledge graph"}];
export default function Layout(){
  const [open,setOpen]=useState(false);
  const [desktop,setDesktop]=useState(()=>window.matchMedia("(min-width: 1024px)").matches);
  const sidebar=useRef(null); const menu=useRef(null);
  const location=useLocation(); const inGarden=location.pathname.startsWith("/garden");
  const folderPath = new URLSearchParams(location.search).get("path");
  useEffect(()=>{ if (!location.hash) window.scrollTo({top:0}); },[location.pathname,folderPath]);
  const isTree=location.pathname==="/garden/tree";
  useEffect(()=>{const media=window.matchMedia("(min-width: 1024px)");const change=()=>{setDesktop(media.matches);if(media.matches)setOpen(false);};media.addEventListener("change",change);return()=>media.removeEventListener("change",change);},[]);
  useEffect(()=>setOpen(false),[location.pathname,location.search]);
  useEffect(()=>{
    if(!open)return;
    const prior=document.activeElement;const overflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const elements=()=>[...sidebar.current.querySelectorAll('a[href],button,input,summary,select,[tabindex="0"]')].filter(el=>el.getClientRects().length);
    elements()[0]?.focus();
    const key=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){setOpen(false);return;}if(e.key==="Escape"){setOpen(false);return;}if(e.key!=="Tab")return;const list=elements();const first=list[0],last=list.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}};
    document.addEventListener("keydown",key);
    return()=>{document.body.style.overflow=overflow;document.removeEventListener("keydown",key);if(prior instanceof HTMLElement)prior.focus();};
  },[open]);
  useEffect(()=>{const title=location.pathname.startsWith("/projects")?"Projects":location.pathname.startsWith("/garden")?"Knowledge Library":location.pathname==="/cv"?"Curriculum Vitae":"Engineering & Knowledge";document.title=`${title} · Rayan Akioud`;},[location.pathname]);
  return <div className="min-h-screen lg:grid lg:grid-cols-[15rem_1fr]">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:p-3">Skip to content</a>
    <aside ref={sidebar} id="site-navigation" aria-label="Site navigation" {...(!desktop&&!open?{inert:""}:{})} className={`fixed inset-y-0 left-0 z-40 w-[15rem] border-r border-paper-line bg-paper transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}>
      <div className="flex h-full flex-col overflow-y-auto">
        <div className="px-6 pb-7 pt-9"><div className="flex items-start justify-between"><NavLink to="/" className="block"><div className="mb-5 flex h-9 w-9 items-center justify-center border border-ink font-serif text-lg">ra.</div><div className="text-base font-bold tracking-tight">Rayan Akioud<span className="text-accent">.</span></div><div className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] leading-loose text-ink-mute">ML systems engineering<br/>Casablanca, Morocco</div></NavLink><button onClick={()=>setOpen(false)} className="p-1 text-sm lg:hidden" aria-label="Close navigation">✕</button></div></div>
        <nav aria-label="Primary" className="px-4"><div className="label mb-3 px-2 !text-[9px]">Index</div>{primary.map((item,i)=><NavLink key={item.to} to={item.to} end={item.end} className={({isActive})=>`site-nav ${isActive?"is-active":""}`}><span className="font-mono text-[9px] opacity-50">0{i+1}</span><span>{item.label}</span></NavLink>)}</nav>
        {inGarden && <div className="mt-6 border-t border-paper-line px-4 pt-5"><nav aria-label="Explore the garden"><div className="label mb-3 px-2 !text-[9px]">Explore</div>{garden.map(item=><NavLink key={item.to} to={item.to} end={item.end} className={({isActive})=>`site-nav !py-2 !text-xs ${isActive?"font-semibold text-accent":""}`}>{item.label}<span className="ml-auto text-ink-faint">↗</span></NavLink>)}</nav><details className="mt-4 border-t border-paper-line pt-3"><summary className="cursor-pointer px-2 py-2 text-xs text-ink-mute">Browse vault folders</summary><div className="mt-2"><FolderTree/></div></details></div>}
        <div className="mt-auto px-6 pb-6 pt-8"><button onClick={()=>{setOpen(false);openPalette();}} className="mb-4 flex w-full justify-between border border-paper-line2 px-3 py-2.5 text-xs text-ink-mute" aria-label="Open search palette"><span>Quick search</span><kbd className="font-mono text-[10px]">Ctrl / ⌘ K</kbd></button><ThemeToggle/><div className="mt-5"><SyncBadge/></div><a className="quiet-link mt-5 inline-block !text-[10px]" href="https://github.com/rayanakioud7" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </div>
    </aside>
    {open && <button aria-label="Close navigation overlay" tabIndex={-1} onClick={()=>setOpen(false)} className="fixed inset-0 z-30 bg-black/30 lg:hidden"/>}
    <div className={`flex min-w-0 flex-col ${isTree?"h-screen overflow-hidden":"min-h-screen"}`} {...(open&&!desktop?{inert:""}:{})}>
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-paper-line bg-paper px-5 py-3 lg:hidden"><button ref={menu} className="text-xs" aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(true)}>☰ Menu</button><NavLink to="/" className="font-serif text-base">rayan akioud.</NavLink><button onClick={openPalette} aria-label="Open search palette" className="text-xs">Search</button></div>
      <main id="main-content" tabIndex={-1} className={`flex-1 ${isTree?"flex min-h-0 flex-col overflow-hidden":""}`}><Outlet/></main>
      {!isTree && <footer className="mx-6 flex flex-wrap justify-between gap-3 border-t border-paper-line py-6 text-[10px] text-ink-mute sm:mx-10"><span>Rayan Akioud · Engineering & knowledge</span><span>Projects · Notes · References</span></footer>}
    </div><CommandPalette/>
  </div>;
}
