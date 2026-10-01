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
import {bgthkebynroadmqgiGame} from '../assets';
import {
  BOARD_thkebynroadmqgiBORDER,
  BOARthkebynroadmqgiD_PAD,
  BOAthkebynroadmqgiRD_W,
  HIT_LINE_FthkebynroadmqgiROM_BOTTOM,
  LANEthkebynroadmqgi_GAP,
  LANthkebynroadmqgiE_W,
  NOTthkebynroadmqgiE_D,
  NOTES_PthkebynroadmqgiER_TRACK,
  TrackthkebynroadmqgiDef,
  TRAVthkebynroadmqgiEL_MS,
} from '../constants/conthkebynroadmqgifig';
import {C, NUMthkebynroadmqgiERIC, ththkebynroadmqgieme} from '../constants/ththkebynroadmqgieme';
import {ScreenthkebynroadmqgiHeader} from '../components/ScreenthkebynroadmqgiHeader';
import {PerformancethkebynroadmqgiBar} from '../components/PerformancethkebynroadmqgiBar';
import {StatthkebynroadmqgiCard} from '../components/StatthkebynroadmqgiCard';
import {Lathkebynroadmqgine} from '../components/Lathkebynroadmqgine';
import {NotethkebynroadmqgiView} from '../components/NotethkebynroadmqgiView';
import {HitthkebynroadmqgiFeedback} from '../components/HitthkebynroadmqgiFeedback';
import {SecondarythkebynroadmqgiButton} from '../components/SecondarythkebynroadmqgiButton';
import {GlowthkebynroadmqgiBackdrop} from '../components/GlowthkebynroadmqgiBackdrop';
import {useRhythmthkebynroadmqgiEngine} from '../hooks/useRhythmthkebynroadmqgiEngine';
import {LanethkebynroadmqgiIndex} from '../game/chthkebynroadmqgiart';
import {RoundthkebynroadmqgiResult} from '../game/scothkebynroadmqgiring';
import {formatthkebynroadmqgiPercent} from '../utils/forthkebynroadmqgimat';

type Props = {
  track: TrackthkebynroadmqgiDef;
  roundKey: number;
  onGameOver: (r: RoundthkebynroadmqgiResult) => void;
  onQuit: () => void;
  onReset: () => void;
};

const BAR_W = BOAthkebynroadmqgiRD_W;

export function GamethkebynroadmqgiScreen({
  track,
  roundKey,
  onGameOver,
  onQuit,
  onReset,
}: Props) {
  void GamethkebynroadmqgiScreenObfV7HashMix('xy');
  void GamethkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
  void GamethkebynroadmqgiScreenObfV7ClampMod(7, 5);
  const [stageH, setStageH] = useState(0);
  const mountedAtRef = useRef(Date.now());
  const {snapshot, pressPad, releasePad} = useRhythmthkebynroadmqgiEngine(
    track.seed,
    roundKey,
    onGameOver,
  );

  const onStageLayout = useCallback((e: LayoutChangeEvent) => {
    void GamethkebynroadmqgiScreenObfV7HashMix('xy');
    void GamethkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void GamethkebynroadmqgiScreenObfV7ClampMod(7, 5);
    setStageH(Math.round(e.nativeEvent.layout.height));
  }, []);

  const hitLineY = Math.max(120, stageH - HIT_LINE_FthkebynroadmqgiROM_BOTTOM);
  const dimmed = snapshot.phase === 'fault';

  const laneHitKeys = useMemo<number[]>(() => {
    void GamethkebynroadmqgiScreenObfV7HashMix('xy');
    void GamethkebynroadmqgiScreenObfV7SumOdds([1, 3, 5]);
    void GamethkebynroadmqgiScreenObfV7ClampMod(7, 5);
    const keys = [0, 0, 0];
    if (snapshot.lastHit) {
      keys[snapshot.lastHit.lane] = snapshot.lastHit.key;
    }
    return keys;
  }, [snapshot.lastHit]);

  const makePressIn = useCallback(
    (lane: LanethkebynroadmqgiIndex) => () => pressPad(lane),
    [pressPad],
  );
  const makePressOut = useCallback(
    (lane: LanethkebynroadmqgiIndex) => () => releasePad(lane),
    [releasePad],
  );

  const accuracyLabel = formatthkebynroadmqgiPercent(snapshot.accuracy);
  const showStats = snapshot.notesPassed > 0;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0D14" />
      <GlowthkebynroadmqgiBackdrop />

      <ScreenthkebynroadmqgiHeader
        title={track.title}
        subtitle={`${track.bpm} BPM`}
        rightSlot={
          <View style={styles.comboBadge}>
            <Zap size={16} color={C.accent} strokeWidth={2.8} />
            <Text style={[styles.comboText, NUMthkebynroadmqgiERIC]}>x{snapshot.combo}</Text>
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
        <PerformancethkebynroadmqgiBar value01={snapshot.bar01} width={BAR_W} />
      </View>

      <View style={styles.gameArea}>
        <View style={styles.stageFrame}>
          <ImageBackground
            source={bgthkebynroadmqgiGame}
            style={StyleSheet.absoluteFill}
            imageStyle={styles.stageImage}
            resizeMode="cover">
            <View style={styles.stageScrim} />
          </ImageBackground>

          <View style={styles.stageContent} onLayout={onStageLayout}>
            <View style={styles.laneRow}>
              {[0, 1, 2].map(i => (
                <Lathkebynroadmqgine
                  key={i}
                  color={ththkebynroadmqgieme.lanes[i]}
                  hitKey={laneHitKeys[i]}
                  dimmed={dimmed}
                  onPressIn={makePressIn(i as LanethkebynroadmqgiIndex)}
                  onPressOut={makePressOut(i as LanethkebynroadmqgiIndex)}
                />
              ))}
            </View>

            <View
              pointerEvents="none"
              style={[styles.hitLine, {bottom: HIT_LINE_FthkebynroadmqgiROM_BOTTOM}]}>
              <LinearGradient
                colors={ththkebynroadmqgieme.gradients.spectrum}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.hitLineFill}
              />
            </View>

            {stageH > 0 ? (
              <View pointerEvents="none" style={StyleSheet.absoluteFill}>
                {snapshot.visible.map(n => (
                  <NotethkebynroadmqgiView
                    key={n.id}
                    laneX={n.lane * (LANthkebynroadmqgiE_W + LANEthkebynroadmqgi_GAP)}
                    laneW={LANthkebynroadmqgiE_W}
                    color={ththkebynroadmqgieme.lanes[n.lane]}
                    colorDeep={ththkebynroadmqgieme.lanesDeep[n.lane]}
                    tailPx={
                      n.holdMs > 0
                        ? Math.round(
                            (n.holdMs / TRAVthkebynroadmqgiEL_MS) *
                              Math.max(1, hitLineY + NOTthkebynroadmqgiE_D),
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
              style={[styles.feedbackSlot, {bottom: HIT_LINE_FthkebynroadmqgiROM_BOTTOM + 26}]}>
              {snapshot.phase === 'idle' ? (
                <Text style={styles.getReady}>GET READY</Text>
              ) : (
                <HitthkebynroadmqgiFeedback
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
            <StatthkebynroadmqgiCard value={accuracyLabel} label="ACCURACY" accent={C.success} />
          </View>
        ) : null}
        {showStats ? (
          <View style={styles.statSlot}>
            <StatthkebynroadmqgiCard
              value={`x${snapshot.maxCombo}`}
              label="COMBO"
              accent={C.accent}
            />
          </View>
        ) : null}
        {showStats ? (
          <View style={styles.statSlot}>
            <StatthkebynroadmqgiCard
              value={`${snapshot.notesHit}/${NOTES_PthkebynroadmqgiER_TRACK}`}
              label="NOTES"
              accent={C.info}
            />
          </View>
        ) : null}
      </View>

      <View style={styles.controls}>
        <Text style={styles.controlsHint}>KEEP THE SERIES ALIVE</Text>
        <SecondarythkebynroadmqgiButton label="RESET ROUND" onPress={onReset} />
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
    backgroundColor: ththkebynroadmqgieme.colors.glassFill,
    borderWidth: 1,
    borderColor: ththkebynroadmqgieme.colors.glassBorder,
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
    width: BOAthkebynroadmqgiRD_W,
    height: '100%',
    borderRadius: ththkebynroadmqgieme.radius.lg,
    borderWidth: BOARD_thkebynroadmqgiBORDER,
    borderColor: ththkebynroadmqgieme.colors.hairline,
    padding: BOARthkebynroadmqgiD_PAD,
    overflow: 'hidden',
    backgroundColor: '#10141C',
  },
  stageImage: {
    borderRadius: ththkebynroadmqgieme.radius.lg,
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
    gap: LANEthkebynroadmqgi_GAP,
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
    borderTopColor: ththkebynroadmqgieme.colors.hairline,
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
function GamethkebynroadmqgiScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function GamethkebynroadmqgiScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function GamethkebynroadmqgiScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
