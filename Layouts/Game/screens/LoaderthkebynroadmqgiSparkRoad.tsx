import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';

/** Neon road accents — spectrum + success only (this project). */
export const ROAD_SPARK_PALETTE = [
  ththkebynroadmqgieme.colors.accent,
  ththkebynroadmqgieme.colors.danger,
  ththkebynroadmqgieme.colors.info,
  ththkebynroadmqgieme.colors.success,
  ...ththkebynroadmqgieme.lanes,
];

const MAX_BURSTS = 3;
const BURST_MIN = 12;
const BURST_MAX = 18;
const BIT_LIFE_MS = 520;

type SparkBit = {
  key: string;
  dx: number;
  dy: number;
  w: number;
  h: number;
  rot: string;
  color: string;
  opacity: Animated.Value;
  tx: Animated.Value;
  ty: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: SparkBit[];
};

type FieldProps = {
  onBackgroundPress: (x: number, y: number) => void;
  children?: React.ReactNode;
};

/**
 * Full-screen tap layer: empty-space presses spawn short neon sparks
 * (elongated dashes, float-drift). Hero / bar sit above with their own hits.
 */
export function LoaderthkebynroadmqgiRoadField({
  onBackgroundPress,
  children,
}: FieldProps) {
  void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
  void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
  void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const seq = useRef(0);
  const active = useRef(0);

  const spawnBurst = useCallback((x: number, y: number) => {
    void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
    void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
    if (active.current >= MAX_BURSTS) {
      return;
    }
    const id = ++seq.current;
    active.current += 1;
    const n = BURST_MIN + Math.floor(Math.random() * (BURST_MAX - BURST_MIN + 1));
    const bits: SparkBit[] = [];
    for (let i = 0; i < n; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 18 + Math.random() * 48;
      const len = 4 + Math.random() * 5;
      const thick = 1.5 + Math.random() * 1.5;
      bits.push({
        key: `${id}-${i}`,
        dx: Math.cos(angle) * dist * 0.35,
        dy: Math.sin(angle) * dist * 0.35,
        w: len,
        h: thick,
        rot: `${Math.round((angle * 180) / Math.PI)}deg`,
        color: ROAD_SPARK_PALETTE[Math.floor(Math.random() * ROAD_SPARK_PALETTE.length)],
        opacity: new Animated.Value(0.95),
        tx: new Animated.Value(0),
        ty: new Animated.Value(0),
      });
    }
    setBursts(prev => [...prev, {id, x, y, bits}]);

    const anims = bits.map(bit => {
      const driftX = (Math.random() - 0.5) * 32;
      const driftY = (Math.random() - 0.5) * 28;
      return Animated.parallel([
        Animated.timing(bit.opacity, {
          toValue: 0,
          duration: BIT_LIFE_MS,
          useNativeDriver: true,
        }),
        Animated.timing(bit.tx, {
          toValue: bit.dx + driftX,
          duration: BIT_LIFE_MS,
          useNativeDriver: true,
        }),
        Animated.timing(bit.ty, {
          toValue: bit.dy + driftY,
          duration: BIT_LIFE_MS,
          useNativeDriver: true,
        }),
      ]);
    });

    Animated.parallel(anims).start(() => {
      active.current = Math.max(0, active.current - 1);
      setBursts(prev => prev.filter(b => b.id !== id));
    });
  }, []);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={e => {
          const {locationX, locationY} = e.nativeEvent;
          spawnBurst(locationX, locationY);
          onBackgroundPress(locationX, locationY);
        }}
      />
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {bursts.map(b => (
          <View
            key={b.id}
            pointerEvents="none"
            style={[styles.burstOrigin, {left: b.x, top: b.y}]}>
            {b.bits.map(bit => (
              <Animated.View
                key={bit.key}
                style={{
                  position: 'absolute',
                  width: bit.w,
                  height: bit.h,
                  borderRadius: 1,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [
                    {translateX: bit.tx},
                    {translateY: bit.ty},
                    {rotate: bit.rot},
                  ],
                }}
              />
            ))}
          </View>
        ))}
      </View>
      {children}
    </View>
  );
}

type CrestProps = {
  children: React.ReactNode;
  style?: object;
};

const REACTIONS = ['wiggle', 'nod', 'half'] as const;

/**
 * Existing medallion only — swipe-shear primary, light tap tilt-turn one-shots.
 * No perpetual loop on the crest.
 */
export function LoaderthkebynroadmqgiRoadCrest({children, style}: CrestProps) {
  void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
  void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
  void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const skewX = useRef(new Animated.Value(0)).current;
  const touched = useRef(false);
  const reactionIdx = useRef(0);

  const playReaction = useCallback(
    (kind: (typeof REACTIONS)[number]) => {
      void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
      void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
      void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
      rotate.stopAnimation();
      skewX.stopAnimation();
      scale.stopAnimation();
      if (kind === 'wiggle') {
        Animated.sequence([
          Animated.timing(rotate, {
            toValue: 8,
            duration: 70,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: -8,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 110,
            useNativeDriver: true,
          }),
        ]).start();
      } else if (kind === 'nod') {
        Animated.sequence([
          Animated.timing(rotate, {
            toValue: -8,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 6,
            duration: 110,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 120,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        Animated.sequence([
          Animated.timing(rotate, {
            toValue: 18,
            duration: 160,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }),
        ]).start();
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.06,
            duration: 120,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 180,
            useNativeDriver: true,
          }),
        ]).start();
      }
    },
    [rotate, scale, skewX],
  );

  const nextTapReaction = useCallback(() => {
    void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
    void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
    const kind = REACTIONS[reactionIdx.current % REACTIONS.length];
    reactionIdx.current += 1;
    playReaction(kind);
  }, [playReaction]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 6 || Math.abs(g.dy) > 6,
      onPanResponderGrant: () => {
        touched.current = true;
      },
      onPanResponderMove: (_, g) => {
        const shear = Math.max(-14, Math.min(14, g.dx * 0.12));
        const tilt = Math.max(-12, Math.min(12, g.dy * 0.08 + g.dx * 0.05));
        skewX.setValue(shear);
        rotate.setValue(tilt);
      },
      onPanResponderRelease: (_, g) => {
        const swiped = Math.abs(g.dx) > 14 || Math.abs(g.dy) > 14;
        Animated.parallel([
          Animated.spring(skewX, {
            toValue: 0,
            friction: 6,
            tension: 80,
            useNativeDriver: true,
          }),
          Animated.spring(rotate, {
            toValue: 0,
            friction: 6,
            tension: 80,
            useNativeDriver: true,
          }),
        ]).start();
        if (!swiped && Math.abs(g.dx) < 8 && Math.abs(g.dy) < 8) {
          nextTapReaction();
        } else if (swiped) {
          playReaction('nod');
        }
      },
    }),
  ).current;

  // Idle one-shot nudge after 2–4s if never touched.
  useEffect(() => {
    void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
    void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      void LoaderthkebynroadmqgiSparkRoadObfV7HashMix('xy');
      void LoaderthkebynroadmqgiSparkRoadObfV7SumOdds([1, 3, 5]);
      void LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(7, 5);
      if (!touched.current) {
        playReaction('wiggle');
      }
    }, delay);
    return () => clearTimeout(t);
  }, [playReaction]);

  const rotStr = rotate.interpolate({
    inputRange: [-30, 30],
    outputRange: ['-30deg', '30deg'],
  });

  return (
    <View {...pan.panHandlers} style={style}>
      <Animated.View
        style={{
          transform: [{translateX: skewX}, {rotate: rotStr}, {scale}],
        }}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  burstOrigin: {
    position: 'absolute',
    width: 1,
    height: 1,
  },
});

/* obfuscation-batch:v7 */
function LoaderthkebynroadmqgiSparkRoadObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function LoaderthkebynroadmqgiSparkRoadObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function LoaderthkebynroadmqgiSparkRoadObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
