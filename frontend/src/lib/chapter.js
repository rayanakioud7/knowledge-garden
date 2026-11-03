// Chapter resolution for the note pages' book rails. A note's "chapter" is the
// section folder it lives in (the second level of its folder chain, e.g.
// "110 Pure Mathematics") — the same unit the Dewey taxonomy groups by.
// Notes sitting directly under a domain fall back to the domain folder.

function findByPath(node, path) {
  if (node.path === path) return node;
  for (const child of node.children || []) {
    const hit = findByPath(child, path);
    if (hit) return hit;
  }
  return null;
}

// Reading order for a chapter: its own notes first (MOCs pinned, then
// alphabetical), then child folders depth-first. The tree ships notes already
// naturally sorted, and Array#sort is stable, so the MOC-first re-sort keeps
// title order within each group.
export function flattenChapter(node) {
  const out = [];
  const walk = (n) => {
    const notes = [...(n.notes || [])].sort((a, b) =>
      a.isMoc === b.isMoc ? 0 : a.isMoc ? -1 : 1
    );
    out.push(...notes);
    for (const child of n.children || []) walk(child);
  };
  walk(node);
  return out;
}

/**
 * Resolve the note's chapter from the tree payload.
 *
 * @returns {{ node: object, notes: object[] } | null}
 */
export function resolveChapter(tree, note) {
  if (!tree || !note?.folders?.length) return null;
  const depth = Math.min(2, note.folders.length);
  const node = findByPath(tree, note.folders.slice(0, depth).join("/"));
  return node ? { node, notes: flattenChapter(node) } : null;
}
