import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {TrackthkebynroadmqgiDef} from '../constants/conthkebynroadmqgifig';
import {C, NUMthkebynroadmqgiERIC, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {usePressthkebynroadmqgiScale} from '../hooks/usePressthkebynroadmqgiScale';

type Props = {
  track: TrackthkebynroadmqgiDef;
  accent: string;
  best: number;
  active: boolean;
  onPress: () => void;
};

export function TrackthkebynroadmqgiCard({track, accent, best, active, onPress}: Props) {
  void TrackthkebynroadmqgiCardObfV7HashMix('xy');
  void TrackthkebynroadmqgiCardObfV7SumOdds([1, 3, 5]);
  void TrackthkebynroadmqgiCardObfV7ClampMod(7, 5);
  const press = usePressthkebynroadmqgiScale(0.97);

  return (
    <Pressable
      accessible={false}
      onPress={onPress}
      onPressIn={press.onPressIn}
      onPressOut={press.onPressOut}
      hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
      style={styles.press}>
      <Animated.View
        style={[styles.anim, {transform: [{scale: press.scale}]}]}>
        <LinearGradient
          colors={['#1E2434', '#171C28']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[
            styles.card,
            active
              ? {borderColor: accent, borderWidth: 2, shadowColor: accent}
              : {borderColor: ththkebynroadmqgieme.colors.hairline, borderWidth: 1},
          ]}>
          <View style={[styles.accentBar, {backgroundColor: accent}]} />

          <View style={styles.body}>
            <Text style={styles.title} numberOfLines={1}>
              {track.title}
            </Text>
            <Text style={styles.meta} numberOfLines={1}>
              {track.bpm} BPM {'·'} {track.duration} {'·'} BEST{' '}
              <Text style={[styles.metaStrong, NUMthkebynroadmqgiERIC]}>{best}%</Text>
            </Text>
          </View>

          <View style={[styles.playDot, {backgroundColor: accent + '26', borderColor: accent + '77'}]}>
            <Play size={20} color={accent} strokeWidth={2.6} />
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    height: 96,
  },
  anim: {
    width: '100%',
    height: 96,
    borderRadius: ththkebynroadmqgieme.radius.lg,
  },
  card: {
    width: '100%',
    height: 96,
    borderRadius: ththkebynroadmqgieme.radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 14,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  accentBar: {
    width: 4,
    height: 64,
    borderRadius: 2,
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: C.text,
  },
  meta: {
    marginTop: 6,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: C.textSecondary,
  },
  metaStrong: {
    color: C.accent,
    fontWeight: '900',
  },
  playDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
function TrackthkebynroadmqgiCardObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function TrackthkebynroadmqgiCardObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function TrackthkebynroadmqgiCardObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
