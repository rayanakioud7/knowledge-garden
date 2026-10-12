import { useEffect, useState } from "react";
import { api } from "../api.js";
import SectionTitle from "../components/SectionTitle.jsx";

// A monochrome HTML twin of cv.tex, plus a one-click PDF via the browser print
// dialog (no LaTeX toolchain needed). "Print / Save as PDF" uses a print
// stylesheet that strips the app chrome.
export default function CV() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.cv().then(setData).catch(() => {});
  }, []);

  if (!data) return <div className="p-10 label">Loading…</div>;

  return (
    <article className="mx-auto max-w-prose px-6 py-12">
      <div className="no-print mb-8 flex items-center justify-between">
        <div>
          <div className="label">Curriculum Vitae</div>
          <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
            {data.profile.name}
          </h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="btn">
            Print / PDF
          </button>
          <a href={data.texUrl} className="btn-ghost" download>
            cv.tex
          </a>
        </div>
      </div>

      <header className="text-center">
        <h2 className="font-sans text-2xl font-bold uppercase tracking-tight text-ink print:text-black">
          {data.profile.name}
        </h2>
        <p className="mt-1 font-mono text-[12px] text-ink-mute">
          {data.profile.location} · {data.profile.phone} ·{" "}
          <a href={`mailto:${data.profile.email}`} className="link">
            {data.profile.email}
          </a>{" "}
          ·{" "}
          <a href={data.profile.github} className="link">
            {data.profile.github}
          </a>
        </p>
      </header>

      <CvSection title="Profile">
        <p className="text-ink">{data.profile.summary}</p>
      </CvSection>

      <CvSection title="Education">
        <div className="space-y-4">
          {data.education.map((ed) => (
            <div key={ed.degree}>
              <div className="flex flex-wrap justify-between gap-x-4">
                <strong className="text-ink">{ed.degree}</strong>
                <em className="text-ink-mute">{ed.period}</em>
              </div>
              <div className="text-ink-soft">
                {ed.school} — {ed.location}
              </div>
              {ed.details?.length > 0 && (
                <ul className="mt-1 list-inside list-disc text-sm text-ink-mute">
                  {ed.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection title="Technical Expertise">
        <ul className="space-y-1">
          {data.expertise.map((e) => (
            <li key={e.category}>
              <strong className="text-ink">{e.category}:</strong>{" "}
              <span className="text-ink-soft">{e.items}</span>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Experience">
        <div className="space-y-4">
          {data.experience.map((x) => (
            <div key={x.role}>
              <div className="flex flex-wrap justify-between gap-x-4">
                <strong className="text-ink">{x.role}</strong>
                <em className="text-ink-mute">{x.period}</em>
              </div>
              <div className="text-ink-soft">
                {x.company} — {x.location}
              </div>
              <ul className="mt-1 list-inside list-disc text-sm text-ink-mute">
                {x.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection title="Certifications">
        <ul className="space-y-1">
          {data.certifications.map((c) => (
            <li key={c.name} className="flex flex-wrap justify-between gap-x-4">
              <span className="text-ink">
                <strong>{c.name}</strong> — {c.issuer}
              </span>
              <em className="text-ink-mute">{c.year}</em>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Languages">
        <p className="text-center text-ink-soft">
          {data.languages.map((l, i) => (
            <span key={l.name}>
              {i > 0 && <span className="mx-2 text-ink-faint">•</span>}
              <strong className="text-ink">{l.name}:</strong> {l.level}
            </span>
          ))}
        </p>
      </CvSection>
    </article>
  );
}

function CvSection({ title, children }) {
  return (
    <section className="mt-8 break-inside-avoid">
      <SectionTitle className="print:border-black">{title}</SectionTitle>
      <div className="mt-3 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}
