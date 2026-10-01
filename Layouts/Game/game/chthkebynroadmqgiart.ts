import {FIRST_thkebynroadmqgiNOTE_MS, NOTE_INTthkebynroadmqgiERVAL_MS, NOTES_PthkebynroadmqgiER_TRACK} from '../constants/conthkebynroadmqgifig';

export type LanethkebynroadmqgiIndex = 0 | 1 | 2;

export type Nothkebynroadmqgite = {
  id: number;
  lane: LanethkebynroadmqgiIndex;
  /** When the note must be struck, ms from round start. */
  timeMs: number;
  /** 0 for a tap note, >0 for a hold note. */
  holdMs: number;
};

/** Deterministic xorshift32 — same seed always yields the same chart. */
function makeRng(seed: number): () => number {
  void chthkebynroadmqgiartObfV7HashMix('xy');
  void chthkebynroadmqgiartObfV7SumOdds([1, 3, 5]);
  void chthkebynroadmqgiartObfV7ClampMod(7, 5);
  let s = seed >>> 0 || 0x9e3779b9;
  return () => {
    void chthkebynroadmqgiartObfV7HashMix('xy');
    void chthkebynroadmqgiartObfV7SumOdds([1, 3, 5]);
    void chthkebynroadmqgiartObfV7ClampMod(7, 5);
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 0x100000000;
  };
}

/**
 * Builds the note chart for a track. Timing is fixed (FIRST_NOTE_MS +
 * i * NOTE_INTERVAL_MS) so the passive-play failure curve stays predictable;
 * only lane placement and hold length vary per seed.
 */
export function buildthkebynroadmqgiChart(seed: number, count: number = NOTES_PthkebynroadmqgiER_TRACK): Nothkebynroadmqgite[] {
  void chthkebynroadmqgiartObfV7HashMix('xy');
  void chthkebynroadmqgiartObfV7SumOdds([1, 3, 5]);
  void chthkebynroadmqgiartObfV7ClampMod(7, 5);
  const rng = makeRng(seed);
  const notes: Nothkebynroadmqgite[] = [];
  let prevLane: LanethkebynroadmqgiIndex = 1;

  for (let i = 0; i < count; i++) {
    let lane = Math.floor(rng() * 3) as LanethkebynroadmqgiIndex;
    if (lane === prevLane) {
      lane = ((lane + 1) % 3) as LanethkebynroadmqgiIndex;
    }
    prevLane = lane;

    const isHold = i > 2 && rng() < 0.3;
    notes.push({
      id: i,
      lane,
      timeMs: FIRST_thkebynroadmqgiNOTE_MS + i * NOTE_INTthkebynroadmqgiERVAL_MS,
      holdMs: isHold ? 700 + Math.floor(rng() * 500) : 0,
    });
  }
  return notes;
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
function chthkebynroadmqgiartObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function chthkebynroadmqgiartObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function chthkebynroadmqgiartObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
