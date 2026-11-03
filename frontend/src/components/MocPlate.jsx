import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { domainShade, useIsDark } from "../lib/domainShades.js";
import { dotRadius, plateGeometry } from "../lib/constellation.js";

// One atlas plate: a MOC hub at the centre with a ray to every note it links
// to, dots shaded by the linked note's Dewey domain. Hovering a dot reads out
// that note's title in the meta line; clicking opens the MOC.
export default function MocPlate({ moc }) {
  const isDark = useIsDark();
  const [hover, setHover] = useState(null); // the hovered linked note

  const { hub, points } = useMemo(
    () => plateGeometry(moc.linked || []),
    [moc]
  );

  const rayColor = isDark ? "#33333a" : "#d4d4d8";
  const r = dotRadius(points.length);
  const hitR = Math.max(r + 1.2, 2.8); // generous invisible hit area
  const displayTitle = moc.title.replace(/^MOC\s+—\s*/, "");

  return (
    <Link
      to={`/garden/note/${moc.id}`}
      className="group block border border-paper-line bg-paper p-4 transition-colors hover:border-ink"
    >
      <svg
        viewBox="0 0 100 100"
        className="block w-full"
        aria-hidden="true"
        focusable="false"
      >
        {/* Rays: faint at rest, inked on hover. */}
        <g
          stroke={rayColor}
          strokeWidth="0.5"
          className="opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        >
          {points.map((p) => (
            <line key={`ray-${p.id}`} x1={hub.x} y1={hub.y} x2={p.x} y2={p.y} />
          ))}
        </g>

        {/* Linked notes, shaded by domain. */}
        <g className="opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          {points.map((p) => (
            <g
              key={p.id}
              onMouseEnter={() => setHover(p)}
              onMouseLeave={() => setHover(null)}
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
                opacity={hover?.id === p.id ? 1 : undefined}
                className="transition-opacity"
              />
            </g>
          ))}
        </g>

        {/* Hub seal: dashed ring turns slowly on hover. */}
        <circle
          cx={hub.x}
          cy={hub.y}
          r="5.4"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.5"
          strokeDasharray="1.6 3"
          className="origin-center transition-transform duration-1000 ease-out group-hover:rotate-[100deg]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <circle cx={hub.x} cy={hub.y} r="2.4" fill="var(--accent)" />
      </svg>

      <div className="mt-4">
        <div className="font-sans text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
          {displayTitle}
        </div>
        <div className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
          {hover ? (
            <span className="normal-case tracking-normal">
              {hover.t || hover.id}
            </span>
          ) : (
            <>
              {moc.code || "—"} · {moc.linkCount} links · {moc.domainCount}{" "}
              {moc.domainCount === 1 ? "domain" : "domains"}
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
