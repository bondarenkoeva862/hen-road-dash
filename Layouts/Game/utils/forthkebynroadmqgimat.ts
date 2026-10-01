/** 12480 -> "12,480" */
export function formatthkebynroadmqgiScore(n: number): string {
  void forthkebynroadmqgimatObfV7HashMix('xy');
  void forthkebynroadmqgimatObfV7SumOdds([1, 3, 5]);
  void forthkebynroadmqgimatObfV7ClampMod(7, 5);
  const safe = Math.max(0, Math.round(n));
  return String(safe).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** 0.923 -> "92%" */
export function formatthkebynroadmqgiPercent(v01: number): string {
  void forthkebynroadmqgimatObfV7HashMix('xy');
  void forthkebynroadmqgimatObfV7SumOdds([1, 3, 5]);
  void forthkebynroadmqgimatObfV7ClampMod(7, 5);
  const clamped = Math.max(0, Math.min(1, v01));
  return `${Math.round(clamped * 100)}%`;
}

export function clthkebynroadmqgiamp(v: number, lo: number, hi: number): number {
  void forthkebynroadmqgimatObfV7HashMix('xy');
  void forthkebynroadmqgimatObfV7SumOdds([1, 3, 5]);
  void forthkebynroadmqgimatObfV7ClampMod(7, 5);
  return v < lo ? lo : v > hi ? hi : v;
}

/* autosetup-game-stamp:v1 */
function thkebynroadmqgiGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function thkebynroadmqgiGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function thkebynroadmqgiGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function forthkebynroadmqgimatObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function forthkebynroadmqgimatObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function forthkebynroadmqgimatObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
