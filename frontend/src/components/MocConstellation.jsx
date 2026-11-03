import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { domainShade, useIsDark } from "../lib/domainShades.js";
import { dotRadius, plateGeometry } from "../lib/constellation.js";

// The ego-constellation shown on a Map-of-Content note: the map at the centre,
// a ray to every note it links to, dots shaded by the linked note's domain.
// Hovering a dot shows a floating label with that note's title; clicking it
// opens the note.
export default function MocConstellation({ note }) {
  const isDark = useIsDark();
  const navigate = useNavigate();
  const [hover, setHover] = useState(null); // the hovered point (has x/y + title)

  const outgoing = useMemo(
    () =>
      (note.outgoingLinksDetail || []).map((l) => ({
        id: l.id,
        d: l.domain,
        title: l.title,
        isMoc: l.isMoc,
      })),
    [note]
  );
  const { hub, points } = useMemo(() => plateGeometry(outgoing), [outgoing]);
  const domainCount = useMemo(
    () => new Set(outgoing.map((o) => o.d).filter(Boolean)).size,
    [outgoing]
  );

  if (points.length === 0) return null;

  const rayColor = isDark ? "#33333a" : "#d4d4d8";
  const r = dotRadius(points.length) * 0.9;
  const hitR = Math.max(r + 1.6, 3.2); // generous invisible hit area
  // Near the top of the plate the label flips below the dot instead of above.
  const flip = hover ? hover.y < 30 : false;

  return (
    <section className="mt-8 border border-paper-line bg-paper-shade px-4 pb-4 pt-5">
      <div className="label">Constellation</div>
      <div className="relative mx-auto mt-2 max-w-[520px]">
        <svg
          viewBox="0 0 100 100"
          className="block w-full"
          role="img"
          aria-label={`This map links to ${points.length} notes across ${domainCount} domains`}
        >
          <g stroke={rayColor} strokeWidth="0.4" opacity="0.8">
            {points.map((p) => (
              <line
                key={`ray-${p.id}`}
                x1={hub.x}
                y1={hub.y}
                x2={p.x}
                y2={p.y}
              />
            ))}
          </g>
          {points.map((p) => (
            <g
              key={p.id}
              className="cursor-pointer"
              onMouseEnter={() => setHover(p)}
              onMouseLeave={() => setHover(null)}
              onClick={() => navigate(`/garden/note/${p.id}`)}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hitR}
                fill="transparent"
                pointerEvents="all"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill={domainShade(p.d, isDark)}
                opacity={hover?.id === p.id ? 1 : 0.8}
                className="transition-opacity"
              />
            </g>
          ))}
          <circle
            cx={hub.x}
            cy={hub.y}
            r="5.4"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.5"
            strokeDasharray="1.6 3"
          />
          <circle cx={hub.x} cy={hub.y} r="2.4" fill="var(--accent)" />
        </svg>

        {/* Floating label, anchored to the hovered dot. */}
        {hover && (
          <div
            className="pointer-events-none absolute z-10 border border-paper-line2 bg-paper px-2.5 py-1.5 shadow-md"
            style={{
              left: `${Math.min(Math.max(hover.x, 22), 78)}%`,
              top: `${hover.y}%`,
              transform: flip
                ? "translate(-50%, 12px)"
                : "translate(-50%, calc(-100% - 12px))",
            }}
          >
            <div className="max-w-[240px] truncate font-sans text-xs text-ink">
              {hover.title}
            </div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-faint">
              {hover.isMoc ? "map" : hover.d ? `domain ${hover.d}` : "note"} ·
              click to open
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 min-h-[1rem] truncate text-center font-mono text-[11px] text-ink-mute">
        {points.length} linked notes · {domainCount}{" "}
        {domainCount === 1 ? "domain" : "domains"} ·{" "}
        {note.backlinks?.length || 0} backlinks
      </div>
    </section>
  );
}
