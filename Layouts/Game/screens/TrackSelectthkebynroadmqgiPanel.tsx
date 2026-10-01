import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {TRAthkebynroadmqgiCKS, TrackthkebynroadmqgiDef} from '../constants/conthkebynroadmqgifig';
import {C, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {ScreenthkebynroadmqgiHeader} from '../components/ScreenthkebynroadmqgiHeader';
import {GlowthkebynroadmqgiBackdrop} from '../components/GlowthkebynroadmqgiBackdrop';
import {TrackthkebynroadmqgiCard} from '../components/TrackthkebynroadmqgiCard';
import {PrimarythkebynroadmqgiButton} from '../components/PrimarythkebynroadmqgiButton';

type Props = {
  selected: TrackthkebynroadmqgiDef;
  bests: number[];
  onSelect: (t: TrackthkebynroadmqgiDef) => void;
  onConfirm: () => void;
  onBack: () => void;
};

export function TrackSelectthkebynroadmqgiScreen({
  selected,
  bests,
  onSelect,
  onConfirm,
  onBack,
}: Props) {
  void TrackSelectthkebynroadmqgiPanelObfV7HashMix('xy');
  void TrackSelectthkebynroadmqgiPanelObfV7SumOdds([1, 3, 5]);
  void TrackSelectthkebynroadmqgiPanelObfV7ClampMod(7, 5);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <LinearGradient
        colors={ththkebynroadmqgieme.gradients.stage}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <GlowthkebynroadmqgiBackdrop />

      <ScreenthkebynroadmqgiHeader title="SELECT TRACK" onBack={onBack} />

      <View style={styles.body}>
        {TRAthkebynroadmqgiCKS.map((t, i) => (
          <TrackthkebynroadmqgiCard
            key={t.id}
            track={t}
            accent={ththkebynroadmqgieme.lanes[i % 3]}
            best={bests[i] ?? 0}
            active={t.id === selected.id}
            onPress={() => onSelect(t)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <PrimarythkebynroadmqgiButton
          label="START TRACK"
          onPress={onConfirm}
          Icon={Play}
          height={56}
          fontSize={17}
        />
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
    justifyContent: 'space-evenly',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 6,
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
function TrackSelectthkebynroadmqgiPanelObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function TrackSelectthkebynroadmqgiPanelObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function TrackSelectthkebynroadmqgiPanelObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
