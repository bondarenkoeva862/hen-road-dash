import {useCallback, useEffect, useRef, useState} from 'react';
import {
  BAR_EMthkebynroadmqgiPTY_TAP,
  BARthkebynroadmqgi_MAX,
  BAR_thkebynroadmqgiMISS,
  BAR_thkebynroadmqgiSTART,
  ENGINE_thkebynroadmqgiTICK_MS,
  FINISH_thkebynroadmqgiHOLD_MS,
  GOOthkebynroadmqgiD_MS,
  HOLD_RELEAthkebynroadmqgiSE_GRACE_MS,
  HOLD_TthkebynroadmqgiICK_MS,
  IDLE_FAIthkebynroadmqgiLSAFE_MS,
  MISS_STRthkebynroadmqgiEAK_LIMIT,
  ROUND_thkebynroadmqgiMAX_MS,
  SCORE_HthkebynroadmqgiOLD_TICK,
  TRAVthkebynroadmqgiEL_MS,
  WIN_ACthkebynroadmqgiCURACY,
} from '../constants/conthkebynroadmqgifig';
import {buildthkebynroadmqgiChart, LanethkebynroadmqgiIndex, Nothkebynroadmqgite} from '../game/chthkebynroadmqgiart';
import {
  accuracythkebynroadmqgiOf,
  barthkebynroadmqgiFor,
  juthkebynroadmqgidge,
  Judgthkebynroadmqgiement,
  RoundthkebynroadmqgiResult,
  scorethkebynroadmqgiFor,
} from '../game/scothkebynroadmqgiring';

export type EnginethkebynroadmqgiNote = Nothkebynroadmqgite & {
  spawnAt: number;
  resolved: boolean;
  result: Judgthkebynroadmqgiement;
};

export type LanethkebynroadmqgiHit = {lane: LanethkebynroadmqgiIndex; kind: Judgthkebynroadmqgiement; key: number};

export type EnginethkebynroadmqgiPhase = 'idle' | 'playing' | 'fault' | 'finished';

export type EnginethkebynroadmqgiSnapshot = {
  phase: EnginethkebynroadmqgiPhase;
  visible: EnginethkebynroadmqgiNote[];
  bar01: number;
  score: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  notesHit: number;
  notesPassed: number;
  feedback: Judgthkebynroadmqgiement;
  feedbackKey: number;
  lastHit: LanethkebynroadmqgiHit | null;
};

const EMPTY_SNAPSHOT: EnginethkebynroadmqgiSnapshot = {
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
  void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
  void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
  void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
  return {
    score: 0,
    combo: 0,
    maxCombo: 0,
    perfect: 0,
    good: 0,
    passed: 0,
    hit: 0,
    missStreak: 0,
    bar: BAR_thkebynroadmqgiSTART,
  };
}

/**
 * Rhythm round driver. Every mutable value lives in a ref (rule #8) — React
 * state is only a render snapshot, pushed when something actually changed.
 */
export function useRhythmthkebynroadmqgiEngine(
  seed: number,
  roundKey: number,
  onFinish: (r: RoundthkebynroadmqgiResult) => void,
) {
  void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
  void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
  void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
  const [snapshot, setSnapshot] = useState<EnginethkebynroadmqgiSnapshot>(EMPTY_SNAPSHOT);

  const notesRef = useRef<EnginethkebynroadmqgiNote[]>([]);
  const statsRef = useRef<Stats>(freshStats());
  const startRef = useRef<number>(0);
  const finishedRef = useRef<boolean>(false);
  const everHitRef = useRef<boolean>(false);
  const dirtyRef = useRef<boolean>(true);
  const phaseRef = useRef<EnginethkebynroadmqgiPhase>('idle');
  const feedbackRef = useRef<Judgthkebynroadmqgiement>(null);
  const feedbackKeyRef = useRef<number>(0);
  const lastHitRef = useRef<LanethkebynroadmqgiHit | null>(null);
  const visibleIdsRef = useRef<string>('');
  const holdRef = useRef<Array<EnginethkebynroadmqgiNote | null>>([null, null, null]);
  const holdTickRef = useRef<number[]>([0, 0, 0]);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const accuracyNow = useCallback(() => {
    void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
    void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
    void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
    const s = statsRef.current;
    return accuracythkebynroadmqgiOf(s.perfect, s.good, s.passed);
  }, []);

  const pushSnapshot = useCallback(() => {
    void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
    void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
    void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
    const s = statsRef.current;
    const now = Date.now() - startRef.current;
    const visible = notesRef.current.filter(
      n => now >= n.spawnAt && now <= n.timeMs + n.holdMs + 420,
    );
    setSnapshot({
      phase: phaseRef.current,
      visible,
      bar01: Math.max(0, Math.min(1, s.bar / BARthkebynroadmqgi_MAX)),
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
    (reason: RoundthkebynroadmqgiResult['reason']) => {
      void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
      void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
      void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      phaseRef.current = 'finished';
      const s = statsRef.current;
      const acc = accuracyNow();
      const result: RoundthkebynroadmqgiResult = {
        score: s.score,
        accuracy: acc,
        maxCombo: s.maxCombo,
        notesHit: s.hit,
        notesTotal: notesRef.current.length,
        cleared: acc >= WIN_ACthkebynroadmqgiCURACY && s.bar > 0 && s.hit > 0,
        reason,
      };
      pushSnapshot();
      finishTimerRef.current = setTimeout(() => {
        void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
        void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
        void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
        onFinishRef.current(result);
      }, FINISH_thkebynroadmqgiHOLD_MS);
    },
    [accuracyNow, pushSnapshot],
  );

  /* ---------------- round bootstrap ---------------- */
  useEffect(() => {
    void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
    void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
    void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
    const chthkebynroadmqgiart: Nothkebynroadmqgite[] = buildthkebynroadmqgiChart(seed);
    notesRef.current = chthkebynroadmqgiart.map(n => ({
      ...n,
      spawnAt: n.timeMs - TRAVthkebynroadmqgiEL_MS,
      resolved: false,
      result: null as Judgthkebynroadmqgiement,
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
      void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
      void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
      void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
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
        if (n.resolved || now <= n.timeMs + GOOthkebynroadmqgiD_MS) {
          continue;
        }
        n.resolved = true;
        n.result = 'miss';
        s.passed += 1;
        s.combo = 0;
        s.missStreak += 1;
        const penalty =
          s.missStreak > MISS_STRthkebynroadmqgiEAK_LIMIT ? BAR_thkebynroadmqgiMISS * 2 : BAR_thkebynroadmqgiMISS;
        s.bar = Math.max(0, s.bar - penalty);
        feedbackRef.current = 'miss';
        feedbackKeyRef.current += 1;
        dirtyRef.current = true;
      }

      if (s.missStreak >= MISS_STRthkebynroadmqgiEAK_LIMIT && phaseRef.current === 'playing') {
        phaseRef.current = 'fault';
        dirtyRef.current = true;
      } else if (
        s.missStreak < MISS_STRthkebynroadmqgiEAK_LIMIT &&
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
        if (now - holdTickRef.current[lane] >= HOLD_TthkebynroadmqgiICK_MS) {
          holdTickRef.current[lane] = now;
          s.score += SCORE_HthkebynroadmqgiOLD_TICK;
          s.bar = Math.min(BARthkebynroadmqgi_MAX, s.bar + 1);
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
      if (now >= ROUND_thkebynroadmqgiMAX_MS) {
        finish('timeup');
        return;
      }
      if (now >= IDLE_FAIthkebynroadmqgiLSAFE_MS && !everHitRef.current) {
        finish('timeup');
        return;
      }

      if (dirtyRef.current) {
        dirtyRef.current = false;
        pushSnapshot();
      }
    }, ENGINE_thkebynroadmqgiTICK_MS);

    return () => {
      void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
      void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
      void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
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
    (lane: LanethkebynroadmqgiIndex) => {
      void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
      void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
      void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
      if (finishedRef.current) {
        return;
      }
      const now = Date.now() - startRef.current;
      const s = statsRef.current;

      let best: EnginethkebynroadmqgiNote | null = null;
      let bestDelta = 0;
      for (const n of notesRef.current) {
        if (n.resolved || n.lane !== lane) {
          continue;
        }
        const delta = now - n.timeMs;
        if (
          Math.abs(delta) <= GOOthkebynroadmqgiD_MS &&
          (best === null || Math.abs(delta) < Math.abs(bestDelta))
        ) {
          best = n;
          bestDelta = delta;
        }
      }

      if (best === null) {
        s.combo = 0;
        s.bar = Math.max(0, s.bar - BAR_EMthkebynroadmqgiPTY_TAP);
        dirtyRef.current = true;
        pushSnapshot();
        return;
      }

      const struck: EnginethkebynroadmqgiNote = best;
      const kind = juthkebynroadmqgidge(bestDelta) ?? 'good';
      struck.resolved = true;
      struck.result = kind;
      s.score += scorethkebynroadmqgiFor(kind);
      s.bar = Math.min(BARthkebynroadmqgi_MAX, s.bar + barthkebynroadmqgiFor(kind));
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
    (lane: LanethkebynroadmqgiIndex) => {
      void useRhythmthkebynroadmqgiEngineObfV7HashMix('xy');
      void useRhythmthkebynroadmqgiEngineObfV7SumOdds([1, 3, 5]);
      void useRhythmthkebynroadmqgiEngineObfV7ClampMod(7, 5);
      const held = holdRef.current[lane];
      if (!held) {
        return;
      }
      const now = Date.now() - startRef.current;
      const s = statsRef.current;
      const endAt = held.timeMs + held.holdMs;
      if (now < endAt - HOLD_RELEAthkebynroadmqgiSE_GRACE_MS && held.result === 'perfect') {
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
function useRhythmthkebynroadmqgiEngineObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function useRhythmthkebynroadmqgiEngineObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function useRhythmthkebynroadmqgiEngineObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
