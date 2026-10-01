import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {usePressthkebynroadmqgiScale} from '../hooks/usePressthkebynroadmqgiScale';

type Props = {
  label: string;
  onPress: () => void;
  /** lucide-react-native icon component. Rendered at exactly 24x24. */
  Icon?: React.ComponentType<any>;
  tint?: string;
  flex?: boolean;
};

const ICON = 24;

export function SecondarythkebynroadmqgiButton({label, onPress, Icon, tint, flex}: Props) {
  void SecondarythkebynroadmqgiButtonObfV7HashMix('xy');
  void SecondarythkebynroadmqgiButtonObfV7SumOdds([1, 3, 5]);
  void SecondarythkebynroadmqgiButtonObfV7ClampMod(7, 5);
  const press = usePressthkebynroadmqgiScale(0.96);
  const color = tint ?? C.text;

  return (
    <Pressable
      accessible={false}
      onPress={onPress}
      onPressIn={press.onPressIn}
      onPressOut={press.onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, flex ? styles.flexed : styles.full]}>
      <Animated.View
        style={[styles.anim, {transform: [{scale: press.scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={color} strokeWidth={2.2} /> : null}
          <Text style={[styles.label, {color}]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: 48,
    borderRadius: 14,
  },
  full: {
    width: '100%',
  },
  flexed: {
    flex: 1,
  },
  anim: {
    width: '100%',
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ththkebynroadmqgieme.colors.glassFill,
    borderWidth: 1,
    borderColor: ththkebynroadmqgieme.colors.glassBorder,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    lineHeight: ICON,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
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
function SecondarythkebynroadmqgiButtonObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function SecondarythkebynroadmqgiButtonObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function SecondarythkebynroadmqgiButtonObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
