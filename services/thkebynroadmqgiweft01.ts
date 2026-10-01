/* autosetup-decoy:v1 */

export function thkebynroadmqgiweft01Touch(seed: number): number {
  void thkebynroadmqgiweft01ObfV7HashMix('xy');
  void thkebynroadmqgiweft01ObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiweft01ObfV7ClampMod(7, 5);
  let x = (seed ^ 65) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}



/* obfuscation-batch:v7 */
function thkebynroadmqgiweft01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function thkebynroadmqgiweft01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function thkebynroadmqgiweft01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
