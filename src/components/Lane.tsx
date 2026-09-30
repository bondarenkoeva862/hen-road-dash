import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LANE_W, PAD_H} from '../constants/config';

type Props = {
  color: string;
  /** Bumped on every successful hit in this lane — drives the flash. */
  hitKey: number;
  dimmed: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
};

/** One stage lane: a spotlight beam plus the tappable pad at its foot. */
export function Lane({color, hitKey, dimmed, onPressIn, onPressOut}: Props) {
  const flash = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(1)).current;
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    flash.setValue(1);
    Animated.timing(flash, {
      toValue: 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.spring(pop, {
        toValue: 1.06,
        tension: 220,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.spring(pop, {
        toValue: 1,
        tension: 200,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, [flash, hitKey, pop]);

  return (
    <View style={styles.lane}>
      <LinearGradient
        colors={['rgba(255,255,255,0.00)', color + '1F']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <Pressable
        accessible={false}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={{top: 8, bottom: 8, left: 4, right: 4}}
        style={styles.pad}>
        <Animated.View
          style={[
            styles.padInner,
            {
              borderColor: color + (dimmed ? '33' : '99'),
              backgroundColor: color + (dimmed ? '0D' : '1F'),
              shadowColor: color,
              transform: [{scale: pop}],
            },
          ]}>
          <Animated.View
            style={[
              styles.padFlash,
              {backgroundColor: color, opacity: flash},
            ]}
          />
          <Text style={styles.padLabel}>TAP</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  lane: {
    width: LANE_W,
    height: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'rgba(10,13,20,0.22)',
  },
  pad: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: LANE_W,
    height: PAD_H,
  },
  padInner: {
    width: LANE_W,
    height: PAD_H,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 6,
  },
  padFlash: {
    ...StyleSheet.absoluteFillObject,
  },
  padLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
    lineHeight: 16,
    color: 'rgba(249,237,211,0.72)',
  },
});
