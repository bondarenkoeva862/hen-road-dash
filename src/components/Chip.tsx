import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  label: string;
  color: string;
  active?: boolean;
};

export function Chip({label, color, active}: Props) {
  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor: color + (active ? '26' : '1A'),
          borderColor: color + (active ? '88' : '55'),
        },
      ]}>
      <Text style={[styles.label, {color}]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 40,
    minWidth: 60,
    flexShrink: 1,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
});
