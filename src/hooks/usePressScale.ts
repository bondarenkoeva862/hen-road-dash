import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback for a Pressable PARENT (rule #8): the Pressable owns the
 * touch, the Animated.View lives inside it. Only transform is animated, so
 * useNativeDriver stays valid.
 */
export function usePressScale(down: number = 0.95) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: down,
      tension: 120,
      friction: 9,
      useNativeDriver: true,
    }).start();
  }, [down, scale]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 120,
      friction: 9,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}
