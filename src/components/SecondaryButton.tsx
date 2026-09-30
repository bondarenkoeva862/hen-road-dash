import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {C, theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  label: string;
  onPress: () => void;
  /** lucide-react-native icon component. Rendered at exactly 24x24. */
  Icon?: React.ComponentType<any>;
  tint?: string;
  flex?: boolean;
};

const ICON = 24;

export function SecondaryButton({label, onPress, Icon, tint, flex}: Props) {
  const press = usePressScale(0.96);
  const color = tint ?? C.text;

  return (
    <Pressable
      accessible={false}
      onPress={onPress}
      onPressIn={press.onPressIn}
      onPressOut={press.onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, flex ? styles.flexed : styles.full]}>
      <Animated.View
        style={[styles.anim, {transform: [{scale: press.scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={color} strokeWidth={2.2} /> : null}
          <Text style={[styles.label, {color}]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: 48,
    borderRadius: 14,
  },
  full: {
    width: '100%',
  },
  flexed: {
    flex: 1,
  },
  anim: {
    width: '100%',
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.glassFill,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    lineHeight: ICON,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
