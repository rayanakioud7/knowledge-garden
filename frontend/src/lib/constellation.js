// Deterministic constellation geometry shared by the atlas plates and the MOC
// note header. Linked notes are ordered by domain (then original order) and
// spread over concentric rings with an even angular pitch, so each plate reads
// like a small star chart — stable across reloads, no physics simulation.

const TAU = Math.PI * 2;

/**
 * Lay out a MOC's linked notes inside a square viewBox.
 *
 * @param {Array<{id: string, d?: string|null}>} linked
 * @param {{ size?: number }} [opts]
 * @returns {{ hub: {x: number, y: number}, points: Array<{id: string, d: string|null, x: number, y: number}>, radii: number[] }}
 */
export function plateGeometry(linked = [], opts = {}) {
  const size = opts.size ?? 100;
  const c = size / 2;
  const hub = { x: c, y: c };
  const n = linked.length;
  if (!n) return { hub, points: [], radii: [] };

  const ringCount = n <= 26 ? 1 : n <= 52 ? 2 : 3;
  const maxR = c - 8; // keep a clear margin inside the viewBox
  const minR = maxR - (ringCount - 1) * 6;
  const radii = Array.from({ length: ringCount }, (_, i) => minR + i * 6);

  // Stable order: by domain first (so each domain forms a contiguous arc),
  // then by the order the MOC links them in.
  const ordered = linked
    .map((l, i) => ({ ...l, i }))
    .sort((a, b) => {
      const da = a.d ?? "999";
      const db = b.d ?? "999";
      if (da !== db) return da < db ? -1 : 1;
      return a.i - b.i;
    });

  const perRing = Math.ceil(n / ringCount);
  const angleStep = TAU / perRing;

  const points = ordered.map((l, k) => {
    const slot = Math.floor(k / ringCount);
    const angle = -TAU / 4 + slot * angleStep; // start at 12 o'clock
    const r = radii[k % ringCount];
    const { i: _originalIndex, ...rest } = l; // carry title/domain/… through
    return {
      ...rest,
      id: l.id,
      d: l.d ?? null,
      x: c + r * Math.cos(angle),
      y: c + r * Math.sin(angle),
    };
  });

  return { hub, points, radii };
}

/** Dot radius that keeps dense plates legible at small sizes. */
export function dotRadius(count) {
  if (count > 80) return 1.1;
  if (count > 40) return 1.3;
  return 1.5;
}
