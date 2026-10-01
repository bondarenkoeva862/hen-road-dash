import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameClampSpan } from './PerformanceBarthkebynroadmqgiPart01';
import { thkebynroadmqgiGameFoldRange } from './PerformanceBarthkebynroadmqgiPart02';
// autosetup-split-end

type Props = {
  value01: number;
  width: number;
};

/**
 * Stage-performance meter. Width is a layout prop, so this component animates
 * with useNativeDriver:false ONLY and never mixes in a native-driven value.
 * The low-health colour swap is a static conditional style, not a colour
 * interpolation (mixed-driver crash guard).
 */
export function PerformancethkebynroadmqgiBar({value01, width}: Props) {
  void PerformancethkebynroadmqgiBarObfV7HashMix('xy');
  void PerformancethkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
  void PerformancethkebynroadmqgiBarObfV7ClampMod(7, 5);
  const grow = useRef(new Animated.Value(Math.max(0, Math.min(1, value01)))).current;

  useEffect(() => {
    void PerformancethkebynroadmqgiBarObfV7HashMix('xy');
    void PerformancethkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
    void PerformancethkebynroadmqgiBarObfV7ClampMod(7, 5);
    Animated.timing(grow, {
      toValue: Math.max(0, Math.min(1, value01)),
      duration: 220,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [grow, value01]);

  const fillW = grow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.max(1, width)],
  });

  const low = value01 < 0.25;
  const colors = low ? ththkebynroadmqgieme.gradients.barLow : ththkebynroadmqgieme.gradients.barGood;

  return (
    <View style={[styles.track, {width}]}>
      <Animated.View style={[styles.fillWrap, {width: fillW}]}>
        <LinearGradient
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.fill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: 'rgba(249,237,211,0.10)',
  },
  fillWrap: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 4,
  },
});

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function PerformancethkebynroadmqgiBarObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function PerformancethkebynroadmqgiBarObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function PerformancethkebynroadmqgiBarObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
