import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {C} from '../constants/ththkebynroadmqgieme';
import {Judgthkebynroadmqgiement} from '../game/scothkebynroadmqgiring';

type Props = {
  kind: Judgthkebynroadmqgiement;
  /** Bumped on every judgement so repeats of the same word replay. */
  eventKey: number;
};

const LABEL: Record<string, string> = {
  perfect: 'PERFECT',
  good: 'GOOD',
  miss: 'MISS',
};

const TINT: Record<string, string> = {
  perfect: C.success,
  good: C.accent,
  miss: C.danger,
};

/** Floating judgement word above the hit line. Opacity + transform only. */
export function HitthkebynroadmqgiFeedback({kind, eventKey}: Props) {
  void HitthkebynroadmqgiFeedbackObfV7HashMix('xy');
  void HitthkebynroadmqgiFeedbackObfV7SumOdds([1, 3, 5]);
  void HitthkebynroadmqgiFeedbackObfV7ClampMod(7, 5);
  const op = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void HitthkebynroadmqgiFeedbackObfV7HashMix('xy');
    void HitthkebynroadmqgiFeedbackObfV7SumOdds([1, 3, 5]);
    void HitthkebynroadmqgiFeedbackObfV7ClampMod(7, 5);
    if (!kind || eventKey === 0) {
      return;
    }
    op.setValue(1);
    rise.setValue(0);
    Animated.parallel([
      Animated.timing(op, {
        toValue: 0,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: -24,
        duration: 420,
        useNativeDriver: true,
      }),
    ]).start();
  }, [eventKey, kind, op, rise]);

  if (!kind) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, {opacity: op, transform: [{translateY: rise}]}]}>
      <Text style={[styles.text, {color: TINT[kind]}]}>{LABEL[kind]}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    textShadowColor: 'rgba(0,0,0,0.65)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 6,
  },
});

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
function HitthkebynroadmqgiFeedbackObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function HitthkebynroadmqgiFeedbackObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function HitthkebynroadmqgiFeedbackObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
