import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameClampSpan } from './ChipthkebynroadmqgiPart01';
import { thkebynroadmqgiGameFoldRange } from './ChipthkebynroadmqgiPart02';
// autosetup-split-end

type Props = {
  label: string;
  color: string;
  active?: boolean;
};

export function Chthkebynroadmqgiip({label, color, active}: Props) {
  void ChthkebynroadmqgiipObfV7HashMix('xy');
  void ChthkebynroadmqgiipObfV7SumOdds([1, 3, 5]);
  void ChthkebynroadmqgiipObfV7ClampMod(7, 5);
  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor: color + (active ? '26' : '1A'),
          borderColor: color + (active ? '88' : '55'),
        },
      ]}>
      <Text style={[styles.label, {color}]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 40,
    minWidth: 60,
    flexShrink: 1,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
});

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function ChthkebynroadmqgiipObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function ChthkebynroadmqgiipObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function ChthkebynroadmqgiipObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
