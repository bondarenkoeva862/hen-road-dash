import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';

type Props = {
  value01: number;
  width: number;
};

/**
 * Stage-performance meter. Width is a layout prop, so this component animates
 * with useNativeDriver:false ONLY and never mixes in a native-driven value.
 * The low-health colour swap is a static conditional style, not a colour
 * interpolation (mixed-driver crash guard).
 */
export function PerformanceBar({value01, width}: Props) {
  const grow = useRef(new Animated.Value(Math.max(0, Math.min(1, value01)))).current;

  useEffect(() => {
    Animated.timing(grow, {
      toValue: Math.max(0, Math.min(1, value01)),
      duration: 220,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [grow, value01]);

  const fillW = grow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.max(1, width)],
  });

  const low = value01 < 0.25;
  const colors = low ? theme.gradients.barLow : theme.gradients.barGood;

  return (
    <View style={[styles.track, {width}]}>
      <Animated.View style={[styles.fillWrap, {width: fillW}]}>
        <LinearGradient
          colors={colors}
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
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: 'rgba(249,237,211,0.10)',
  },
  fillWrap: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 4,
  },
});
