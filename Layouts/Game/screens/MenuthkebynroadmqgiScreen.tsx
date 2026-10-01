import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  HelpCircle,
  ListMusic,
  Play,
  Star,
  Volume2,
  VolumeX,
} from 'lucide-react-native';
import {bgthkebynroadmqgiMenu} from '../assets';
import {SCREthkebynroadmqgiEN_H, TrackthkebynroadmqgiDef} from '../constants/conthkebynroadmqgifig';
import {C, NUMthkebynroadmqgiERIC, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {Chthkebynroadmqgiip} from '../components/Chthkebynroadmqgiip';
import {PrimarythkebynroadmqgiButton} from '../components/PrimarythkebynroadmqgiButton';
import {SecondarythkebynroadmqgiButton} from '../components/SecondarythkebynroadmqgiButton';

type Props = {
  track: TrackthkebynroadmqgiDef;
  best: number;
  onPlay: () => void;
  onTracks: () => void;
  onHowTo: () => void;
};

const ART_H = Math.round(SCREthkebynroadmqgiEN_H * 0.58);

export function MenuthkebynroadmqgiScreen({track, best, onPlay, onTracks, onHowTo}: Props) {
  void MenuthkebynroadmqgiScreenObfV7HashMix('xy');
  void MenuthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
  void MenuthkebynroadmqgiScreenObfV7ClampMod(7, 5);
  const [sound, setSound] = useState(true);
  const slide = useRef(new Animated.Value(40)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void MenuthkebynroadmqgiScreenObfV7HashMix('xy');
    void MenuthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void MenuthkebynroadmqgiScreenObfV7ClampMod(7, 5);
    Animated.timing(slide, {
      toValue: 0,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.timing(fade, {
      toValue: 1,
      duration: 420,
      useNativeDriver: true,
    }).start();
  }, [fade, slide]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ImageBackground source={bgthkebynroadmqgiMenu} style={styles.art} resizeMode="cover">
        <LinearGradient
          colors={ththkebynroadmqgieme.gradients.menuVeil}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
      </ImageBackground>

      <View style={styles.topBar} pointerEvents="box-none">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Sound"
          onPress={() => setSound(v => !v)}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          style={styles.soundBtn}>
          {sound ? (
            <Volume2 size={20} color={C.accent} strokeWidth={2.4} />
          ) : (
            <VolumeX size={20} color={C.textSecondary} strokeWidth={2.4} />
          )}
        </Pressable>

        <View style={styles.bestBadge}>
          <Star size={16} color={C.accent} strokeWidth={2.6} />
          <Text style={[styles.bestText, NUMthkebynroadmqgiERIC]}>BEST {best}%</Text>
        </View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.sheet,
          {opacity: fade, transform: [{translateY: slide}]},
        ]}>
        <LinearGradient
          colors={ththkebynroadmqgieme.gradients.sheet}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
        <LinearGradient
          colors={ththkebynroadmqgieme.gradients.spectrum}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.chromeStrip}
          pointerEvents="none"
        />

        <Text style={styles.brand}>HEN ROAD DASH</Text>
        <Text style={styles.tagline}>THREE PADS. ONE SONG. STAY ON BEAT.</Text>

        <View style={styles.chipRow}>
          <Chthkebynroadmqgiip label={track.title} color={C.info} active />
          <Chthkebynroadmqgiip label={`${track.bpm} BPM`} color={C.info} />
          <Chthkebynroadmqgiip label={track.duration} color={C.info} />
        </View>

        <Text style={styles.hint}>ONE TAP PER MARK {'·'} HOLD THE LONG ONES</Text>

        <PrimarythkebynroadmqgiButton label="PLAY NOW" onPress={onPlay} Icon={Play} height={62} />

        <View style={styles.secondRow}>
          <SecondarythkebynroadmqgiButton label="TRACKS" onPress={onTracks} Icon={ListMusic} flex />
          <SecondarythkebynroadmqgiButton label="HOW TO WIN" onPress={onHowTo} Icon={HelpCircle} flex />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  art: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: ART_H,
  },
  topBar: {
    position: 'absolute',
    top: 52,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  soundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10,13,20,0.55)',
    borderWidth: 1,
    borderColor: 'rgba(255,198,63,0.35)',
  },
  bestBadge: {
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(10,13,20,0.55)',
    borderWidth: 1,
    borderColor: 'rgba(255,198,63,0.35)',
  },
  bestText: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.6,
    lineHeight: 16,
    color: C.text,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderTopColor: ththkebynroadmqgieme.colors.hairline,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -8},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 16,
  },
  chromeStrip: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  brand: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 2,
    color: C.text,
    textShadowColor: 'rgba(255,198,63,0.6)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 12,
  },
  tagline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textSecondary,
  },
  chipRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8,
  },
  hint: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textMuted,
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
function MenuthkebynroadmqgiScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function MenuthkebynroadmqgiScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function MenuthkebynroadmqgiScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
