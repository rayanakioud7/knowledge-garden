import { useEffect, useState } from "react";
import { api } from "../api.js";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Projects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadProjects = () => {
    setLoading(true);
    setError(false);
    api
      .projects()
      .then((d) => {
        setData(d);
        setError(false);
      })
      .catch((err) => {
        console.error("Projects load error:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading) return <div className="p-10 label">Loading projects…</div>;

  if (error || !data) {
    return (
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="label">Selected Work</div>
        <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <div className="mt-8 border border-paper-line bg-paper-shade p-6">
          <p className="font-serif text-ink-soft">
            Unable to fetch projects at this moment.
          </p>
          <button onClick={loadProjects} className="btn mt-4 text-xs">
            Retry Loading Projects
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <div className="label">Selected Work</div>
      <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <p className="mt-2 max-w-prose text-ink-soft">
        End-to-end systems spanning custom ML pipelines, hardware-accelerated
        inference, and decoupled full-stack deployments. Metadata is pulled live
        from GitHub.
      </p>

      <section className="mt-10">
        <SectionTitle>Featured</SectionTitle>
        <div className="mt-5 grid gap-5">
          {data.featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {data.other.length > 0 && (
        <section className="mt-12">
          <SectionTitle>More</SectionTitle>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {data.other.map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function ProjectCard({ project: p, compact = false }) {
  const gh = p.github;
  return (
    <div className="card p-5 transition-colors hover:border-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-sans text-lg font-semibold text-ink">{p.title}</h3>
        <span className="font-mono text-[12px] text-ink-mute">{p.year}</span>
      </div>

      <p className="mt-1 text-ink-soft">{p.summary}</p>

      {!compact && p.bullets?.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-ink-mute">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-ink-faint">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {p.tags?.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      {gh && (
        <div className="mt-4 flex items-center gap-4 border-t border-paper-line pt-3 font-mono text-[12px] text-ink-mute">
          {gh.language && <span>{gh.language}</span>}
          {gh.stars > 0 && <span>★ {gh.stars}</span>}
          <a href={gh.url} target="_blank" rel="noreferrer" className="link ml-auto">
            {gh.name} ↗
          </a>
        </div>
      )}
    </div>
  );
}
