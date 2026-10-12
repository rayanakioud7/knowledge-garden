// Thin API client for the Django backend. All routes are relative so the Vite
// dev proxy (and a same-origin production deploy) both work unchanged.

export const API_BASE = (import.meta.env.VITE_API_BASE_URL || "/api").replace(/\/+$/, "");
const BASE = API_BASE;

async function getJson(url, options = {}) {
  const resp = await fetch(BASE + url, {
    headers: { Accept: "application/json" },
    ...options,
  });
  if (!resp.ok) {
    const message = await resp.text().catch(() => resp.statusText);
    throw new Error(`API ${resp.status}: ${message}`);
  }
  return resp.json();
}

export const api = {
  // Garden
  notes: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return getJson(`/notes/${qs ? `?${qs}` : ""}`);
  },
  note: (id) => getJson(`/notes/${encodeURIComponent(id)}/`),
  graph: (domain) => getJson(`/graph/${domain ? `?domain=${domain}` : ""}`),
  tree: () => getJson(`/tree/`),
  tags: () => getJson(`/tags/`),
  domains: () => getJson(`/domains/`),
  status: () => getJson(`/status/`),
  triggerSync: () =>
    getJson(`/sync/webhook/`, { method: "POST" }),

  // Portfolio
  about: () => getJson(`/portfolio/about/`),
  cv: () => getJson(`/portfolio/cv/`),
  projects: () => getJson(`/portfolio/projects/`),
};

export const attachmentUrl = (filename) =>
  `${BASE}/attachments/${encodeURIComponent(filename)}`;
