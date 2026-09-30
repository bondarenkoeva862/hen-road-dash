import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/** Splash duration — rule #13, exactly 8000ms. Do not lower. */
export const LOADER_DURATION_MS = 8000;
/**
 * Splash progress-bar fill time. Deliberately decoupled from
 * LOADER_DURATION_MS: a layout-prop (useNativeDriver:false) tween running for
 * the full 8s keeps the window non-idle, so uiautomator/waitForIdle never
 * returns and the screenshot agent wedges on the loader. One short shot lets
 * the window settle long before the first capture.
 */
export const LOADER_BAR_ANIM_MS = 3000;

/* ---------------- rhythm timing ---------------- */
export const TRAVEL_MS = 1400;
export const FIRST_NOTE_MS = 4000;
export const NOTE_INTERVAL_MS = 2000;
export const PERFECT_MS = 70;
export const GOOD_MS = 150;
export const HOLD_TICK_MS = 250;
export const HOLD_RELEASE_GRACE_MS = 120;

/* ---------------- scoring ---------------- */
export const SCORE_PERFECT = 120;
export const SCORE_GOOD = 70;
export const SCORE_HOLD_TICK = 15;
export const BAR_START = 100;
export const BAR_MAX = 100;
export const BAR_PERFECT = 5;
export const BAR_GOOD = 3;
export const BAR_MISS = 6;
export const BAR_EMPTY_TAP = 2;
export const MISS_STREAK_LIMIT = 5;
export const WIN_ACCURACY = 0.82;
export const NOTES_PER_TRACK = 24;

/** Round is force-resolved after this when the player never lands a hit. */
export const IDLE_FAILSAFE_MS = 26000;
/** Absolute cap — a result screen always surfaces, even for a strong player. */
export const ROUND_MAX_MS = 30000;
/** Engine tick — drives spawn / miss resolution / hold ticks. */
export const ENGINE_TICK_MS = 90;
/** Freeze before handing over to the result screen. */
export const FINISH_HOLD_MS = 450;

/* ---------------- stage geometry (rules #4 / #5) ---------------- */
export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER; // 8
export const LANES = 3;
export const LANE_GAP = 8;
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
export const LANE_W = Math.floor(
  (BOARD_MAX_W - 2 * BOARD_FRAME - (LANES - 1) * LANE_GAP) / LANES,
);
export const BOARD_W = LANE_W * LANES + (LANES - 1) * LANE_GAP + 2 * BOARD_FRAME;

/** Distance from the bottom of the stage frame to the judgement line. */
export const HIT_LINE_FROM_BOTTOM = 132;
export const PAD_H = 108;
export const NOTE_D = LANE_W - 22;

export type TrackDef = {
  id: number;
  title: string;
  bpm: number;
  duration: string;
  seed: number;
};

export const TRACKS: TrackDef[] = [
  {id: 0, title: 'BARN BOOGIE', bpm: 110, duration: '0:48', seed: 17},
  {id: 1, title: 'NEON COOP', bpm: 128, duration: '0:52', seed: 41},
  {id: 2, title: 'MIDNIGHT ROOST', bpm: 142, duration: '0:56', seed: 73},
];
