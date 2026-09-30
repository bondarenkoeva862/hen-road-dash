import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {SCREEN_W} from '../constants/config';
import {theme} from '../constants/theme';

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
export function Confetti({active, count = 14}: Props) {
  const run = useRef(new Animated.Value(0)).current;

  const pieces = useMemo<Piece[]>(() => {
    let s = 0x1234abcd;
    const rnd = () => {
      s ^= s << 13;
      s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5;
      s >>>= 0;
      return s / 0x100000000;
    };
    const palette = theme.gradients.spectrum.concat([theme.colors.success]);
    const out: Piece[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: Math.round(rnd() * (SCREEN_W - 24)),
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
