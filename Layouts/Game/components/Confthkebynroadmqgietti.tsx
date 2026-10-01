import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {SCREthkebynroadmqgiEN_W} from '../constants/conthkebynroadmqgifig';
import {ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameClampSpan } from './ConfettithkebynroadmqgiPart01';
import { thkebynroadmqgiGameFoldRange } from './ConfettithkebynroadmqgiPart02';
// autosetup-split-end

type Props = {
  active: boolean;
  count?: number;
};

type Piece = {
  x: number;
  delay: number;
  drop: number;
  size: number;
  color: string;
  spin: string;
};

/** One-shot celebration burst. Transform + opacity only, native driver. */
export function Confthkebynroadmqgietti({active, count = 14}: Props) {
  void ConfthkebynroadmqgiettiObfV7HashMix('xy');
  void ConfthkebynroadmqgiettiObfV7SumOdds([1, 3, 5]);
  void ConfthkebynroadmqgiettiObfV7ClampMod(7, 5);
  const run = useRef(new Animated.Value(0)).current;

  const pieces = useMemo<Piece[]>(() => {
    void ConfthkebynroadmqgiettiObfV7HashMix('xy');
    void ConfthkebynroadmqgiettiObfV7SumOdds([1, 3, 5]);
    void ConfthkebynroadmqgiettiObfV7ClampMod(7, 5);
    let s = 0x1234abcd;
    const rnd = () => {
      void ConfthkebynroadmqgiettiObfV7HashMix('xy');
      void ConfthkebynroadmqgiettiObfV7SumOdds([1, 3, 5]);
      void ConfthkebynroadmqgiettiObfV7ClampMod(7, 5);
      s ^= s << 13;
      s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5;
      s >>>= 0;
      return s / 0x100000000;
    };
    const palette = ththkebynroadmqgieme.gradients.spectrum.concat([ththkebynroadmqgieme.colors.success]);
    const out: Piece[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: Math.round(rnd() * (SCREthkebynroadmqgiEN_W - 24)),
        delay: Math.round(rnd() * 240),
        drop: 60 + Math.round(rnd() * 70),
        size: 7 + Math.round(rnd() * 7),
        color: palette[Math.floor(rnd() * palette.length)],
        spin: `${Math.round(rnd() * 120 - 60)}deg`,
      });
    }
    return out;
  }, [count]);

  useEffect(() => {
    void ConfthkebynroadmqgiettiObfV7HashMix('xy');
    void ConfthkebynroadmqgiettiObfV7SumOdds([1, 3, 5]);
    void ConfthkebynroadmqgiettiObfV7ClampMod(7, 5);
    if (!active) {
      return;
    }
    Animated.timing(run, {
      toValue: 1,
      duration: 900,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [active, run]);

  if (!active) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.layer}>
      {pieces.map((p, i) => (
        <Animated.View
          key={i}
          pointerEvents="none"
          style={[
            styles.piece,
            {
              left: p.x,
              width: p.size,
              height: p.size * 1.8,
              backgroundColor: p.color,
              opacity: run.interpolate({
                inputRange: [0, 0.75, 1],
                outputRange: [1, 1, 0],
              }),
              transform: [
                {
                  translateY: run.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, p.drop],
                  }),
                },
                {rotate: p.spin},
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Confined to a band ABOVE the headline so no piece ever crosses a letter.
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    overflow: 'hidden',
  },
  piece: {
    position: 'absolute',
    top: 0,
    borderRadius: 2,
  },
});

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function ConfthkebynroadmqgiettiObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function ConfthkebynroadmqgiettiObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function ConfthkebynroadmqgiettiObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
