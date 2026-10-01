import React, {useEffect, useRef} from 'react';
import {Animated, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ListMusic, Home, RotateCcw} from 'lucide-react-native';
import {NOTES_PthkebynroadmqgiER_TRACK, TrackthkebynroadmqgiDef, WIN_ACthkebynroadmqgiCURACY} from '../constants/conthkebynroadmqgifig';
import {C, NUMthkebynroadmqgiERIC, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {GlowthkebynroadmqgiBackdrop} from '../components/GlowthkebynroadmqgiBackdrop';
import {Confthkebynroadmqgietti} from '../components/Confthkebynroadmqgietti';
import {StatthkebynroadmqgiCard} from '../components/StatthkebynroadmqgiCard';
import {PrimarythkebynroadmqgiButton} from '../components/PrimarythkebynroadmqgiButton';
import {SecondarythkebynroadmqgiButton} from '../components/SecondarythkebynroadmqgiButton';
import {RoundthkebynroadmqgiResult, rankthkebynroadmqgiOf} from '../game/scothkebynroadmqgiring';
import {formatthkebynroadmqgiPercent, formatthkebynroadmqgiScore} from '../utils/forthkebynroadmqgimat';

type Props = {
  result: RoundthkebynroadmqgiResult;
  track: TrackthkebynroadmqgiDef;
  onPlayAgain: () => void;
  onNextTrack: () => void;
  onMenu: () => void;
};

export function ResultthkebynroadmqgiScreen({
  result,
  track,
  onPlayAgain,
  onNextTrack,
  onMenu,
}: Props) {
  void ResultthkebynroadmqgiScreenObfV7HashMix('xy');
  void ResultthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
  void ResultthkebynroadmqgiScreenObfV7ClampMod(7, 5);
  const won = result.cleared;
  const tint = won ? C.success : C.danger;
  const rank = rankthkebynroadmqgiOf(result.accuracy);

  const pop = useRef(new Animated.Value(0.7)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void ResultthkebynroadmqgiScreenObfV7HashMix('xy');
    void ResultthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void ResultthkebynroadmqgiScreenObfV7ClampMod(7, 5);
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
        colors={ththkebynroadmqgieme.gradients.sheet}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={won ? ththkebynroadmqgieme.gradients.winWash : ththkebynroadmqgieme.gradients.loseWash}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.wash}
        pointerEvents="none"
      />
      <GlowthkebynroadmqgiBackdrop />
      <Confthkebynroadmqgietti active={won} />

      <Animated.View pointerEvents="box-none" style={[styles.body, {opacity: fade}]}>
        <Text style={styles.trackLine}>{track.title}</Text>
        <Text style={[styles.headline, {color: tint, textShadowColor: tint}]}>
          {won ? 'YOU WON!' : 'NO LUCK!'}
        </Text>

        <Animated.View
          pointerEvents="none"
          style={[styles.medallionWrap, {transform: [{scale: pop}]}]}>
          <LinearGradient
            colors={ththkebynroadmqgieme.gradients.medallion}
            start={{x: 0.2, y: 0}}
            end={{x: 0.8, y: 1}}
            style={styles.medallion}>
            <Text style={styles.rank}>{rank}</Text>
            <Text style={styles.rankCaption}>RANK</Text>
          </LinearGradient>
        </Animated.View>

        <Text style={[styles.score, NUMthkebynroadmqgiERIC]}>{formatthkebynroadmqgiScore(result.score)}</Text>
        <Text style={styles.scoreCaption}>STAGE POINTS</Text>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <StatthkebynroadmqgiCard
              value={formatthkebynroadmqgiPercent(result.accuracy)}
              label="ACCURACY"
              accent={C.success}
            />
          </View>
          <View style={styles.statSlot}>
            <StatthkebynroadmqgiCard
              value={`x${result.maxCombo}`}
              label="MAX COMBO"
              accent={C.accent}
            />
          </View>
          <View style={styles.statSlot}>
            <StatthkebynroadmqgiCard
              value={`${result.notesHit}/${result.notesTotal || NOTES_PthkebynroadmqgiER_TRACK}`}
              label="NOTES"
              accent={C.info}
            />
          </View>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.hint}>
          CLEAR AT {Math.round(WIN_ACthkebynroadmqgiCURACY * 100)}% ACCURACY TO UNLOCK THE NEXT
          SONG
        </Text>

        <PrimarythkebynroadmqgiButton
          label="PLAY AGAIN"
          onPress={onPlayAgain}
          Icon={RotateCcw}
          height={60}
          fontSize={19}
        />

        <View style={styles.secondRow}>
          <SecondarythkebynroadmqgiButton
            label="NEXT TRACK"
            onPress={onNextTrack}
            Icon={ListMusic}
            flex
          />
          <SecondarythkebynroadmqgiButton label="MENU" onPress={onMenu} Icon={Home} flex />
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
function ResultthkebynroadmqgiScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function ResultthkebynroadmqgiScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function ResultthkebynroadmqgiScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
