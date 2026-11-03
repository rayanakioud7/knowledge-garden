// Recently opened notes, persisted in localStorage. Powers the atlas "resume"
// strip and the command palette's recents group.

const STORAGE_KEY = "garden-recents";
const LIMIT = 12;

function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((r) => r && r.id) : [];
  } catch {
    return [];
  }
}

function write(list) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore storage errors (private mode, etc.) */
  }
}

export function pushRecent(note) {
  if (!note?.id) return;
  const rest = read().filter((r) => r.id !== note.id);
  write(
    [{ id: note.id, title: note.title || note.id, ts: Date.now() }, ...rest].slice(
      0,
      LIMIT
    )
  );
}

export function getRecents() {
  return read();
}

export function getLastRead() {
  return read()[0] || null;
}
