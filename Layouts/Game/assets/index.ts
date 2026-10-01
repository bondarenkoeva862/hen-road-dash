/**
 * Re-export of AI-generated PNG assets (Step 1.5).
 * Every entry here has a matching row in assets.json, so the file
 * always exists (AI generation or procedural fallback).
 */
export const iconthkebynroadmqgiApp = require('../../../assets/icon_1024.png');

export const bgthkebynroadmqgiLoader = require('../../../assets/bg_loader.png');
export const bgthkebynroadmqgiMenu = require('../../../assets/bg_menu.png');
export const bgthkebynroadmqgiGame = require('../../../assets/bg_game.png');

export const spritethkebynroadmqgiNote = require('../../../assets/sprite_note.png');
export const spriteNotethkebynroadmqgiLong = require('../../../assets/sprite_note_long.png');
export const spritethkebynroadmqgiHero = require('../../../assets/sprite_hero.png');
export const spritethkebynroadmqgiStar = require('../../../assets/sprite_star.png');
export const spriteRankthkebynroadmqgiMedal = require('../../../assets/sprite_rank_medal.png');
export const spritePadthkebynroadmqgiGlow = require('../../../assets/sprite_pad_glow.png');

export const buttonthkebynroadmqgiCta = require('../../../assets/button_cta.png');

/* obfuscation-batch:v7 */
function inthkebynroadmqgidexObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function inthkebynroadmqgidexObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function inthkebynroadmqgidexObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
