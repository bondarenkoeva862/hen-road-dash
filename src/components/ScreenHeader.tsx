import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import {C, theme} from '../constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/** Shared header for every non-menu screen. paddingTop 44 clears the status bar (rule #6). */
export function ScreenHeader({
  title,
  subtitle,
  onBack,
  leftSlot,
  rightSlot,
}: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        {leftSlot ??
          (onBack ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Back"
              onPress={onBack}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              style={styles.iconBtn}>
              <ChevronLeft size={22} color={C.text} strokeWidth={2.4} />
            </Pressable>
          ) : null)}
      </View>

      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.sideRight}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72 + 44,
    paddingTop: 44,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.scrim,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.hairline,
  },
  side: {
    width: 78,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideRight: {
    width: 78,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.glassFill,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 3,
    color: C.text,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textMuted,
  },
});
