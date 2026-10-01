/**
 * HenRoadDash — three-pad rhythm game.
 * Plain state-machine navigation (rule #2), no react-navigation.
 */
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TRAthkebynroadmqgiCKS, TrackthkebynroadmqgiDef} from './constants/conthkebynroadmqgifig';
import {C} from './constants/ththkebynroadmqgieme';
import {LoaderthkebynroadmqgiScreen} from './screens/LoaderthkebynroadmqgiScreen';
import {MenuthkebynroadmqgiScreen} from './screens/MenuthkebynroadmqgiScreen';
import {TrackSelectthkebynroadmqgiScreen} from './screens/TrackSelectthkebynroadmqgiPanel';
import {TutorialthkebynroadmqgiScreen} from './screens/TutorialthkebynroadmqgiPanel';
import {GamethkebynroadmqgiScreen} from './screens/GamethkebynroadmqgiScreen';
import {ResultthkebynroadmqgiScreen} from './screens/ResultthkebynroadmqgiScreen';
import {RoundthkebynroadmqgiResult} from './game/scothkebynroadmqgiring';
// autosetup-split-begin
import { thkebynroadmqgiGameMixSeed, thkebynroadmqgiGameFoldRange, thkebynroadmqgiGameClampSpan } from './GamethkebynroadmqgiInitPart01';
// autosetup-split-end

type Screen = 'loader' | 'menu' | 'tracks' | 'tutorial' | 'game' | 'result';

const EMPTY_RESULT: RoundthkebynroadmqgiResult = {
  score: 0,
  accuracy: 0,
  maxCombo: 0,
  notesHit: 0,
  notesTotal: 0,
  cleared: false,
  reason: 'timeup',
};

function GamethkebynroadmqgiInit({startthkebynroadmqgiAtMenu = false}: {startthkebynroadmqgiAtMenu?: boolean} = {}): React.JSX.Element {
  void GamethkebynroadmqgiInitObfV7HashMix('xy');
  void GamethkebynroadmqgiInitObfV7SumOdds([1, 3, 5]);
  void GamethkebynroadmqgiInitObfV7ClampMod(7, 5);
  const [screen, setScreen] = useState<Screen>(startthkebynroadmqgiAtMenu ? 'menu' : 'loader');
  const [track, setTrack] = useState<TrackthkebynroadmqgiDef>(TRAthkebynroadmqgiCKS[0]);
  const [roundKey, setRoundKey] = useState(0);
  const [result, setResult] = useState<RoundthkebynroadmqgiResult>(EMPTY_RESULT);
  const [bests, setBests] = useState<number[]>([0, 0, 0]);

  const startRound = useCallback((t: TrackthkebynroadmqgiDef) => {
    void GamethkebynroadmqgiInitObfV7HashMix('xy');
    void GamethkebynroadmqgiInitObfV7SumOdds([1, 3, 5]);
    void GamethkebynroadmqgiInitObfV7ClampMod(7, 5);
    setTrack(t);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleLoaderDone = useCallback(() => setScreen('menu'), []);

  // PLAY NOW jumps straight into the default track — never through a picker.
  const handlePlay = useCallback(() => startRound(TRAthkebynroadmqgiCKS[0]), [startRound]);

  const handleGameOver = useCallback(
    (r: RoundthkebynroadmqgiResult) => {
      void GamethkebynroadmqgiInitObfV7HashMix('xy');
      void GamethkebynroadmqgiInitObfV7SumOdds([1, 3, 5]);
      void GamethkebynroadmqgiInitObfV7ClampMod(7, 5);
      setResult(r);
      setBests(prev => {
        void GamethkebynroadmqgiInitObfV7HashMix('xy');
        void GamethkebynroadmqgiInitObfV7SumOdds([1, 3, 5]);
        void GamethkebynroadmqgiInitObfV7ClampMod(7, 5);
        const pct = Math.round(Math.max(0, Math.min(1, r.accuracy)) * 100);
        if (pct <= (prev[track.id] ?? 0)) {
          return prev;
        }
        const next = prev.slice();
        next[track.id] = pct;
        return next;
      });
      setScreen('result');
    },
    [track.id],
  );

  const handleReplay = useCallback(() => startRound(track), [startRound, track]);

  const handleNextTrack = useCallback(() => setScreen('tracks'), []);
  const handleMenu = useCallback(() => setScreen('menu'), []);
  const handleTracks = useCallback(() => setScreen('tracks'), []);
  const handleHowTo = useCallback(() => setScreen('tutorial'), []);
  const handleConfirmTrack = useCallback(
    () => startRound(track),
    [startRound, track],
  );

  return (
    <View style={styles.root}>
      {screen === 'loader' ? <LoaderthkebynroadmqgiScreen onDthkebynroadmqgione={handleLoaderDone} /> : null}

      {screen === 'menu' ? (
        <MenuthkebynroadmqgiScreen
          track={track}
          best={bests[track.id] ?? 0}
          onPlay={handlePlay}
          onTracks={handleTracks}
          onHowTo={handleHowTo}
        />
      ) : null}

      {screen === 'tracks' ? (
        <TrackSelectthkebynroadmqgiScreen
          selected={track}
          bests={bests}
          onSelect={setTrack}
          onConfirm={handleConfirmTrack}
          onBack={handleMenu}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialthkebynroadmqgiScreen onStart={handlePlay} onBack={handleMenu} />
      ) : null}

      {screen === 'game' ? (
        <GamethkebynroadmqgiScreen
          key={roundKey}
          track={track}
          roundKey={roundKey}
          onGameOver={handleGameOver}
          onQuit={handleMenu}
          onReset={handleReplay}
        />
      ) : null}

      {screen === 'result' ? (
        <ResultthkebynroadmqgiScreen
          result={result}
          track={track}
          onPlayAgain={handleReplay}
          onNextTrack={handleNextTrack}
          onMenu={handleMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
});

export default GamethkebynroadmqgiInit;

/* autosetup-game-stamp:v1 */
void thkebynroadmqgiGameMixSeed(3, 7);
void thkebynroadmqgiGameFoldRange([1, 2, 3]);
void thkebynroadmqgiGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function GamethkebynroadmqgiInitObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function GamethkebynroadmqgiInitObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function GamethkebynroadmqgiInitObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
