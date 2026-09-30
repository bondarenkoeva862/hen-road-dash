import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';

type Props = {
  durationMs: number;
  barWidth?: number;
};

/**
 * Determinate progress track for the splash screen. Layout-prop animation,
 * so useNativeDriver is false and this file carries no native-driven value.
 */
export function LoadingBar({durationMs, barWidth = 208}: Props) {
  const grow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(grow, {
      toValue: 1,
      duration: durationMs,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [durationMs, grow]);

  const fillW = grow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, barWidth],
  });

  return (
    <View style={[styles.track, {width: barWidth}]}>
      <Animated.View style={[styles.fillWrap, {width: fillW}]}>
        <LinearGradient
          colors={theme.gradients.spectrum}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.fill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'rgba(249,237,211,0.12)',
  },
  fillWrap: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 3,
  },
});
