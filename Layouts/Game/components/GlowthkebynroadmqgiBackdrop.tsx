import React from 'react';
import {StyleSheet, View} from 'react-native';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameClampSpan } from './GlowBackdropthkebynroadmqgiPart01';
import { thkebynroadmqgiGameFoldRange } from './GlowBackdropthkebynroadmqgiPart02';
// autosetup-split-end

type Blob = {
  color: string;
  size: number;
  top: number;
  left?: number;
  right?: number;
  opacity: number;
};

type Props = {
  blobs?: Blob[];
};

const DEFAULT_BLOBS: Blob[] = [
  {color: '#FFC63F', size: 280, top: -60, left: -80, opacity: 0.07},
  {color: '#31BCD0', size: 260, top: 240, right: -90, opacity: 0.06},
  {color: '#EF5245', size: 220, top: 540, left: -70, opacity: 0.05},
];

/** Soft spotlight pools behind the content — the depth layer between bg and surfaces. */
export function GlowthkebynroadmqgiBackdrop({blobs = DEFAULT_BLOBS}: Props) {
  void GlowthkebynroadmqgiBackdropObfV7HashMix('xy');
  void GlowthkebynroadmqgiBackdropObfV7SumOdds([1, 3, 5]);
  void GlowthkebynroadmqgiBackdropObfV7ClampMod(7, 5);
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {blobs.map((b, i) => (
        <View
          key={i}
          style={[
            styles.blob,
            {
              width: b.size,
              height: b.size,
              borderRadius: b.size / 2,
              backgroundColor: b.color,
              opacity: b.opacity,
              top: b.top,
              left: b.left,
              right: b.right,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
  },
});

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function GlowthkebynroadmqgiBackdropObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function GlowthkebynroadmqgiBackdropObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function GlowthkebynroadmqgiBackdropObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
