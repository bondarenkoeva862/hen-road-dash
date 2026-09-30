import React, {useEffect, useRef, useState} from 'react';
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
import {bgLoader, spriteNote} from '../assets';
import {
  LOADER_BAR_ANIM_MS,
  LOADER_DURATION_MS,
  SCREEN_H,
  SCREEN_W,
} from '../constants/config';
import {C, theme} from '../constants/theme';
import {LoadingBar} from '../components/LoadingBar';
import {StarField} from '../components/StarField';

type Props = {
  onDone: () => void;
};

/**
 * Brand card. Non-interactive by design: it is visually far darker than the
 * menu (veil 0.88-0.95 + hall-dust texture) so the capture gate can always
 * tell the two apart.
 */
export function LoaderScreen({onDone}: Props) {
  const rise = useRef(new Animated.Value(0.82)).current;
  const glow = useRef(new Animated.Value(0.75)).current;
  const fade = useRef(new Animated.Value(0)).current;
  // The system splash stays up until the FIRST JS frame draws, so that frame
  // must stay cheap. StarField is 120 native SVG nodes plus react-native-svg
  // init - by far the heaviest item on the cold-start path. Mount it one tick
  // later: on a loaded emulator the capture agent was still photographing the
  // system splash instead of this screen.
  const [decor, setDecor] = useState(false);

  useEffect(() => {
    Animated.spring(rise, {
      toValue: 1,
      tension: 42,
      friction: 7,
      useNativeDriver: true,
    }).start();
    Animated.timing(fade, {
      toValue: 1,
      duration: 520,
      useNativeDriver: true,
    }).start();
    // Single-shot pulse. No perpetual repeats anywhere: they wedge uiautomator.
    Animated.timing(glow, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, [fade, glow, rise]);

  useEffect(() => {
    const decorTimer = setTimeout(() => setDecor(true), 0);
    const t = setTimeout(onDone, LOADER_DURATION_MS);
    return () => {
      clearTimeout(decorTimer);
      clearTimeout(t);
    };
  }, [onDone]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <ImageBackground
        source={bgLoader}
        style={styles.bg}
        resizeMode="cover"
        fadeDuration={0}>
        <LinearGradient
          colors={theme.gradients.loaderVeil}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={StyleSheet.absoluteFill}
        />
        {decor ? (
          <StarField width={SCREEN_W} height={SCREEN_H} count={56} seed={9181} />
        ) : null}

        <Animated.View pointerEvents="none" style={[styles.center, {opacity: fade}]}>
          <Animated.View
            pointerEvents="none"
            style={[
              styles.medallionWrap,
              {opacity: glow, transform: [{scale: rise}]},
            ]}>
            <LinearGradient
              colors={theme.gradients.medallion}
              start={{x: 0.2, y: 0}}
              end={{x: 0.8, y: 1}}
              style={styles.medallion}>
              <Image source={spriteNote} style={styles.note} fadeDuration={0} />
            </LinearGradient>
          </Animated.View>

          <Text style={styles.brand}>HEN ROAD DASH</Text>
          <Text style={styles.tagline}>TAP THE LIGHT. KEEP THE BEAT.</Text>

          <View style={styles.barBlock}>
            <LoadingBar durationMs={LOADER_BAR_ANIM_MS} barWidth={208} />
            <Text style={styles.loading}>LOADING...</Text>
          </View>
        </Animated.View>
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
