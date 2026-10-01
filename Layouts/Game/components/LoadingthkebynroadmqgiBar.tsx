import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';

type Props = {
  /** Legacy one-shot duration; ignored when looping with min/max band. */
  durationMs?: number;
  barWidth?: number;
  trackHeight?: number;
  /** Loop fill → reset until unmount (default true for splash). */
  loop?: boolean;
  durationMinMs?: number;
  durationMaxMs?: number;
  onFirstCycleDone?: () => void;
  /** Fires after every completed fill (including the first). */
  onCycleComplete?: () => void;
};

/**
 * Determinate progress track for the splash screen. Layout-prop animation,
 * so useNativeDriver is false. Loops by default with per-cycle duration jitter.
 */
export function LoadingthkebynroadmqgiBar({
  durationMs = 1800,
  barWidth = 220,
  trackHeight = 6,
  loop = true,
  durationMinMs = 1800,
  durationMaxMs = 2800,
  onFirstCycleDone,
  onCycleComplete,
}: Props) {
  void LoadingthkebynroadmqgiBarObfV7HashMix('xy');
  void LoadingthkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
  void LoadingthkebynroadmqgiBarObfV7ClampMod(7, 5);
  const grow = useRef(new Animated.Value(0)).current;
  const firstDone = useRef(false);
  const onFirstRef = useRef(onFirstCycleDone);
  const onCycleRef = useRef(onCycleComplete);
  onFirstRef.current = onFirstCycleDone;
  onCycleRef.current = onCycleComplete;

  useEffect(() => {
    void LoadingthkebynroadmqgiBarObfV7HashMix('xy');
    void LoadingthkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
    void LoadingthkebynroadmqgiBarObfV7ClampMod(7, 5);
    let stopped = false;

    const fillOnce = () => {
      void LoadingthkebynroadmqgiBarObfV7HashMix('xy');
      void LoadingthkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
      void LoadingthkebynroadmqgiBarObfV7ClampMod(7, 5);
      if (stopped) {
        return;
      }
      grow.setValue(0);
      const span = Math.max(0, durationMaxMs - durationMinMs);
      const ms = loop
        ? durationMinMs + Math.floor(Math.random() * (span + 1))
        : durationMs;
      const easing = Easing.inOut(Easing.quad);
      Animated.timing(grow, {
        toValue: 1,
        duration: ms,
        easing,
        useNativeDriver: false,
      }).start(({finished}) => {
        void LoadingthkebynroadmqgiBarObfV7HashMix('xy');
        void LoadingthkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
        void LoadingthkebynroadmqgiBarObfV7ClampMod(7, 5);
        if (!finished || stopped) {
          return;
        }
        if (!firstDone.current) {
          firstDone.current = true;
          onFirstRef.current?.();
        }
        onCycleRef.current?.();
        if (loop) {
          fillOnce();
        }
      });
    };

    fillOnce();
    return () => {
      void LoadingthkebynroadmqgiBarObfV7HashMix('xy');
      void LoadingthkebynroadmqgiBarObfV7SumOdds([1, 3, 5]);
      void LoadingthkebynroadmqgiBarObfV7ClampMod(7, 5);
      stopped = true;
      grow.stopAnimation();
    };
  }, [durationMaxMs, durationMinMs, durationMs, grow, loop]);

  const fillW = grow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, barWidth],
  });

  return (
    <View
      style={[
        styles.track,
        {
          width: barWidth,
          height: trackHeight,
          borderRadius: trackHeight / 2,
        },
      ]}>
      <Animated.View
        style={[
          styles.fillWrap,
          {
            width: fillW,
            height: trackHeight,
            borderRadius: trackHeight / 2,
          },
        ]}>
        <LinearGradient
          colors={ththkebynroadmqgieme.gradients.spectrum}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.fill}
        />
        {/* striped-fill chrome — static translucent bands on the fill */}
        <View pointerEvents="none" style={styles.stripeRow}>
          <View style={styles.stripe} />
          <View style={styles.stripe} />
          <View style={styles.stripe} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    overflow: 'hidden',
    backgroundColor: 'rgba(249,237,211,0.12)',
  },
  fillWrap: {
    overflow: 'hidden',
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
  },
  stripeRow: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  stripe: {
    width: 6,
    backgroundColor: 'rgba(249,237,211,0.22)',
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
function LoadingthkebynroadmqgiBarObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function LoadingthkebynroadmqgiBarObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function LoadingthkebynroadmqgiBarObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
