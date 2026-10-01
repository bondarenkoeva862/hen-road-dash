import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppthkebynroadmqgiInitialization } from './services/initthkebynroadmqgiializationFlow';
import AppthkebynroadmqgiPlaceholder from './Layouts/Game/GamethkebynroadmqgiInit';
import LoaderthkebynroadmqgiScreen from './Layouts/Game/screens/LoaderthkebynroadmqgiScreen';
import { thkebynroadmqgiViewportGetState, thkebynroadmqgiViewportRestore } from './services/thkebynroadmqgiViewportHost';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppthkebynroadmqgiContent />
    </SafeAreaProvider>
  );
}

function AppthkebynroadmqgiContent() {
  const { isthkebynroadmqgiLoading, isthkebynroadmqgiLoadPlaceholder } = useAppthkebynroadmqgiInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuthkebynroadmqgiArmed, setMenuthkebynroadmqgiArmed] = useState(false);
  const appthkebynroadmqgiState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showthkebynroadmqgiGame =
    !isthkebynroadmqgiLoading && isthkebynroadmqgiLoadPlaceholder;

  const handlethkebynroadmqgiFirstProgress = useCallback(() => {
    setMenuthkebynroadmqgiArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appthkebynroadmqgiState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = thkebynroadmqgiViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          thkebynroadmqgiViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appthkebynroadmqgiState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuthkebynroadmqgiArmed || showthkebynroadmqgiGame) && (
        <AppthkebynroadmqgiPlaceholder startthkebynroadmqgiAtMenu />
      )}
      {!showthkebynroadmqgiGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderthkebynroadmqgiScreen
            doneOnFithkebynroadmqgirstCycle
            onDthkebynroadmqgione={handlethkebynroadmqgiFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
