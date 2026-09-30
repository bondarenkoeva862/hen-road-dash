import {useCallback, useEffect, useRef, useState} from 'react';
import {
  BAR_EMPTY_TAP,
  BAR_MAX,
  BAR_MISS,
  BAR_START,
  ENGINE_TICK_MS,
  FINISH_HOLD_MS,
  GOOD_MS,
  HOLD_RELEASE_GRACE_MS,
  HOLD_TICK_MS,
  IDLE_FAILSAFE_MS,
  MISS_STREAK_LIMIT,
  ROUND_MAX_MS,
  SCORE_HOLD_TICK,
  TRAVEL_MS,
  WIN_ACCURACY,
} from '../constants/config';
import {buildChart, LaneIndex, Note} from '../game/chart';
import {
  accuracyOf,
  barFor,
  judge,
  Judgement,
  RoundResult,
  scoreFor,
} from '../game/scoring';

export type EngineNote = Note & {
  spawnAt: number;
  resolved: boolean;
  result: Judgement;
};

export type LaneHit = {lane: LaneIndex; kind: Judgement; key: number};

export type EnginePhase = 'idle' | 'playing' | 'fault' | 'finished';

export type EngineSnapshot = {
  phase: EnginePhase;
  visible: EngineNote[];
  bar01: number;
  score: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  notesHit: number;
  notesPassed: number;
  feedback: Judgement;
  feedbackKey: number;
  lastHit: LaneHit | null;
};

const EMPTY_SNAPSHOT: EngineSnapshot = {
  phase: 'idle',
  visible: [],
  bar01: 1,
  score: 0,
  combo: 0,
  maxCombo: 0,
  accuracy: 0,
  notesHit: 0,
  notesPassed: 0,
  feedback: null,
  feedbackKey: 0,
  lastHit: null,
};

type Stats = {
  score: number;
  combo: number;
  maxCombo: number;
  perfect: number;
  good: number;
  passed: number;
  hit: number;
  missStreak: number;
  bar: number;
};

function freshStats(): Stats {
  return {
    score: 0,
    combo: 0,
    maxCombo: 0,
    perfect: 0,
    good: 0,
    passed: 0,
    hit: 0,
    missStreak: 0,
    bar: BAR_START,
  };
}

/**
 * Rhythm round driver. Every mutable value lives in a ref (rule #8) — React
 * state is only a render snapshot, pushed when something actually changed.
 */
export function useRhythmEngine(
  seed: number,
  roundKey: number,
  onFinish: (r: RoundResult) => void,
) {
  const [snapshot, setSnapshot] = useState<EngineSnapshot>(EMPTY_SNAPSHOT);

  const notesRef = useRef<EngineNote[]>([]);
  const statsRef = useRef<Stats>(freshStats());
  const startRef = useRef<number>(0);
  const finishedRef = useRef<boolean>(false);
  const everHitRef = useRef<boolean>(false);
  const dirtyRef = useRef<boolean>(true);
  const phaseRef = useRef<EnginePhase>('idle');
  const feedbackRef = useRef<Judgement>(null);
  const feedbackKeyRef = useRef<number>(0);
  const lastHitRef = useRef<LaneHit | null>(null);
  const visibleIdsRef = useRef<string>('');
  const holdRef = useRef<Array<EngineNote | null>>([null, null, null]);
  const holdTickRef = useRef<number[]>([0, 0, 0]);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const accuracyNow = useCallback(() => {
    const s = statsRef.current;
    return accuracyOf(s.perfect, s.good, s.passed);
  }, []);

  const pushSnapshot = useCallback(() => {
    const s = statsRef.current;
    const now = Date.now() - startRef.current;
    const visible = notesRef.current.filter(
      n => now >= n.spawnAt && now <= n.timeMs + n.holdMs + 420,
    );
    setSnapshot({
      phase: phaseRef.current,
      visible,
      bar01: Math.max(0, Math.min(1, s.bar / BAR_MAX)),
      score: s.score,
      combo: s.combo,
      maxCombo: s.maxCombo,
      accuracy: accuracyNow(),
      notesHit: s.hit,
      notesPassed: s.passed,
      feedback: feedbackRef.current,
      feedbackKey: feedbackKeyRef.current,
      lastHit: lastHitRef.current,
    });
  }, [accuracyNow]);

  const finish = useCallback(
    (reason: RoundResult['reason']) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      phaseRef.current = 'finished';
      const s = statsRef.current;
      const acc = accuracyNow();
      const result: RoundResult = {
        score: s.score,
        accuracy: acc,
        maxCombo: s.maxCombo,
        notesHit: s.hit,
        notesTotal: notesRef.current.length,
        cleared: acc >= WIN_ACCURACY && s.bar > 0 && s.hit > 0,
        reason,
      };
      pushSnapshot();
      finishTimerRef.current = setTimeout(() => {
        onFinishRef.current(result);
      }, FINISH_HOLD_MS);
    },
    [accuracyNow, pushSnapshot],
  );

  /* ---------------- round bootstrap ---------------- */
  useEffect(() => {
    const chart: Note[] = buildChart(seed);
    notesRef.current = chart.map(n => ({
      ...n,
      spawnAt: n.timeMs - TRAVEL_MS,
      resolved: false,
      result: null as Judgement,
    }));
    statsRef.current = freshStats();
    startRef.current = Date.now();
    finishedRef.current = false;
    everHitRef.current = false;
    phaseRef.current = 'idle';
    feedbackRef.current = null;
    feedbackKeyRef.current = 0;
    lastHitRef.current = null;
    visibleIdsRef.current = '';
    holdRef.current = [null, null, null];
    holdTickRef.current = [0, 0, 0];
    dirtyRef.current = true;

    const interval = setInterval(() => {
      if (finishedRef.current) {
        return;
      }
      const now = Date.now() - startRef.current;
      const s = statsRef.current;
      const notes = notesRef.current;
      if (notes.length === 0) {
        return;
      }

      if (phaseRef.current === 'idle' && now >= notes[0].spawnAt) {
        phaseRef.current = 'playing';
        dirtyRef.current = true;
      }

      // 1. Notes that fell past the judgement window without a tap -> MISS.
      for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        if (n.resolved || now <= n.timeMs + GOOD_MS) {
          continue;
        }
        n.resolved = true;
        n.result = 'miss';
        s.passed += 1;
        s.combo = 0;
        s.missStreak += 1;
        const penalty =
          s.missStreak > MISS_STREAK_LIMIT ? BAR_MISS * 2 : BAR_MISS;
        s.bar = Math.max(0, s.bar - penalty);
        feedbackRef.current = 'miss';
        feedbackKeyRef.current += 1;
        dirtyRef.current = true;
      }

      if (s.missStreak >= MISS_STREAK_LIMIT && phaseRef.current === 'playing') {
        phaseRef.current = 'fault';
        dirtyRef.current = true;
      } else if (
        s.missStreak < MISS_STREAK_LIMIT &&
        phaseRef.current === 'fault'
      ) {
        phaseRef.current = 'playing';
        dirtyRef.current = true;
      }

      // 2. Hold-note upkeep.
      for (let lane = 0; lane < 3; lane++) {
        const held = holdRef.current[lane];
        if (!held) {
          continue;
        }
        const endAt = held.timeMs + held.holdMs;
        if (now > endAt) {
          holdRef.current[lane] = null;
          continue;
        }
        if (now - holdTickRef.current[lane] >= HOLD_TICK_MS) {
          holdTickRef.current[lane] = now;
          s.score += SCORE_HOLD_TICK;
          s.bar = Math.min(BAR_MAX, s.bar + 1);
          dirtyRef.current = true;
        }
      }

      // 3. Visible-set membership.
      const ids = notes
        .filter(n => now >= n.spawnAt && now <= n.timeMs + n.holdMs + 420)
        .map(n => n.id)
        .join(',');
      if (ids !== visibleIdsRef.current) {
        visibleIdsRef.current = ids;
        dirtyRef.current = true;
      }

      // 4. Round termination — a result ALWAYS surfaces on its own.
      const last = notes[notes.length - 1];
      if (s.bar <= 0) {
        finish('bar');
        return;
      }
      if (
        now > last.timeMs + last.holdMs + 600 &&
        notes.every(n => n.resolved)
      ) {
        finish('end');
        return;
      }
      if (now >= ROUND_MAX_MS) {
        finish('timeup');
        return;
      }
      if (now >= IDLE_FAILSAFE_MS && !everHitRef.current) {
        finish('timeup');
        return;
      }

      if (dirtyRef.current) {
        dirtyRef.current = false;
        pushSnapshot();
      }
    }, ENGINE_TICK_MS);

    return () => {
      clearInterval(interval);
      if (finishTimerRef.current) {
        clearTimeout(finishTimerRef.current);
        finishTimerRef.current = null;
      }
      finishedRef.current = true;
    };
  }, [seed, roundKey, finish, pushSnapshot]);

  /* ---------------- input ---------------- */
  const pressPad = useCallback(
    (lane: LaneIndex) => {
      if (finishedRef.current) {
        return;
      }
      const now = Date.now() - startRef.current;
      const s = statsRef.current;

      let best: EngineNote | null = null;
      let bestDelta = 0;
      for (const n of notesRef.current) {
        if (n.resolved || n.lane !== lane) {
          continue;
        }
        const delta = now - n.timeMs;
        if (
          Math.abs(delta) <= GOOD_MS &&
          (best === null || Math.abs(delta) < Math.abs(bestDelta))
        ) {
          best = n;
          bestDelta = delta;
        }
      }

      if (best === null) {
        s.combo = 0;
        s.bar = Math.max(0, s.bar - BAR_EMPTY_TAP);
        dirtyRef.current = true;
        pushSnapshot();
        return;
      }

      const struck: EngineNote = best;
      const kind = judge(bestDelta) ?? 'good';
      struck.resolved = true;
      struck.result = kind;
      s.score += scoreFor(kind);
      s.bar = Math.min(BAR_MAX, s.bar + barFor(kind));
      s.combo += 1;
      s.maxCombo = Math.max(s.maxCombo, s.combo);
      s.passed += 1;
      s.hit += 1;
      s.missStreak = 0;
      if (kind === 'perfect') {
        s.perfect += 1;
      } else {
        s.good += 1;
      }
      everHitRef.current = true;

      if (struck.holdMs > 0) {
        holdRef.current[lane] = struck;
        holdTickRef.current[lane] = now;
      }

      feedbackRef.current = kind;
      feedbackKeyRef.current += 1;
      lastHitRef.current = {lane, kind, key: feedbackKeyRef.current};
      dirtyRef.current = true;
      pushSnapshot();
    },
    [pushSnapshot],
  );

  const releasePad = useCallback(
    (lane: LaneIndex) => {
      const held = holdRef.current[lane];
      if (!held) {
        return;
      }
      const now = Date.now() - startRef.current;
      const s = statsRef.current;
      const endAt = held.timeMs + held.holdMs;
      if (now < endAt - HOLD_RELEASE_GRACE_MS && held.result === 'perfect') {
        held.result = 'good';
        s.perfect = Math.max(0, s.perfect - 1);
        s.good += 1;
        dirtyRef.current = true;
        pushSnapshot();
      }
      holdRef.current[lane] = null;
    },
    [pushSnapshot],
  );

  return {snapshot, pressPad, releasePad};
}
