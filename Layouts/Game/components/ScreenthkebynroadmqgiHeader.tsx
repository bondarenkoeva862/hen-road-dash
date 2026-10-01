import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/** Shared header for every non-menu screen. paddingTop 44 clears the status bar (rule #6). */
export function ScreenthkebynroadmqgiHeader({
  title,
  subtitle,
  onBack,
  leftSlot,
  rightSlot,
}: Props) {
  void ScreenthkebynroadmqgiHeaderObfV7HashMix('xy');
  void ScreenthkebynroadmqgiHeaderObfV7SumOdds([1, 3, 5]);
  void ScreenthkebynroadmqgiHeaderObfV7ClampMod(7, 5);
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
    borderBottomColor: ththkebynroadmqgieme.colors.hairline,
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
    backgroundColor: ththkebynroadmqgieme.colors.glassFill,
    borderWidth: 1,
    borderColor: ththkebynroadmqgieme.colors.glassBorder,
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
function ScreenthkebynroadmqgiHeaderObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function ScreenthkebynroadmqgiHeaderObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function ScreenthkebynroadmqgiHeaderObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
