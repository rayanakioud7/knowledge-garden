import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ForceGraph2D from "react-force-graph-2d";
import { api } from "../api.js";

// Deterministic grey shade per Dewey domain so the graph reads at a glance.
// Two palettes: one for light mode (darker nodes) and one for dark mode
// (lighter nodes) so the graph stays legible when the theme flips.
const LIGHT_SHADES = {
  "000": "#a1a1aa", "100": "#27272a", "200": "#3f3f46", "300": "#111113",
  "400": "#52525b", "500": "#71717a", "600": "#3f3f46", "700": "#52525b",
  "800": "#18181b",
};
const DARK_SHADES = {
  "000": "#52525b", "100": "#a1a1aa", "200": "#d4d4d8", "300": "#f4f4f5",
  "400": "#71717a", "500": "#a1a1aa", "600": "#d4d4d8", "700": "#71717a",
  "800": "#52525b",
};

function useIsDark() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() =>
      setDark(el.classList.contains("dark"))
    );
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export default function GraphView() {
  const [params] = useSearchParams();
  const domain = params.get("domain");
  const [data, setData] = useState({ nodes: [], links: [] });
  const [dims, setDims] = useState({ w: 800, h: 600 });
  const wrapRef = useRef(null);
  const navigate = useNavigate();
  const isDark = useIsDark();
  const shades = isDark ? DARK_SHADES : LIGHT_SHADES;

  useEffect(() => {
    api
      .graph(domain)
      .then((g) => {
        setData({
          nodes: (g.nodes || []).map((n) => ({ ...n })),
          links: (g.edges || []).map((e) => ({ source: e.source, target: e.target })),
        });
      })
      .catch((err) => console.error("Graph fetch failed:", err));
  }, [domain]);

  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) {
        setDims({
          w: wrapRef.current.clientWidth,
          h: Math.max(520, window.innerHeight - 220),
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <article className="mx-auto max-w-6xl px-6 py-10">
      <div className="label">Knowledge Graph</div>
      <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight">
        {domain ? `Domain ${domain}` : "Vault Graph"}
      </h1>
      <p className="mt-2 max-w-prose text-sm text-ink-mute">
        {data.nodes.length} notes · {data.links.length} wikilinks. Node size
        reflects connection count; shade reflects the Dewey domain. Click a node
        to open the note.
      </p>

      <div
        ref={wrapRef}
        className="mt-6 border border-paper-line bg-paper-shade"
        style={{ height: Math.max(520, window.innerHeight - 220) }}
      >
        {data.nodes.length > 0 && (
          <ForceGraph2D
            graphData={data}
            width={dims.w}
            height={dims.h}
            backgroundColor={isDark ? "#16161a" : "#fafafa"}
            nodeRelSize={4}
            linkColor={() => (isDark ? "#33333a" : "#d4d4d8")}
            linkWidth={0.6}
            nodeLabel={(n) => `${n.title}${n.domain ? ` · ${n.domain}` : ""}`}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.title || "";
              const size = 3 + Math.sqrt(node.degree || 0) * 1.2;
              ctx.beginPath();
              ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
              ctx.fillStyle = shades[node.domain] || (isDark ? "#a1a1aa" : "#52525b");
              ctx.fill();
              if (globalScale > 2.2) {
                ctx.font = `${11 / globalScale}px "JetBrains Mono", monospace`;
                ctx.fillStyle = isDark ? "#f4f4f5" : "#111113";
                ctx.fillText(label, node.x + size + 2, node.y + 3);
              }
            }}
            onNodeClick={(node) => {
              navigate(`/garden/note/${node.id}`);
            }}
            cooldownTicks={120}
          />
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {Object.entries(shades).map(([code, color]) => (
          <div key={code} className="flex items-center gap-1.5 font-mono text-[11px] text-ink-mute">
            <span className="inline-block h-2.5 w-2.5 border border-paper-line2" style={{ background: color }} />
            {code}
          </div>
        ))}
      </div>
    </article>
  );
}
