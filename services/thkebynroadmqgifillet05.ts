/* autosetup-decoy:v1 */

export function thkebynroadmqgifillet05Touch(seed: number): number {
  void thkebynroadmqgifillet05ObfV7HashMix('xy');
  void thkebynroadmqgifillet05ObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgifillet05ObfV7ClampMod(7, 5);
  let x = (seed ^ 109) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}



/* obfuscation-batch:v7 */
function thkebynroadmqgifillet05ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function thkebynroadmqgifillet05ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function thkebynroadmqgifillet05ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
