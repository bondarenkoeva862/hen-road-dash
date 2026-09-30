import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C, theme} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  accent: string;
};

/**
 * One pill design reused on Game and Result (rule #21). No raster icons —
 * an 8x8 accent dot carries the semantics, the number carries the weight.
 * width:'100%' instead of flex:1 so it never collapses inside a flex:1 slot
 * (rule #19a).
 */
export function StatCard({value, label, accent}: Props) {
  return (
    <View style={[styles.card, {borderColor: accent + '55'}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  value: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: C.textSecondary,
  },
});
