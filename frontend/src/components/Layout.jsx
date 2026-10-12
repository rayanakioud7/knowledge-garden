import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import SyncBadge from "./SyncBadge.jsx";
import FolderTree from "./FolderTree.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV = [
  { to: "/", label: "About", end: true },
  { to: "/cv", label: "CV" },
  { to: "/projects", label: "Projects" },
  { to: "/garden", label: "Garden", end: true },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const inGarden = location.pathname.startsWith("/garden");

  // Close the mobile drawer on navigation.
  useEffect(() => setSidebarOpen(false), [location.pathname]);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      {/* ---------------- Sidebar ---------------- */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-[17rem] transform border-r border-paper-line
          bg-paper transition-transform lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          {/* Identity */}
          <div className="border-b border-paper-line px-5 py-5">
            <NavLink to="/" className="group block">
              <div className="font-sans text-lg font-bold tracking-tight text-ink">
                Rayan Akioud
              </div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                ML Systems · Knowledge
              </div>
            </NavLink>
          </div>

          {/* Primary nav */}
          <nav className="border-b border-paper-line px-3 py-3">
            <ul className="space-y-0.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `block px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-ink text-paper"
                          : "text-ink-soft hover:bg-paper-shade hover:text-ink"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Folder tree (only inside the garden) */}
          {inGarden && (
            <div className="min-h-0 flex-1 overflow-y-auto px-2 py-3">
              <div className="mb-2 px-1">
                <div className="space-y-0.5">
                  <NavLink
                    to="/garden"
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "bg-ink text-paper font-medium"
                          : "text-ink-soft hover:bg-paper-shade hover:text-ink"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] text-ink-mute">01</span>
                    <span>Tree Explorer</span>
                  </NavLink>
                  <NavLink
                    to="/garden/notes"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "bg-ink text-paper font-medium"
                          : "text-ink-soft hover:bg-paper-shade hover:text-ink"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] text-ink-mute">02</span>
                    <span>Notes Index</span>
                  </NavLink>
                  <NavLink
                    to="/garden/graph"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "bg-ink text-paper font-medium"
                          : "text-ink-soft hover:bg-paper-shade hover:text-ink"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] text-ink-mute">03</span>
                    <span>Graph View</span>
                  </NavLink>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-paper-line">
                <FolderTree />
              </div>
            </div>
          )}

          {/* Theme + sync footer */}
          <div className="space-y-3 border-t border-paper-line px-5 py-3">
            <ThemeToggle />
            <SyncBadge />
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ---------------- Main ---------------- */}
      <div className="flex min-h-screen min-w-0 flex-col">
        <MobileBar onOpen={() => setSidebarOpen(true)} inGarden={inGarden} />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t border-paper-line px-6 py-6 text-center">
          <div className="label">
            Built with React · Tailwind · Django — a Knowledge Garden
          </div>
        </footer>
      </div>
    </div>
  );
}

function MobileBar({ onOpen, inGarden }) {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between border-b border-paper-line bg-paper/95 px-4 py-3 backdrop-blur-sm lg:hidden">
      <button
        onClick={onOpen}
        className="btn-ghost"
        aria-label="Open navigation"
      >
        ☰ Menu
      </button>
      <span className="label">{inGarden ? "Garden" : "Portfolio"}</span>
    </div>
  );
}
