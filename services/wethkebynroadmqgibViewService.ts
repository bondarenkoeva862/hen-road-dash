import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_thkebynroadmqgiKEY,
  STORAGE_thkebynroadmqgiKEYS,
  thkebynroadmqgiConstTouch,
} from './constants/constthkebynroadmqgintsVariable';

type VthkebynroadmqgiiewportBannanaModule = {
  navthkebynroadmqgiigate: (url: string) => Promise<boolean>;
  hthkebynroadmqgiide: () => Promise<boolean>;
};

const vthkebynroadmqgiiewportBridge: VthkebynroadmqgiiewportBannanaModule | undefined =
  NativeModules.VthkebynroadmqgiiewportBannana;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  _dummypicklfo5409vb33 = 0;

  thkebynroadmqgiubscribe(listener: swefgdetguhjhoioesListener): () => void {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
      void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
      void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
      void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
      void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
      void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
      void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
      void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
      void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void thkebynroadmqgiConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
      void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
      void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
      void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
      void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
      void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
      void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
      return (l(this.state));
    });
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
  void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
            void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
            void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
            void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
            void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
            void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
            void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
            void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
            void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
            void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
            void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
            void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
            void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_thkebynroadmqgiKEYS.PUSH_thkebynroadmqgiMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native system dialog per app launch; 2nd ask waits for next cold start.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // 1st launch: native. 2nd launch (askCount === 1): native again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_thkebynroadmqgiKEYS.PUSH_thkebynroadmqgiMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
  void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vthkebynroadmqgiiewportBridge?.navthkebynroadmqgiigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vthkebynroadmqgiiewportBridge.navthkebynroadmqgiigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vthkebynroadmqgiiewportBridge?.hthkebynroadmqgiide) {
      return;
    }

    try {
      await vthkebynroadmqgiiewportBridge.hthkebynroadmqgiide();
    } catch {
      // silent
    }
  }

  async shthkebynroadmqgiow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
  void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
  void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
  void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.thkebynroadmqgiaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async thkebynroadmqgiaveLastUrl(url: string): Promise<boolean> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.thkebynroadmqgiaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async thkebynroadmqgiaveLastUrlToStorage(url: string): Promise<void> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_thkebynroadmqgiKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
    void wethkebynroadmqgibViewServiceObfV5HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV5SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV5ClampMod(7, 5);
  void wethkebynroadmqgibViewServiceObfV6HashMix('xy');
  void wethkebynroadmqgibViewServiceObfV6SumOdds([1, 3, 5]);
  void wethkebynroadmqgibViewServiceObfV6ClampMod(7, 5);
    void wethkebynroadmqgibViewServiceObfV7HashMix('xy');
    void wethkebynroadmqgibViewServiceObfV7SumOdds([1, 3, 5]);
    void wethkebynroadmqgibViewServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV3HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibObfV4HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(7, 5);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix('xy');
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_thkebynroadmqgiKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

function swefgdetguhjhoioesMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function swefgdetguhjhoioesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
/* obfuscation-batch:v1 */
function thkebynroadmqgiwethkebynroadmqgibViewServObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function thkebynroadmqgiwethkebynroadmqgibViewServObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function thkebynroadmqgiwethkebynroadmqgibViewServObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function thkebynroadmqgiwethkebynroadmqgibViewServObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function thkebynroadmqgiwethkebynroadmqgibViewServObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function thkebynroadmqgiwethkebynroadmqgibViewServObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function thkebynroadmqgiwethkebynroadmqgibObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function thkebynroadmqgiwethkebynroadmqgibObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function thkebynroadmqgiwethkebynroadmqgibObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function thkebynroadmqgiwethkebynroadmqgibObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function thkebynroadmqgiwethkebynroadmqgibObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function thkebynroadmqgiwethkebynroadmqgibObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function wethkebynroadmqgibViewServiceObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function wethkebynroadmqgibViewServiceObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function wethkebynroadmqgibViewServiceObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function wethkebynroadmqgibViewServiceObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function wethkebynroadmqgibViewServiceObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function wethkebynroadmqgibViewServiceObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function wethkebynroadmqgibViewServiceObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function wethkebynroadmqgibViewServiceObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function wethkebynroadmqgibViewServiceObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
