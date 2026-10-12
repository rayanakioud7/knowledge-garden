import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";
import SectionTitle from "../components/SectionTitle.jsx";

export default function About() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    api.about().then(setData).catch(() => {});
    api.status().then(setStatus).catch(() => {});
  }, []);

  if (!data) {
    return <div className="p-10 label">Loading…</div>;
  }

  const { profile } = data;

  return (
    <article className="mx-auto max-w-prose px-6 py-12">
      {/* Hero */}
      <header>
        <div className="label">{profile.location}</div>
        <h1 className="mt-2 font-sans text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-serif text-xl text-ink-soft">{profile.headline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[13px] text-ink-mute">
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          <span className="text-ink-faint">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link">
            github/{profile.github.split("/").pop()}
          </a>
        </div>
      </header>

      {/* Summary */}
      <p className="mt-8 font-serif text-[1.0625rem] leading-[1.8] text-ink">
        {profile.summary}
      </p>

      {/* Garden callout — ties the two halves of the site together */}
      {status && (
        <div className="mt-8 card p-5">
          <div className="label">The Knowledge Garden</div>
          <p className="mt-2 font-serif text-ink-soft">
            This site is also a live, self-updating reader for my personal
            Obsidian vault —{" "}
            <strong className="text-ink">{status.noteCount} notes</strong> linked
            by {status.edgeCount} wikilinks across {status.tagCount} tags. Edit a
            note in Obsidian and it appears here within minutes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/garden" className="btn">
              Enter the Garden →
            </Link>
            <Link to="/garden/graph" className="btn-ghost">
              View the graph
            </Link>
          </div>
        </div>
      )}

      {/* Education */}
      <section className="mt-12">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-4 space-y-6">
          {data.education.map((ed) => (
            <div key={ed.degree} className="hairline pt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-sans text-base font-semibold text-ink">
                  {ed.degree}
                </h3>
                <span className="font-mono text-[12px] text-ink-mute">
                  {ed.period}
                </span>
              </div>
              <div className="mt-0.5 text-sm text-ink-soft">
                {ed.school} · {ed.location}
              </div>
              {ed.details?.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-ink-mute">
                  {ed.details.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-ink-faint">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mt-12">
        <SectionTitle>Technical Expertise</SectionTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {data.expertise.map((e) => (
            <div key={e.category} className="card p-4">
              <div className="font-mono text-[12px] uppercase tracking-wide text-ink">
                {e.category}
              </div>
              <p className="mt-1 text-sm text-ink-soft">{e.items}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex gap-3">
        <Link to="/cv" className="btn">
          Full CV
        </Link>
        <Link to="/projects" className="btn-ghost">
          Projects
        </Link>
      </div>
    </article>
  );
}
