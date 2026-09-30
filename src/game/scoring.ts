import {
  GOOD_MS,
  PERFECT_MS,
  SCORE_GOOD,
  SCORE_PERFECT,
  BAR_GOOD,
  BAR_PERFECT,
  WIN_ACCURACY,
} from '../constants/config';

export type Judgement = 'perfect' | 'good' | 'miss' | null;

/** Returns the judgement for a tap that lands `deltaMs` from the note time. */
export function judge(deltaMs: number): Exclude<Judgement, 'miss' | null> | null {
  const d = Math.abs(deltaMs);
  if (d <= PERFECT_MS) {
    return 'perfect';
  }
  if (d <= GOOD_MS) {
    return 'good';
  }
  return null;
}

export function scoreFor(kind: 'perfect' | 'good'): number {
  return kind === 'perfect' ? SCORE_PERFECT : SCORE_GOOD;
}

export function barFor(kind: 'perfect' | 'good'): number {
  return kind === 'perfect' ? BAR_PERFECT : BAR_GOOD;
}

/** accuracy = (perfect * 1.0 + good * 0.65) / notesPassed */
export function accuracyOf(perfect: number, good: number, passed: number): number {
  if (passed <= 0) {
    return 0;
  }
  return (perfect * 1 + good * 0.65) / passed;
}

export function rankOf(accuracy: number): string {
  if (accuracy >= 0.95) {
    return 'S';
  }
  if (accuracy >= 0.88) {
    return 'A';
  }
  if (accuracy >= WIN_ACCURACY) {
    return 'B';
  }
  return 'C';
}

export type RoundResult = {
  score: number;
  accuracy: number;
  maxCombo: number;
  notesHit: number;
  notesTotal: number;
  cleared: boolean;
  reason: 'bar' | 'end' | 'timeup';
};
