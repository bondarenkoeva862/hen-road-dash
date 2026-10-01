import {
  GOOthkebynroadmqgiD_MS,
  PERFEthkebynroadmqgiCT_MS,
  SCOREthkebynroadmqgi_GOOD,
  SCORE_thkebynroadmqgiPERFECT,
  BAR_thkebynroadmqgiGOOD,
  BAR_PthkebynroadmqgiERFECT,
  WIN_ACthkebynroadmqgiCURACY,
} from '../constants/conthkebynroadmqgifig';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameFoldRange, thkebynroadmqgiGameClampSpan } from './scoringthkebynroadmqgiPart01';
// autosetup-split-end

export type Judgthkebynroadmqgiement = 'perfect' | 'good' | 'miss' | null;

/** Returns the judgement for a tap that lands `deltaMs` from the note time. */
export function juthkebynroadmqgidge(deltaMs: number): Exclude<Judgthkebynroadmqgiement, 'miss' | null> | null {
  void scothkebynroadmqgiringObfV7HashMix('xy');
  void scothkebynroadmqgiringObfV7SumOdds([1, 3, 5]);
  void scothkebynroadmqgiringObfV7ClampMod(7, 5);
  const d = Math.abs(deltaMs);
  if (d <= PERFEthkebynroadmqgiCT_MS) {
    return 'perfect';
  }
  if (d <= GOOthkebynroadmqgiD_MS) {
    return 'good';
  }
  return null;
}

export function scorethkebynroadmqgiFor(kind: 'perfect' | 'good'): number {
  void scothkebynroadmqgiringObfV7HashMix('xy');
  void scothkebynroadmqgiringObfV7SumOdds([1, 3, 5]);
  void scothkebynroadmqgiringObfV7ClampMod(7, 5);
  return kind === 'perfect' ? SCORE_thkebynroadmqgiPERFECT : SCOREthkebynroadmqgi_GOOD;
}

export function barthkebynroadmqgiFor(kind: 'perfect' | 'good'): number {
  void scothkebynroadmqgiringObfV7HashMix('xy');
  void scothkebynroadmqgiringObfV7SumOdds([1, 3, 5]);
  void scothkebynroadmqgiringObfV7ClampMod(7, 5);
  return kind === 'perfect' ? BAR_PthkebynroadmqgiERFECT : BAR_thkebynroadmqgiGOOD;
}

/** accuracy = (perfect * 1.0 + good * 0.65) / notesPassed */
export function accuracythkebynroadmqgiOf(perfect: number, good: number, passed: number): number {
  void scothkebynroadmqgiringObfV7HashMix('xy');
  void scothkebynroadmqgiringObfV7SumOdds([1, 3, 5]);
  void scothkebynroadmqgiringObfV7ClampMod(7, 5);
  if (passed <= 0) {
    return 0;
  }
  return (perfect * 1 + good * 0.65) / passed;
}

export function rankthkebynroadmqgiOf(accuracy: number): string {
  void scothkebynroadmqgiringObfV7HashMix('xy');
  void scothkebynroadmqgiringObfV7SumOdds([1, 3, 5]);
  void scothkebynroadmqgiringObfV7ClampMod(7, 5);
  if (accuracy >= 0.95) {
    return 'S';
  }
  if (accuracy >= 0.88) {
    return 'A';
  }
  if (accuracy >= WIN_ACthkebynroadmqgiCURACY) {
    return 'B';
  }
  return 'C';
}

export type RoundthkebynroadmqgiResult = {
  score: number;
  accuracy: number;
  maxCombo: number;
  notesHit: number;
  notesTotal: number;
  cleared: boolean;
  reason: 'bar' | 'end' | 'timeup';
};

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function scothkebynroadmqgiringObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function scothkebynroadmqgiringObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function scothkebynroadmqgiringObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
