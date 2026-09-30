/**
 * HenRoadDash — three-pad rhythm game.
 * Plain state-machine navigation (rule #2), no react-navigation.
 */
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TRACKS, TrackDef} from './src/constants/config';
import {C} from './src/constants/theme';
import {LoaderScreen} from './src/screens/LoaderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {TrackSelectScreen} from './src/screens/TrackSelectPanel';
import {TutorialScreen} from './src/screens/TutorialPanel';
import {GameScreen} from './src/screens/GameScreen';
import {ResultScreen} from './src/screens/ResultScreen';
import {RoundResult} from './src/game/scoring';

type Screen = 'loader' | 'menu' | 'tracks' | 'tutorial' | 'game' | 'result';

const EMPTY_RESULT: RoundResult = {
  score: 0,
  accuracy: 0,
  maxCombo: 0,
  notesHit: 0,
  notesTotal: 0,
  cleared: false,
  reason: 'timeup',
};

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [track, setTrack] = useState<TrackDef>(TRACKS[0]);
  const [roundKey, setRoundKey] = useState(0);
  const [result, setResult] = useState<RoundResult>(EMPTY_RESULT);
  const [bests, setBests] = useState<number[]>([0, 0, 0]);

  const startRound = useCallback((t: TrackDef) => {
    setTrack(t);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleLoaderDone = useCallback(() => setScreen('menu'), []);

  // PLAY NOW jumps straight into the default track — never through a picker.
  const handlePlay = useCallback(() => startRound(TRACKS[0]), [startRound]);

  const handleGameOver = useCallback(
    (r: RoundResult) => {
      setResult(r);
      setBests(prev => {
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
      {screen === 'loader' ? <LoaderScreen onDone={handleLoaderDone} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          track={track}
          best={bests[track.id] ?? 0}
          onPlay={handlePlay}
          onTracks={handleTracks}
          onHowTo={handleHowTo}
        />
      ) : null}

      {screen === 'tracks' ? (
        <TrackSelectScreen
          selected={track}
          bests={bests}
          onSelect={setTrack}
          onConfirm={handleConfirmTrack}
          onBack={handleMenu}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialScreen onStart={handlePlay} onBack={handleMenu} />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={roundKey}
          track={track}
          roundKey={roundKey}
          onGameOver={handleGameOver}
          onQuit={handleMenu}
          onReset={handleReplay}
        />
      ) : null}

      {screen === 'result' ? (
        <ResultScreen
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

export default App;
