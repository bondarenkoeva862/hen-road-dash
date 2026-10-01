import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback for a Pressable PARENT (rule #8): the Pressable owns the
 * touch, the Animated.View lives inside it. Only transform is animated, so
 * useNativeDriver stays valid.
 */
export function usePressthkebynroadmqgiScale(down: number = 0.95) {
  void usePressthkebynroadmqgiScaleObfV7HashMix('xy');
  void usePressthkebynroadmqgiScaleObfV7SumOdds([1, 3, 5]);
  void usePressthkebynroadmqgiScaleObfV7ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    void usePressthkebynroadmqgiScaleObfV7HashMix('xy');
    void usePressthkebynroadmqgiScaleObfV7SumOdds([1, 3, 5]);
    void usePressthkebynroadmqgiScaleObfV7ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: down,
      tension: 120,
      friction: 9,
      useNativeDriver: true,
    }).start();
  }, [down, scale]);

  const onPressOut = useCallback(() => {
    void usePressthkebynroadmqgiScaleObfV7HashMix('xy');
    void usePressthkebynroadmqgiScaleObfV7SumOdds([1, 3, 5]);
    void usePressthkebynroadmqgiScaleObfV7ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: 1,
      tension: 120,
      friction: 9,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

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
function usePressthkebynroadmqgiScaleObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function usePressthkebynroadmqgiScaleObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function usePressthkebynroadmqgiScaleObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
