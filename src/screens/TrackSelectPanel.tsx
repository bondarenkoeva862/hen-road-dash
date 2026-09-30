import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {TRACKS, TrackDef} from '../constants/config';
import {C, theme} from '../constants/theme';
import {ScreenHeader} from '../components/ScreenHeader';
import {GlowBackdrop} from '../components/GlowBackdrop';
import {TrackCard} from '../components/TrackCard';
import {PrimaryButton} from '../components/PrimaryButton';

type Props = {
  selected: TrackDef;
  bests: number[];
  onSelect: (t: TrackDef) => void;
  onConfirm: () => void;
  onBack: () => void;
};

export function TrackSelectScreen({
  selected,
  bests,
  onSelect,
  onConfirm,
  onBack,
}: Props) {
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

      <ScreenHeader title="SELECT TRACK" onBack={onBack} />

      <View style={styles.body}>
        {TRACKS.map((t, i) => (
          <TrackCard
            key={t.id}
            track={t}
            accent={theme.lanes[i % 3]}
            best={bests[i] ?? 0}
            active={t.id === selected.id}
            onPress={() => onSelect(t)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <PrimaryButton
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
