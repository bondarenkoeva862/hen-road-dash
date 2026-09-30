import {FIRST_NOTE_MS, NOTE_INTERVAL_MS, NOTES_PER_TRACK} from '../constants/config';

export type LaneIndex = 0 | 1 | 2;

export type Note = {
  id: number;
  lane: LaneIndex;
  /** When the note must be struck, ms from round start. */
  timeMs: number;
  /** 0 for a tap note, >0 for a hold note. */
  holdMs: number;
};

/** Deterministic xorshift32 — same seed always yields the same chart. */
function makeRng(seed: number): () => number {
  let s = seed >>> 0 || 0x9e3779b9;
  return () => {
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
export function buildChart(seed: number, count: number = NOTES_PER_TRACK): Note[] {
  const rng = makeRng(seed);
  const notes: Note[] = [];
  let prevLane: LaneIndex = 1;

  for (let i = 0; i < count; i++) {
    let lane = Math.floor(rng() * 3) as LaneIndex;
    if (lane === prevLane) {
      lane = ((lane + 1) % 3) as LaneIndex;
    }
    prevLane = lane;

    const isHold = i > 2 && rng() < 0.3;
    notes.push({
      id: i,
      lane,
      timeMs: FIRST_NOTE_MS + i * NOTE_INTERVAL_MS,
      holdMs: isHold ? 700 + Math.floor(rng() * 500) : 0,
    });
  }
  return notes;
}
