// Shared, memoized garden API data. Several components need the same payload
// (the folder sidebar and note chapters both want the tree; the command
// palette wants every note; the atlas wants the MOC plates). Shared requests with a one-minute lifetime, with a retry path when a request fails.

import { api } from "../api.js";

const pending = new Map();
const TTL = 60_000;

function memo(key, load) {
  const cached = pending.get(key);
  if (cached && Date.now() - cached.at < TTL) return cached.promise;
  {
    pending.set(
      key,
      { at: Date.now(), promise: load().catch((err) => {
        pending.delete(key); // allow a retry after a failure
        throw err;
      }) }
    );
  }
  return pending.get(key).promise;
}

export const getTree = () => memo("tree", () => api.tree());

export const getNotes = () =>
  memo("notes", () => api.notes().then((d) => d.notes || []));

export const getMocs = () =>
  memo("mocs", () => api.mocs().then((d) => d.mocs || []));
