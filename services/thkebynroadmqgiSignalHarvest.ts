import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  thkebynroadmqgiInitializationRuntime,
  thkebynroadmqgiWaitForPushToken,
  thkebynroadmqgiOnMessageRecieved,
  thkebynroadmqgiTryOpenPushExternalUrl,
} from './initializationSharthkebynroadmqgied';
// autosetup-split-begin
import { thkebynroadmqgiSignalHarvestObfV5HashMix, thkebynroadmqgiMixSeed, thkebynroadmqgiSignalHarveObfV1HashMix, thkebynroadmqgiSignalHarveObfV2HashMix, thkebynroadmqgiSigObfV3HashMix, thkebynroadmqgiSigObfV4SumOdds, thkebynroadmqgiSignalHarvestObfV6HashMix, thkebynroadmqgiSignalHarvestPart01ObfV6HashMix, thkebynroadmqgiSignalHarvestPart01ObfV5HashMix } from './thkebynroadmqgiSignalHarvestPart01';
import { thkebynroadmqgiSignalHarvestObfV5SumOdds, thkebynroadmqgiFoldRange, thkebynroadmqgiSignalHarveObfV1SumOdds, thkebynroadmqgiSignalHarveObfV2SumOdds, thkebynroadmqgiSigObfV4HashMix, thkebynroadmqgiSigObfV3ClampMod, thkebynroadmqgiSignalHarvestObfV6SumOdds, thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds, thkebynroadmqgiSignalHarvestPart01ObfV5SumOdds } from './thkebynroadmqgiSignalHarvestPart02';
import { thkebynroadmqgiSignalHarvestObfV5ClampMod, thkebynroadmqgiClampSpan, thkebynroadmqgiSignalHarveObfV1ClampMod, thkebynroadmqgiSignalHarveObfV2ClampMod, thkebynroadmqgiSigObfV3SumOdds, thkebynroadmqgiSigObfV4ClampMod, thkebynroadmqgiSignalHarvestObfV6ClampMod, thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod, thkebynroadmqgiSignalHarvestPart01ObfV5ClampMod } from './thkebynroadmqgiSignalHarvestPart03';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let thkebynroadmqgiForegroundHandlerRegistered = false;
function thkebynroadmqgiEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  if (thkebynroadmqgiForegroundHandlerRegistered) {
    return;
  }
  thkebynroadmqgiForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
      void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
      void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
      void thkebynroadmqgiSigObfV3HashMix('xy');
      void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV3ClampMod(7, 5);
      void thkebynroadmqgiSigObfV4HashMix('xy');
      void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV4ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      await thkebynroadmqgiOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
    thkebynroadmqgiForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function thkebynroadmqgiGetAdvertisingId(): Promise<string> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AthkebynroadmqgidvertisingIdHelper } = NativeModules;

    if (!AthkebynroadmqgidvertisingIdHelper) {
      //console.log('AthkebynroadmqgidvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AthkebynroadmqgidvertisingIdHelper.getAdvertisingIthkebynroadmqgidId();
    return adId || '';
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function thkebynroadmqgiPushStep(): Promise<void> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test thkebynroadmqgiPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    thkebynroadmqgiEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
      void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
      void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
      void thkebynroadmqgiSigObfV3HashMix('xy');
      void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV3ClampMod(7, 5);
      void thkebynroadmqgiSigObfV4HashMix('xy');
      void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV4ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = token;
    });

    const token = await thkebynroadmqgiWaitForPushToken(10);

    if (token) {
      thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test thkebynroadmqgiPushStep: Error in thkebynroadmqgiPushStep:', error);
  }
}

export async function thkebynroadmqgiReferrerStep(): Promise<void> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
      void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
      void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
      void thkebynroadmqgiSigObfV3HashMix('xy');
      void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV3ClampMod(7, 5);
      void thkebynroadmqgiSigObfV4HashMix('xy');
      void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV4ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
          void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
          void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
          void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
          void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
          void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
          void thkebynroadmqgiSigObfV3HashMix('xy');
          void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
          void thkebynroadmqgiSigObfV3ClampMod(7, 5);
          void thkebynroadmqgiSigObfV4HashMix('xy');
          void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
          void thkebynroadmqgiSigObfV4ClampMod(7, 5);
          void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
          void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
          void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
          void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
          void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
          void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef = info.installReferrer;
            //console.log('Test thkebynroadmqgiReferrerStep: Install Referrer obtained:', thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef);
          } else {
            thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef = '';
            if (error) {
              //console.log('Test thkebynroadmqgiReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test thkebynroadmqgiReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
        void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
        void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
        void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test thkebynroadmqgiReferrerStep: Exception:', error);
          thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test thkebynroadmqgiReferrerStep: Error in thkebynroadmqgiReferrerStep:', error);
    thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function thkebynroadmqgiProcessDirectDeepLink(url: string): void {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (thkebynroadmqgiInitializationRuntime.firsthkebynroadmqgitParameterReceived) return;
  thkebynroadmqgiInitializationRuntime.firsthkebynroadmqgitParameterReceived = true;
  thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilOneLink = url.trim();
  thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming = '';
}

export async function thkebynroadmqgiDataCollectStep(): Promise<void> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    thkebynroadmqgiInitializationRuntime.firsthkebynroadmqgitParameterReceived = false;
    thkebynroadmqgiInitializationRuntime.orthkebynroadmqgianicWaiting = false;
    thkebynroadmqgiInitializationRuntime.orgthkebynroadmqginicWaitResolve = null;
    thkebynroadmqgiInitializationRuntime.DevthkebynroadmqgiiceId = '';
    thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilOneLink = '';
    thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      thkebynroadmqgiProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
      void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
      void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
      void thkebynroadmqgiSigObfV3HashMix('xy');
      void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV3ClampMod(7, 5);
      void thkebynroadmqgiSigObfV4HashMix('xy');
      void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV4ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      void thkebynroadmqgiMixSeed(3, 7);
      void thkebynroadmqgiFoldRange([1, 2, 3]);
      void thkebynroadmqgiClampSpan(5, 0, 10);

      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        thkebynroadmqgiProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !thkebynroadmqgiInitializationRuntime.firsthkebynroadmqgitParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
        void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
        void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
        void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
        void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
        return (setTimeout(() => {
        void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
        void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
        void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
        void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
        void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming = '';
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
    thkebynroadmqgiInitializationRuntime.DevthkebynroadmqgiiceId = '';
    thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilOneLink = '';
    thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming = '';
  }
}

let thkebynroadmqgiNotificationOpenHandlerRegistered = false;
function thkebynroadmqgiEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  if (thkebynroadmqgiNotificationOpenHandlerRegistered) {
    return;
  }
  thkebynroadmqgiNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
      void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
      void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
      void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
      void thkebynroadmqgiSigObfV3HashMix('xy');
      void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV3ClampMod(7, 5);
      void thkebynroadmqgiSigObfV4HashMix('xy');
      void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiSigObfV4ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      void thkebynroadmqgiMixSeed(3, 7);
      void thkebynroadmqgiFoldRange([1, 2, 3]);
      void thkebynroadmqgiClampSpan(5, 0, 10);

      void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
      void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
      void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await thkebynroadmqgiTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
    thkebynroadmqgiNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function thkebynroadmqgiSetupPushOpenHandlers(): Promise<void> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    thkebynroadmqgiEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await thkebynroadmqgiTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
    void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
    void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface thkebynroadmqgiParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function thkebynroadmqgiParallelCollectStep(): Promise<thkebynroadmqgiParallelCollectResult> {
  void thkebynroadmqgiSignalHarvestObfV5HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV5ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestPart01ObfV6HashMix('xy');
  void thkebynroadmqgiSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestPart01ObfV6ClampMod(7, 5);
  void thkebynroadmqgiSignalHarvestObfV7HashMix('xy');
  void thkebynroadmqgiSignalHarvestObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarvestObfV7ClampMod(7, 5);
  void thkebynroadmqgiSigObfV3HashMix('xy');
  void thkebynroadmqgiSigObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV3ClampMod(7, 5);
  void thkebynroadmqgiSigObfV4HashMix('xy');
  void thkebynroadmqgiSigObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiSigObfV4ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiSignalHarveObfV1HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV1ClampMod(7, 5);
  void thkebynroadmqgiSignalHarveObfV2HashMix('xy');
  void thkebynroadmqgiSignalHarveObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiSignalHarveObfV2ClampMod(7, 5);
  await thkebynroadmqgiReferrerStep();

  const [, advertisingId] = await Promise.all([
    thkebynroadmqgiPushStep(),
    thkebynroadmqgiGetAdvertisingId(),
    thkebynroadmqgiDataCollectStep(),
  ]);

  thkebynroadmqgiInitializationRuntime.adthkebynroadmqgiId = advertisingId ?? '';

  return {
    advertisingId: thkebynroadmqgiInitializationRuntime.adthkebynroadmqgiId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void thkebynroadmqgiSignalHarvestPart01ObfV5HashMix('xy');
void thkebynroadmqgiSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void thkebynroadmqgiSignalHarvestPart01ObfV5ClampMod(7, 5);



/* obfuscation-batch:v7 */
function thkebynroadmqgiSignalHarvestObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function thkebynroadmqgiSignalHarvestObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function thkebynroadmqgiSignalHarvestObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
