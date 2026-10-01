/* autosetup-decoy:v1 */

export function thkebynroadmqgiscree02Touch(seed: number): number {
  void thkebynroadmqgiscree02ObfV7HashMix('xy');
  void thkebynroadmqgiscree02ObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiscree02ObfV7ClampMod(7, 5);
  let x = (seed ^ 76) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}



/* obfuscation-batch:v7 */
function thkebynroadmqgiscree02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function thkebynroadmqgiscree02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function thkebynroadmqgiscree02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
