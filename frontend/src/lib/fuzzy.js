// Tiny fuzzy matcher (fzf-style) with no dependencies. Returns a score plus
// the matched character indices so the command palette can highlight them.

const WORD_BOUNDARY = /[\s\-_/.]/;

function range(start, len) {
  return Array.from({ length: len }, (_, i) => start + i);
}

export function fuzzyMatch(query, text) {
  if (!query) return { score: 0, indices: [] };
  const q = query.toLowerCase();
  const t = (text || "").toLowerCase();
  if (!q.length || !t.length) return null;

  // Exact substring fast-path: strong score, contiguous highlight.
  const at = t.indexOf(q);
  if (at !== -1) {
    const bonus =
      at === 0 ? 40 : WORD_BOUNDARY.test(t[at - 1]) ? 24 : 0;
    return { score: 120 + bonus - at, indices: range(at, q.length) };
  }

  // Subsequence walk: reward consecutive runs and word starts.
  const indices = [];
  let qi = 0;
  let score = 0;
  let prev = -2;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] !== q[qi]) continue;
    let s = 10;
    if (ti === prev + 1) s += 8; // consecutive match
    if (ti === 0 || WORD_BOUNDARY.test(t[ti - 1])) s += 6; // word start
    score += s;
    indices.push(ti);
    prev = ti;
    qi++;
  }
  if (qi < q.length) return null;

  // Penalise spread-out matches a little.
  const span = indices[indices.length - 1] - indices[0] + 1;
  return { score: score - Math.max(0, span - q.length), indices };
}
