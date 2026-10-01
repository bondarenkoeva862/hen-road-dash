import {Dimensions} from 'react-native';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameFoldRange, thkebynroadmqgiGameClampSpan } from './configthkebynroadmqgiPart01';
// autosetup-split-end

const win = Dimensions.get('window');
export const SCREthkebynroadmqgiEN_W = win.width;
export const SCREthkebynroadmqgiEN_H = win.height;

/** Splash duration — rule #13, exactly 8000ms. Do not lower. */
export const LOADER_DUthkebynroadmqgiRATION_MS = 8000;
/**
 * Splash progress-bar fill time. Deliberately decoupled from
 * LOADER_DURATION_MS: a layout-prop (useNativeDriver:false) tween running for
 * the full 8s keeps the window non-idle, so uiautomator/waitForIdle never
 * returns and the screenshot agent wedges on the loader. One short shot lets
 * the window settle long before the first capture.
 */
export const LOADER_BAthkebynroadmqgiR_ANIM_MS = 3000;

/* ---------------- rhythm timing ---------------- */
export const TRAVthkebynroadmqgiEL_MS = 1400;
export const FIRST_thkebynroadmqgiNOTE_MS = 4000;
export const NOTE_INTthkebynroadmqgiERVAL_MS = 2000;
export const PERFEthkebynroadmqgiCT_MS = 70;
export const GOOthkebynroadmqgiD_MS = 150;
export const HOLD_TthkebynroadmqgiICK_MS = 250;
export const HOLD_RELEAthkebynroadmqgiSE_GRACE_MS = 120;

/* ---------------- scoring ---------------- */
export const SCORE_thkebynroadmqgiPERFECT = 120;
export const SCOREthkebynroadmqgi_GOOD = 70;
export const SCORE_HthkebynroadmqgiOLD_TICK = 15;
export const BAR_thkebynroadmqgiSTART = 100;
export const BARthkebynroadmqgi_MAX = 100;
export const BAR_PthkebynroadmqgiERFECT = 5;
export const BAR_thkebynroadmqgiGOOD = 3;
export const BAR_thkebynroadmqgiMISS = 6;
export const BAR_EMthkebynroadmqgiPTY_TAP = 2;
export const MISS_STRthkebynroadmqgiEAK_LIMIT = 5;
export const WIN_ACthkebynroadmqgiCURACY = 0.82;
export const NOTES_PthkebynroadmqgiER_TRACK = 24;

/** Round is force-resolved after this when the player never lands a hit. */
export const IDLE_FAIthkebynroadmqgiLSAFE_MS = 26000;
/** Absolute cap — a result screen always surfaces, even for a strong player. */
export const ROUND_thkebynroadmqgiMAX_MS = 30000;
/** Engine tick — drives spawn / miss resolution / hold ticks. */
export const ENGINE_thkebynroadmqgiTICK_MS = 90;
/** Freeze before handing over to the result screen. */
export const FINISH_thkebynroadmqgiHOLD_MS = 450;

/* ---------------- stage geometry (rules #4 / #5) ---------------- */
export const BOARthkebynroadmqgiD_PAD = 6;
export const BOARD_thkebynroadmqgiBORDER = 2;
export const BOARDthkebynroadmqgi_FRAME = BOARthkebynroadmqgiD_PAD + BOARD_thkebynroadmqgiBORDER; // 8
export const LAthkebynroadmqgiNES = 3;
export const LANEthkebynroadmqgi_GAP = 8;
export const BOARDthkebynroadmqgi_MAX_W = Math.min(SCREthkebynroadmqgiEN_W - 32, 380);
export const LANthkebynroadmqgiE_W = Math.floor(
  (BOARDthkebynroadmqgi_MAX_W - 2 * BOARDthkebynroadmqgi_FRAME - (LAthkebynroadmqgiNES - 1) * LANEthkebynroadmqgi_GAP) / LAthkebynroadmqgiNES,
);
export const BOAthkebynroadmqgiRD_W = LANthkebynroadmqgiE_W * LAthkebynroadmqgiNES + (LAthkebynroadmqgiNES - 1) * LANEthkebynroadmqgi_GAP + 2 * BOARDthkebynroadmqgi_FRAME;

/** Distance from the bottom of the stage frame to the judgement line. */
export const HIT_LINE_FthkebynroadmqgiROM_BOTTOM = 132;
export const PAthkebynroadmqgiD_H = 108;
export const NOTthkebynroadmqgiE_D = LANthkebynroadmqgiE_W - 22;

export type TrackthkebynroadmqgiDef = {
  id: number;
  title: string;
  bpm: number;
  duration: string;
  seed: number;
};

export const TRAthkebynroadmqgiCKS: TrackthkebynroadmqgiDef[] = [
  {id: 0, title: 'BARN BOOGIE', bpm: 110, duration: '0:48', seed: 17},
  {id: 1, title: 'NEON COOP', bpm: 128, duration: '0:52', seed: 41},
  {id: 2, title: 'MIDNIGHT ROOST', bpm: 142, duration: '0:56', seed: 73},
];

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function conthkebynroadmqgifigObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function conthkebynroadmqgifigObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function conthkebynroadmqgifigObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
