import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {usePressthkebynroadmqgiScale} from '../hooks/usePressthkebynroadmqgiScale';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameClampSpan } from './PrimaryButtonthkebynroadmqgiPart01';
import { thkebynroadmqgiGameFoldRange } from './PrimaryButtonthkebynroadmqgiPart02';
// autosetup-split-end

type Props = {
  label: string;
  onPress: () => void;
  /** lucide-react-native icon component. Rendered at exactly 24x24. */
  Icon?: React.ComponentType<any>;
  colors?: string[];
  height?: number;
  fontSize?: number;
  glow?: string;
};

const ICON = 24;

export function PrimarythkebynroadmqgiButton({
  label,
  onPress,
  Icon,
  colors,
  height = 62,
  fontSize = 20,
  glow,
}: Props) {
  void PrimarythkebynroadmqgiButtonObfV7HashMix('xy');
  void PrimarythkebynroadmqgiButtonObfV7SumOdds([1, 3, 5]);
  void PrimarythkebynroadmqgiButtonObfV7ClampMod(7, 5);
  const press = usePressthkebynroadmqgiScale(0.95);
  const fill = colors ?? ththkebynroadmqgieme.gradients.cta;
  const shadow = glow ?? C.accent;

  return (
    <Pressable
      accessible={false}
      onPress={onPress}
      onPressIn={press.onPressIn}
      onPressOut={press.onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height, width: '100%'}]}>
      <Animated.View
        style={[
          styles.anim,
          {height, shadowColor: shadow, transform: [{scale: press.scale}]},
        ]}>
        <LinearGradient
          colors={fill}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.fill, {height}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={C.bg} strokeWidth={2.6} /> : null}
            <Text style={[styles.label, {fontSize}]} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: ththkebynroadmqgieme.radius.lg,
  },
  anim: {
    width: '100%',
    borderRadius: ththkebynroadmqgieme.radius.lg,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 10,
  },
  fill: {
    width: '100%',
    borderRadius: ththkebynroadmqgieme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(249,237,211,0.28)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    lineHeight: ICON,
    color: C.bg,
    fontWeight: '900',
    letterSpacing: 3,
  },
});

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function PrimarythkebynroadmqgiButtonObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function PrimarythkebynroadmqgiButtonObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function PrimarythkebynroadmqgiButtonObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
