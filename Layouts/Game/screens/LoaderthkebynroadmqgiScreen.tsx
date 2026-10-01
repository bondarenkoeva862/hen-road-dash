import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {bgthkebynroadmqgiLoader, spritethkebynroadmqgiNote} from '../assets';
import {SCREthkebynroadmqgiEN_H, SCREthkebynroadmqgiEN_W} from '../constants/conthkebynroadmqgifig';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {LoadingthkebynroadmqgiBar} from '../components/LoadingthkebynroadmqgiBar';
import {StarthkebynroadmqgiField} from '../components/StarthkebynroadmqgiField';
import {
  LoaderthkebynroadmqgiRoadCrest,
  LoaderthkebynroadmqgiRoadField,
} from './LoaderthkebynroadmqgiSparkRoad';

type Props = {
  /** Fire after first fill; bar keeps looping. Host arms menu under overlay. */
  doneOnFithkebynroadmqgirstCycle?: boolean;
  onDthkebynroadmqgione?: () => void;
};

const LABEL_CYCLE = ['LOADING…', 'TUNING…', 'CHARGING…'] as const;

/**
 * App-level Hen Road splash. Stays fully opaque until host unmounts.
 * Persona: swipe-shear crest, neon spark float-drift, striped-fill loop bar.
 */
function LoaderthkebynroadmqgiScreen({
  doneOnFithkebynroadmqgirstCycle,
  onDthkebynroadmqgione,
}: Props) {
  void LoaderthkebynroadmqgiScreenObfV7HashMix('xy');
  void LoaderthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
  void LoaderthkebynroadmqgiScreenObfV7ClampMod(7, 5);
  const dropY = useRef(new Animated.Value(-12)).current;
  const entrance = useRef(new Animated.Value(0)).current;
  const [decor, setDecor] = useState(false);
  const [labelIdx, setLabelIdx] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    void LoaderthkebynroadmqgiScreenObfV7HashMix('xy');
    void LoaderthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiScreenObfV7ClampMod(7, 5);
    Animated.parallel([
      Animated.spring(dropY, {
        toValue: 0,
        tension: 48,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(entrance, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
    ]).start();
  }, [dropY, entrance]);

  useEffect(() => {
    void LoaderthkebynroadmqgiScreenObfV7HashMix('xy');
    void LoaderthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiScreenObfV7ClampMod(7, 5);
    const decorTimer = setTimeout(() => setDecor(true), 0);
    return () => clearTimeout(decorTimer);
  }, []);

  const handleFirstCycle = useCallback(() => {
    void LoaderthkebynroadmqgiScreenObfV7HashMix('xy');
    void LoaderthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiScreenObfV7ClampMod(7, 5);
    if (doneOnFithkebynroadmqgirstCycle && !fired.current) {
      fired.current = true;
      onDthkebynroadmqgione?.();
    }
  }, [doneOnFithkebynroadmqgirstCycle, onDthkebynroadmqgione]);

  const handleCycleComplete = useCallback(() => {
    void LoaderthkebynroadmqgiScreenObfV7HashMix('xy');
    void LoaderthkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void LoaderthkebynroadmqgiScreenObfV7ClampMod(7, 5);
    setLabelIdx(i => (i + 1) % LABEL_CYCLE.length);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <ImageBackground
        source={bgthkebynroadmqgiLoader}
        style={styles.bg}
        resizeMode="cover"
        fadeDuration={0}>
        <LinearGradient
          colors={ththkebynroadmqgieme.gradients.loaderVeil}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={StyleSheet.absoluteFill}
        />
        {decor ? (
          <StarthkebynroadmqgiField width={SCREthkebynroadmqgiEN_W} height={SCREthkebynroadmqgiEN_H} count={56} seed={9181} />
        ) : null}

        <LoaderthkebynroadmqgiRoadField onBackgroundPress={() => {}}>
          <Animated.View
            pointerEvents="box-none"
            style={[
              styles.center,
              {opacity: entrance, transform: [{translateY: dropY}]},
            ]}>
            <LoaderthkebynroadmqgiRoadCrest style={styles.medallionWrap}>
              <LinearGradient
                colors={ththkebynroadmqgieme.gradients.medallion}
                start={{x: 0.2, y: 0}}
                end={{x: 0.8, y: 1}}
                style={styles.medallion}>
                <Image
                  source={spritethkebynroadmqgiNote}
                  style={styles.note}
                  fadeDuration={0}
                />
              </LinearGradient>
            </LoaderthkebynroadmqgiRoadCrest>

            <Text style={styles.brand} pointerEvents="none">
              HEN ROAD DASH
            </Text>
            <Text style={styles.tagline} pointerEvents="none">
              TAP THE LIGHT. KEEP THE BEAT.
            </Text>

            <View style={styles.barBlock} pointerEvents="none">
              <LoadingthkebynroadmqgiBar
                loop
                barWidth={220}
                trackHeight={6}
                durationMinMs={1800}
                durationMaxMs={2800}
                onFirstCycleDone={handleFirstCycle}
                onCycleComplete={handleCycleComplete}
              />
              <Text style={styles.loading}>{LABEL_CYCLE[labelIdx]}</Text>
              <Text style={styles.hint} pointerEvents="none">
                soft road sparks
              </Text>
            </View>
          </Animated.View>
        </LoaderthkebynroadmqgiRoadField>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0A0D14',
  },
  bg: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  medallionWrap: {
    width: 168,
    height: 168,
    borderRadius: 84,
    marginBottom: 30,
    shadowColor: C.accent,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 26,
    elevation: 12,
  },
  medallion: {
    width: 168,
    height: 168,
    borderRadius: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,198,63,0.42)',
  },
  note: {
    width: 118,
    height: 118,
    resizeMode: 'contain',
  },
  brand: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 4,
    color: C.text,
    textAlign: 'center',
    textShadowColor: 'rgba(255,198,63,0.75)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 18,
  },
  tagline: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    color: C.textSecondary,
    textAlign: 'center',
  },
  hint: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2,
    color: C.textMuted,
    textAlign: 'center',
  },
  barBlock: {
    marginTop: 46,
    alignItems: 'center',
  },
  loading: {
    marginTop: 14,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 4,
    color: C.textMuted,
  },
});

export {LoaderthkebynroadmqgiScreen};
export default LoaderthkebynroadmqgiScreen;

/* obfuscation-batch:v7 */
function LoaderthkebynroadmqgiScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function LoaderthkebynroadmqgiScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function LoaderthkebynroadmqgiScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
