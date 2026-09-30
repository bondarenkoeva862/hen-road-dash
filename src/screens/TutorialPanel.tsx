import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Hand, Target, Timer} from 'lucide-react-native';
import {WIN_ACCURACY} from '../constants/config';
import {C, theme} from '../constants/theme';
import {ScreenHeader} from '../components/ScreenHeader';
import {GlowBackdrop} from '../components/GlowBackdrop';
import {PrimaryButton} from '../components/PrimaryButton';
import {SecondaryButton} from '../components/SecondaryButton';

type Props = {
  onStart: () => void;
  onBack: () => void;
};

const DEMO_H = 96;

export function TutorialScreen({onStart, onBack}: Props) {
  const dropShort = useRef(new Animated.Value(0)).current;
  const dropLong = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // One-shot demos only — nothing on this screen repeats forever.
    Animated.timing(dropShort, {
      toValue: DEMO_H - 30,
      duration: 900,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
    Animated.timing(dropLong, {
      toValue: DEMO_H - 40,
      duration: 1150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [dropLong, dropShort]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <LinearGradient
        colors={theme.gradients.stage}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <GlowBackdrop />

      <ScreenHeader title="HOW TO WIN" onBack={onBack} />

      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.demo}>
            <View style={[styles.demoLane, {borderColor: C.accent + '55'}]} />
            <Animated.View
              pointerEvents="none"
              style={[
                styles.mark,
                {backgroundColor: C.accent, transform: [{translateY: dropShort}]},
              ]}
            />
            <View style={[styles.demoLine, {backgroundColor: C.accent}]} />
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHead}>
              <Hand size={20} color={C.accent} strokeWidth={2.4} />
              <Text style={[styles.cardTitle, {color: C.accent}]}>SHORT MARK</Text>
            </View>
            <Text style={styles.cardBody}>
              TAP THE PAD WHEN THE MARK MEETS THE LINE
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.demo}>
            <View style={[styles.demoLane, {borderColor: C.info + '55'}]} />
            <Animated.View
              pointerEvents="none"
              style={[
                styles.capsule,
                {backgroundColor: C.info, transform: [{translateY: dropLong}]},
              ]}
            />
            <View style={[styles.demoLine, {backgroundColor: C.info}]} />
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHead}>
              <Timer size={20} color={C.info} strokeWidth={2.4} />
              <Text style={[styles.cardTitle, {color: C.info}]}>LONG MARK</Text>
            </View>
            <Text style={styles.cardBody}>
              HOLD THE PAD UNTIL THE TAIL RUNS OUT
            </Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <Target size={20} color={C.success} strokeWidth={2.4} />
          <Text style={styles.goalText}>
            FINISH AT {Math.round(WIN_ACCURACY * 100)}% OR BETTER TO CLEAR THE
            SONG
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerHint}>
          MISS FIVE IN A ROW AND THE STAGE FAULTS
        </Text>
        <PrimaryButton
          label="START PRACTICE"
          onPress={onStart}
          height={56}
          fontSize={17}
        />
        <View style={styles.backRow}>
          <SecondaryButton label="MENU" onPress={onBack} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 14,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.hairline,
  },
  demo: {
    width: 64,
    height: DEMO_H,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#10141C',
    alignItems: 'center',
  },
  demoLane: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    borderWidth: 1,
  },
  mark: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginTop: 4,
    borderWidth: 2,
    borderColor: 'rgba(249,237,211,0.6)',
  },
  capsule: {
    width: 20,
    height: 52,
    borderRadius: 10,
    marginTop: 4,
    borderWidth: 2,
    borderColor: 'rgba(249,237,211,0.6)',
  },
  demoLine: {
    position: 'absolute',
    bottom: 16,
    left: 6,
    right: 6,
    height: 3,
    borderRadius: 2,
  },
  cardText: {
    flex: 1,
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 20,
  },
  cardBody: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19,
    color: C.text,
  },
  goalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(134,202,74,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(134,202,74,0.28)',
  },
  goalText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    lineHeight: 18,
    color: C.success,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footerHint: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textMuted,
    textAlign: 'center',
    marginBottom: 12,
  },
  backRow: {
    marginTop: 10,
  },
});
