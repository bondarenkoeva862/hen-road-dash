import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  ImageBackground,
  LayoutChangeEvent,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Pause, Zap} from 'lucide-react-native';
import {bgGame} from '../assets';
import {
  BOARD_BORDER,
  BOARD_PAD,
  BOARD_W,
  HIT_LINE_FROM_BOTTOM,
  LANE_GAP,
  LANE_W,
  NOTE_D,
  NOTES_PER_TRACK,
  TrackDef,
  TRAVEL_MS,
} from '../constants/config';
import {C, NUMERIC, theme} from '../constants/theme';
import {ScreenHeader} from '../components/ScreenHeader';
import {PerformanceBar} from '../components/PerformanceBar';
import {StatCard} from '../components/StatCard';
import {Lane} from '../components/Lane';
import {NoteView} from '../components/NoteView';
import {HitFeedback} from '../components/HitFeedback';
import {SecondaryButton} from '../components/SecondaryButton';
import {GlowBackdrop} from '../components/GlowBackdrop';
import {useRhythmEngine} from '../hooks/useRhythmEngine';
import {LaneIndex} from '../game/chart';
import {RoundResult} from '../game/scoring';
import {formatPercent} from '../utils/format';

type Props = {
  track: TrackDef;
  roundKey: number;
  onGameOver: (r: RoundResult) => void;
  onQuit: () => void;
  onReset: () => void;
};

const BAR_W = BOARD_W;

export function GameScreen({
  track,
  roundKey,
  onGameOver,
  onQuit,
  onReset,
}: Props) {
  const [stageH, setStageH] = useState(0);
  const mountedAtRef = useRef(Date.now());
  const {snapshot, pressPad, releasePad} = useRhythmEngine(
    track.seed,
    roundKey,
    onGameOver,
  );

  const onStageLayout = useCallback((e: LayoutChangeEvent) => {
    setStageH(Math.round(e.nativeEvent.layout.height));
  }, []);

  const hitLineY = Math.max(120, stageH - HIT_LINE_FROM_BOTTOM);
  const dimmed = snapshot.phase === 'fault';

  const laneHitKeys = useMemo<number[]>(() => {
    const keys = [0, 0, 0];
    if (snapshot.lastHit) {
      keys[snapshot.lastHit.lane] = snapshot.lastHit.key;
    }
    return keys;
  }, [snapshot.lastHit]);

  const makePressIn = useCallback(
    (lane: LaneIndex) => () => pressPad(lane),
    [pressPad],
  );
  const makePressOut = useCallback(
    (lane: LaneIndex) => () => releasePad(lane),
    [releasePad],
  );

  const accuracyLabel = formatPercent(snapshot.accuracy);
  const showStats = snapshot.notesPassed > 0;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <GlowBackdrop />

      <ScreenHeader
        title={track.title}
        subtitle={`${track.bpm} BPM`}
        rightSlot={
          <View style={styles.comboBadge}>
            <Zap size={16} color={C.accent} strokeWidth={2.8} />
            <Text style={[styles.comboText, NUMERIC]}>x{snapshot.combo}</Text>
          </View>
        }
        leftSlot={
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pause"
            onPress={onQuit}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.pauseBtn}>
            <Pause size={20} color={C.text} strokeWidth={2.4} />
          </Pressable>
        }
      />

      <View style={styles.barRow}>
        <PerformanceBar value01={snapshot.bar01} width={BAR_W} />
      </View>

      <View style={styles.gameArea}>
        <View style={styles.stageFrame}>
          <ImageBackground
            source={bgGame}
            style={StyleSheet.absoluteFill}
            imageStyle={styles.stageImage}
            resizeMode="cover">
            <View style={styles.stageScrim} />
          </ImageBackground>

          <View style={styles.stageContent} onLayout={onStageLayout}>
            <View style={styles.laneRow}>
              {[0, 1, 2].map(i => (
                <Lane
                  key={i}
                  color={theme.lanes[i]}
                  hitKey={laneHitKeys[i]}
                  dimmed={dimmed}
                  onPressIn={makePressIn(i as LaneIndex)}
                  onPressOut={makePressOut(i as LaneIndex)}
                />
              ))}
            </View>

            <View
              pointerEvents="none"
              style={[styles.hitLine, {bottom: HIT_LINE_FROM_BOTTOM}]}>
              <LinearGradient
                colors={theme.gradients.spectrum}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.hitLineFill}
              />
            </View>

            {stageH > 0 ? (
              <View pointerEvents="none" style={StyleSheet.absoluteFill}>
                {snapshot.visible.map(n => (
                  <NoteView
                    key={n.id}
                    laneX={n.lane * (LANE_W + LANE_GAP)}
                    laneW={LANE_W}
                    color={theme.lanes[n.lane]}
                    colorDeep={theme.lanesDeep[n.lane]}
                    tailPx={
                      n.holdMs > 0
                        ? Math.round(
                            (n.holdMs / TRAVEL_MS) *
                              Math.max(1, hitLineY + NOTE_D),
                          )
                        : 0
                    }
                    hitLineY={hitLineY}
                    elapsedMs={Math.max(
                      0,
                      Date.now() - mountedAtRef.current - n.spawnAt,
                    )}
                  />
                ))}
              </View>
            ) : null}

            <View
              pointerEvents="none"
              style={[styles.feedbackSlot, {bottom: HIT_LINE_FROM_BOTTOM + 26}]}>
              {snapshot.phase === 'idle' ? (
                <Text style={styles.getReady}>GET READY</Text>
              ) : (
                <HitFeedback
                  kind={snapshot.feedback}
                  eventKey={snapshot.feedbackKey}
                />
              )}
            </View>

            {dimmed ? (
              <View pointerEvents="none" style={styles.faultSlot}>
                <Text style={styles.faultText}>STAGE FAULT</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>

      <View style={styles.statRow}>
        {showStats ? (
          <View style={styles.statSlot}>
            <StatCard value={accuracyLabel} label="ACCURACY" accent={C.success} />
          </View>
        ) : null}
        {showStats ? (
          <View style={styles.statSlot}>
            <StatCard
              value={`x${snapshot.maxCombo}`}
              label="COMBO"
              accent={C.accent}
            />
          </View>
        ) : null}
        {showStats ? (
          <View style={styles.statSlot}>
            <StatCard
              value={`${snapshot.notesHit}/${NOTES_PER_TRACK}`}
              label="NOTES"
              accent={C.info}
            />
          </View>
        ) : null}
      </View>

      <View style={styles.controls}>
        <Text style={styles.controlsHint}>KEEP THE SERIES ALIVE</Text>
        <SecondaryButton label="RESET ROUND" onPress={onReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  comboText: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
    color: C.text,
  },
  pauseBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.glassFill,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  barRow: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
  },
  gameArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  stageFrame: {
    width: BOARD_W,
    height: '100%',
    borderRadius: theme.radius.lg,
    borderWidth: BOARD_BORDER,
    borderColor: theme.colors.hairline,
    padding: BOARD_PAD,
    overflow: 'hidden',
    backgroundColor: '#10141C',
  },
  stageImage: {
    borderRadius: theme.radius.lg,
  },
  stageScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10,13,20,0.58)',
  },
  stageContent: {
    flex: 1,
  },
  laneRow: {
    flex: 1,
    flexDirection: 'row',
    gap: LANE_GAP,
  },
  hitLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 3,
    shadowColor: C.accent,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 12,
    elevation: 6,
  },
  hitLineFill: {
    flex: 1,
    borderRadius: 2,
  },
  feedbackSlot: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  getReady: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 4,
    color: 'rgba(249,237,211,0.75)',
  },
  faultSlot: {
    position: 'absolute',
    top: 14,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  faultText: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 3,
    color: C.danger,
    backgroundColor: 'rgba(239,82,69,0.14)',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    overflow: 'hidden',
  },
  statRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    minHeight: 82,
  },
  statSlot: {
    flex: 1,
  },
  controls: {
    marginTop: 12,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 18,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderTopWidth: 1,
    borderTopColor: theme.colors.hairline,
    backgroundColor: 'rgba(27,32,48,0.92)',
    alignItems: 'center',
  },
  controlsHint: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textMuted,
    marginBottom: 10,
  },
});
