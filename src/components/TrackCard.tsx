import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {TrackDef} from '../constants/config';
import {C, NUMERIC, theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  track: TrackDef;
  accent: string;
  best: number;
  active: boolean;
  onPress: () => void;
};

export function TrackCard({track, accent, best, active, onPress}: Props) {
  const press = usePressScale(0.97);

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
              : {borderColor: theme.colors.hairline, borderWidth: 1},
          ]}>
          <View style={[styles.accentBar, {backgroundColor: accent}]} />

          <View style={styles.body}>
            <Text style={styles.title} numberOfLines={1}>
              {track.title}
            </Text>
            <Text style={styles.meta} numberOfLines={1}>
              {track.bpm} BPM {'·'} {track.duration} {'·'} BEST{' '}
              <Text style={[styles.metaStrong, NUMERIC]}>{best}%</Text>
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
    borderRadius: theme.radius.lg,
  },
  card: {
    width: '100%',
    height: 96,
    borderRadius: theme.radius.lg,
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
