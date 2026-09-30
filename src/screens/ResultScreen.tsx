import React, {useEffect, useRef} from 'react';
import {Animated, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ListMusic, Home, RotateCcw} from 'lucide-react-native';
import {NOTES_PER_TRACK, TrackDef, WIN_ACCURACY} from '../constants/config';
import {C, NUMERIC, theme} from '../constants/theme';
import {GlowBackdrop} from '../components/GlowBackdrop';
import {Confetti} from '../components/Confetti';
import {StatCard} from '../components/StatCard';
import {PrimaryButton} from '../components/PrimaryButton';
import {SecondaryButton} from '../components/SecondaryButton';
import {RoundResult, rankOf} from '../game/scoring';
import {formatPercent, formatScore} from '../utils/format';

type Props = {
  result: RoundResult;
  track: TrackDef;
  onPlayAgain: () => void;
  onNextTrack: () => void;
  onMenu: () => void;
};

export function ResultScreen({
  result,
  track,
  onPlayAgain,
  onNextTrack,
  onMenu,
}: Props) {
  const won = result.cleared;
  const tint = won ? C.success : C.danger;
  const rank = rankOf(result.accuracy);

  const pop = useRef(new Animated.Value(0.7)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(pop, {
      toValue: 1,
      tension: 40,
      friction: 6,
      useNativeDriver: true,
    }).start();
    Animated.timing(fade, {
      toValue: 1,
      duration: 320,
      useNativeDriver: true,
    }).start();
  }, [fade, pop]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <LinearGradient
        colors={theme.gradients.sheet}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={won ? theme.gradients.winWash : theme.gradients.loseWash}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.wash}
        pointerEvents="none"
      />
      <GlowBackdrop />
      <Confetti active={won} />

      <Animated.View pointerEvents="box-none" style={[styles.body, {opacity: fade}]}>
        <Text style={styles.trackLine}>{track.title}</Text>
        <Text style={[styles.headline, {color: tint, textShadowColor: tint}]}>
          {won ? 'YOU WON!' : 'NO LUCK!'}
        </Text>

        <Animated.View
          pointerEvents="none"
          style={[styles.medallionWrap, {transform: [{scale: pop}]}]}>
          <LinearGradient
            colors={theme.gradients.medallion}
            start={{x: 0.2, y: 0}}
            end={{x: 0.8, y: 1}}
            style={styles.medallion}>
            <Text style={styles.rank}>{rank}</Text>
            <Text style={styles.rankCaption}>RANK</Text>
          </LinearGradient>
        </Animated.View>

        <Text style={[styles.score, NUMERIC]}>{formatScore(result.score)}</Text>
        <Text style={styles.scoreCaption}>STAGE POINTS</Text>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <StatCard
              value={formatPercent(result.accuracy)}
              label="ACCURACY"
              accent={C.success}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={`x${result.maxCombo}`}
              label="MAX COMBO"
              accent={C.accent}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={`${result.notesHit}/${result.notesTotal || NOTES_PER_TRACK}`}
              label="NOTES"
              accent={C.info}
            />
          </View>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.hint}>
          CLEAR AT {Math.round(WIN_ACCURACY * 100)}% ACCURACY TO UNLOCK THE NEXT
          SONG
        </Text>

        <PrimaryButton
          label="PLAY AGAIN"
          onPress={onPlayAgain}
          Icon={RotateCcw}
          height={60}
          fontSize={19}
        />

        <View style={styles.secondRow}>
          <SecondaryButton
            label="NEXT TRACK"
            onPress={onNextTrack}
            Icon={ListMusic}
            flex
          />
          <SecondaryButton label="MENU" onPress={onMenu} Icon={Home} flex />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.surface,
  },
  wash: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 320,
  },
  body: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackLine: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
    color: C.textSecondary,
    marginBottom: 10,
  },
  headline: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 16,
  },
  medallionWrap: {
    marginTop: 22,
    width: 140,
    height: 140,
    borderRadius: 70,
    shadowColor: C.accent,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.45,
    shadowRadius: 22,
    elevation: 10,
  },
  medallion: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,198,63,0.42)',
  },
  rank: {
    fontSize: 56,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 64,
    color: C.accent,
  },
  rankCaption: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    color: C.textMuted,
  },
  score: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
    color: C.text,
  },
  scoreCaption: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    color: C.textSecondary,
  },
  statRow: {
    marginTop: 22,
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'stretch',
  },
  statSlot: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  hint: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 18,
    color: C.textSecondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
});
