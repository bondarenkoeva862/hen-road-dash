import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  count?: number;
  seed?: number;
  palette?: string[];
};

const DEFAULT_PALETTE = ['#FFC63F', '#31BCD0', '#EF5245', '#F9EDD3'];

type Speck = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  opacity: number;
};

/**
 * Static full-canvas "hall dust". Two jobs:
 *  1. gives the splash a texture the flat menu does not have;
 *  2. lifts the loader frame's PNG weight above the menu frame so the
 *     screenshot capture loop cannot mistake one for the other.
 * Kept deliberately sparse: every speck is a native view, and a dense field
 * here dominates the app's first frame (startup regression guard).
 * Points are computed once in useMemo from a deterministic xorshift seed —
 * never at module scope (ANR-at-launch guard).
 */
export function StarField({
  width,
  height,
  count = 120,
  seed = 0x5eed,
  palette = DEFAULT_PALETTE,
}: Props) {
  const specks = useMemo<Speck[]>(() => {
    let s = seed >>> 0 || 0x9e3779b9;
    const rnd = () => {
      s ^= s << 13;
      s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5;
      s >>>= 0;
      return s / 0x100000000;
    };
    const out: Speck[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        cx: Math.round(rnd() * width * 10) / 10,
        cy: Math.round(rnd() * height * 10) / 10,
        r: 0.9 + rnd() * 1.6,
        fill: palette[Math.floor(rnd() * palette.length)],
        opacity: 0.14 + rnd() * 0.2,
      });
    }
    return out;
  }, [count, height, palette, seed, width]);

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.wrap]}>
      <Svg width={width} height={height}>
        {specks.map((p, i) => (
          <Circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.fill}
            opacity={p.opacity}
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: 'hidden',
  },
});
