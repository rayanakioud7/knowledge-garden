import { useEffect, useState } from "react";
import { api } from "../api.js";

// Polls /api/status and shows the "deferred real-time sync" state: how many
// notes are indexed and how fresh the index is. A tiny pulse dot animates while
// a rebuild is believed to be in progress (freshness < 60s).
export default function SyncBadge() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      api
        .status()
        .then((s) => alive && setStatus(s))
        .catch(() => {});
    load();
    const id = setInterval(load, 60000); // re-check every minute
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  if (!status) {
    return <div className="label">Index: loading…</div>;
  }

  const ageSec = Math.max(0, Math.floor(Date.now() / 1000 - (status.lastBuild || 0)));
  const fresh = ageSec < 60;
  const ageText =
    ageSec < 60
      ? `${ageSec}s ago`
      : ageSec < 3600
      ? `${Math.floor(ageSec / 60)}m ago`
      : `${Math.floor(ageSec / 3600)}h ago`;

  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        {fresh && (
          <span className="absolute inline-flex h-full w-full animate-ping bg-ink opacity-40" />
        )}
        <span className="relative inline-flex h-2 w-2 bg-ink" />
      </span>
      <div className="leading-tight">
        <div className="font-mono text-[11px] text-ink-soft">
          {status.noteCount} notes · {status.edgeCount} links
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
          Indexed {ageText}
        </div>
      </div>
    </div>
  );
}
