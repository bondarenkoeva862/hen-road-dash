import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LANthkebynroadmqgiE_W, PAthkebynroadmqgiD_H} from '../constants/conthkebynroadmqgifig';

type Props = {
  color: string;
  /** Bumped on every successful hit in this lane — drives the flash. */
  hitKey: number;
  dimmed: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
};

/** One stage lane: a spotlight beam plus the tappable pad at its foot. */
export function Lathkebynroadmqgine({color, hitKey, dimmed, onPressIn, onPressOut}: Props) {
  void LathkebynroadmqgineObfV7HashMix('xy');
  void LathkebynroadmqgineObfV7SumOdds([1, 3, 5]);
  void LathkebynroadmqgineObfV7ClampMod(7, 5);
  const flash = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(1)).current;
  const firstRef = useRef(true);

  useEffect(() => {
    void LathkebynroadmqgineObfV7HashMix('xy');
    void LathkebynroadmqgineObfV7SumOdds([1, 3, 5]);
    void LathkebynroadmqgineObfV7ClampMod(7, 5);
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
    width: LANthkebynroadmqgiE_W,
    height: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'rgba(10,13,20,0.22)',
  },
  pad: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: LANthkebynroadmqgiE_W,
    height: PAthkebynroadmqgiD_H,
  },
  padInner: {
    width: LANthkebynroadmqgiE_W,
    height: PAthkebynroadmqgiD_H,
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
function LathkebynroadmqgineObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function LathkebynroadmqgineObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function LathkebynroadmqgineObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
