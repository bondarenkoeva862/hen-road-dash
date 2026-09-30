import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {C, theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  label: string;
  onPress: () => void;
  /** lucide-react-native icon component. Rendered at exactly 24x24. */
  Icon?: React.ComponentType<any>;
  colors?: string[];
  height?: number;
  fontSize?: number;
  glow?: string;
};

const ICON = 24;

export function PrimaryButton({
  label,
  onPress,
  Icon,
  colors,
  height = 62,
  fontSize = 20,
  glow,
}: Props) {
  const press = usePressScale(0.95);
  const fill = colors ?? theme.gradients.cta;
  const shadow = glow ?? C.accent;

  return (
    <Pressable
      accessible={false}
      onPress={onPress}
      onPressIn={press.onPressIn}
      onPressOut={press.onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height, width: '100%'}]}>
      <Animated.View
        style={[
          styles.anim,
          {height, shadowColor: shadow, transform: [{scale: press.scale}]},
        ]}>
        <LinearGradient
          colors={fill}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.fill, {height}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={C.bg} strokeWidth={2.6} /> : null}
            <Text style={[styles.label, {fontSize}]} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: theme.radius.lg,
  },
  anim: {
    width: '100%',
    borderRadius: theme.radius.lg,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 10,
  },
  fill: {
    width: '100%',
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(249,237,211,0.28)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    lineHeight: ICON,
    color: C.bg,
    fontWeight: '900',
    letterSpacing: 3,
  },
});
