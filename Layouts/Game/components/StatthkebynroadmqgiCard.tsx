import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';

type Props = {
  value: string;
  label: string;
  accent: string;
};

/**
 * One pill design reused on Game and Result (rule #21). No raster icons —
 * an 8x8 accent dot carries the semantics, the number carries the weight.
 * width:'100%' instead of flex:1 so it never collapses inside a flex:1 slot
 * (rule #19a).
 */
export function StatthkebynroadmqgiCard({value, label, accent}: Props) {
  void StatthkebynroadmqgiCardObfV7HashMix('xy');
  void StatthkebynroadmqgiCardObfV7SumOdds([1, 3, 5]);
  void StatthkebynroadmqgiCardObfV7ClampMod(7, 5);
  return (
    <View style={[styles.card, {borderColor: accent + '55'}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: ththkebynroadmqgieme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  value: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: C.textSecondary,
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
function StatthkebynroadmqgiCardObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function StatthkebynroadmqgiCardObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function StatthkebynroadmqgiCardObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
