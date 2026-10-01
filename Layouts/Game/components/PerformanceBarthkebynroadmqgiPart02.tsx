/* autosetup-split:v1 */

export function thkebynroadmqgiGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

/* obfuscation-batch:v7 */
function PerformanceBarthkebynroadmqgiPart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function PerformanceBarthkebynroadmqgiPart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function PerformanceBarthkebynroadmqgiPart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
