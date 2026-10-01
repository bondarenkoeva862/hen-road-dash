/* autosetup-split:v1 */

export function thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}



/* obfuscation-batch:v7 */
function UtthkebynroadmqgiilServicePart03ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function UtthkebynroadmqgiilServicePart03ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function UtthkebynroadmqgiilServicePart03ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
