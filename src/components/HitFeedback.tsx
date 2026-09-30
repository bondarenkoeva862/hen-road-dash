import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {C} from '../constants/theme';
import {Judgement} from '../game/scoring';

type Props = {
  kind: Judgement;
  /** Bumped on every judgement so repeats of the same word replay. */
  eventKey: number;
};

const LABEL: Record<string, string> = {
  perfect: 'PERFECT',
  good: 'GOOD',
  miss: 'MISS',
};

const TINT: Record<string, string> = {
  perfect: C.success,
  good: C.accent,
  miss: C.danger,
};

/** Floating judgement word above the hit line. Opacity + transform only. */
export function HitFeedback({kind, eventKey}: Props) {
  const op = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!kind || eventKey === 0) {
      return;
    }
    op.setValue(1);
    rise.setValue(0);
    Animated.parallel([
      Animated.timing(op, {
        toValue: 0,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: -24,
        duration: 420,
        useNativeDriver: true,
      }),
    ]).start();
  }, [eventKey, kind, op, rise]);

  if (!kind) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, {opacity: op, transform: [{translateY: rise}]}]}>
      <Text style={[styles.text, {color: TINT[kind]}]}>{LABEL[kind]}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    textShadowColor: 'rgba(0,0,0,0.65)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 6,
  },
});
