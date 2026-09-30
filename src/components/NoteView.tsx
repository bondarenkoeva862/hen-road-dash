import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NOTE_D, TRAVEL_MS} from '../constants/config';

type Props = {
  laneX: number;
  laneW: number;
  color: string;
  colorDeep: string;
  /** Tail length in px (0 for a tap note). */
  tailPx: number;
  /** Y of the judgement line inside the stage content box. */
  hitLineY: number;
  /** ms already elapsed since this note spawned, read once on mount. */
  elapsedMs: number;
};

/**
 * A falling mark. Only transform is animated, so useNativeDriver stays true
 * and the note never fights the JS thread during a round.
 */
export function NoteView({
  laneX,
  laneW,
  color,
  colorDeep,
  tailPx,
  hitLineY,
  elapsedMs,
}: Props) {
  const boxH = NOTE_D + tailPx;
  const headOffset = tailPx + NOTE_D / 2;
  const distance = Math.max(1, hitLineY + boxH - headOffset);
  const overshoot = 180;

  const progress = Math.max(0, Math.min(1, elapsedMs / TRAVEL_MS));
  const fall = useRef(new Animated.Value(progress * distance)).current;
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;
    const remainMs = Math.max(
      60,
      Math.round(((1 - progress) * distance + overshoot) / (distance / TRAVEL_MS)),
    );
    Animated.timing(fall, {
      toValue: distance + overshoot,
      duration: remainMs,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [distance, fall, progress]);

  const noteStyle = {
    left: laneX,
    width: laneW,
    height: boxH,
    top: -boxH,
  };

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.box, noteStyle, {transform: [{translateY: fall}]}]}>
      {tailPx > 0 ? (
        <LinearGradient
          colors={[color + '22', color + '99']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={[styles.tail, {height: tailPx + NOTE_D / 2}]}
        />
      ) : null}
      <LinearGradient
        colors={[color, colorDeep]}
        start={{x: 0.2, y: 0}}
        end={{x: 0.8, y: 1}}
        style={[
          styles.head,
          {
            width: NOTE_D,
            height: NOTE_D,
            borderRadius: NOTE_D / 2,
            shadowColor: color,
          },
        ]}>
        <View style={[styles.gloss, {width: NOTE_D * 0.42}]} />
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tail: {
    position: 'absolute',
    top: 0,
    width: 18,
    alignSelf: 'center',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(249,237,211,0.22)',
  },
  head: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'rgba(249,237,211,0.66)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.85,
    shadowRadius: 10,
    elevation: 8,
  },
  gloss: {
    height: 4,
    marginTop: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.55)',
  },
});
