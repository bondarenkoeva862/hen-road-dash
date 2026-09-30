/** 12480 -> "12,480" */
export function formatScore(n: number): string {
  const safe = Math.max(0, Math.round(n));
  return String(safe).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** 0.923 -> "92%" */
export function formatPercent(v01: number): string {
  const clamped = Math.max(0, Math.min(1, v01));
  return `${Math.round(clamped * 100)}%`;
}

export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}
