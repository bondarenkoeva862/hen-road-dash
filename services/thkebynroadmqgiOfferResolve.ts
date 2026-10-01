import {
  Utils,
  thkebynroadmqgiSendInitPayload,
  thkebynroadmqgiNormalizeWorkerBaseUrl,
} from './UtthkebynroadmqgiilService';
import {
  thkebynroadmqgiEncrypt as cryptoEncrypt,
  thkebynroadmqgiDecrypt as cryptoDecrypt,
} from './CrypthkebynroadmqgitoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finthkebynroadmqgiKey } from './constants/constthkebynroadmqgintsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  thkebynroadmqgiInitTarget,
  thkebynroadmqgiAppenndSendId,
  thkebynroadmqgiGetAndroidId,
  thkebynroadmqgiGetAndroidUserAAgent,
  thkebynroadmqgiGetAppIdenier,
  thkebynroadmqgiGetAppVersion,
  thkebynroadmqgiInitializationRuntime,
} from './initializationSharthkebynroadmqgied';
import { thkebynroadmqgiViewportShow } from './thkebynroadmqgiViewportHost';
// autosetup-split-begin
import { thkebynroadmqgiOfferResolvObfV1HashMix, thkebynroadmqgiMixSeed, thkebynroadmqgiOffObfV3SumOdds, thkebynroadmqgiOffObfV4SumOdds, thkebynroadmqgiOfferResolvObfV2HashMix, thkebynroadmqgiOfferResolvObfV1ClampMod, thkebynroadmqgiFoldRange, thkebynroadmqgiOffObfV3ClampMod, thkebynroadmqgiOffObfV4ClampMod, thkebynroadmqgiOfferResolvObfV2ClampMod, thkebynroadmqgiOfferResolvObfV2SumOdds, thkebynroadmqgiOffObfV3HashMix, thkebynroadmqgiOffObfV4HashMix, thkebynroadmqgiOfferResolvObfV1SumOdds, thkebynroadmqgiClampSpan, thkebynroadmqgiOfferResolveObfV5HashMix, thkebynroadmqgiOfferResolveObfV5SumOdds, thkebynroadmqgiOfferResolveObfV5ClampMod, thkebynroadmqgiOfferResolveObfV6HashMix, thkebynroadmqgiOfferResolveObfV6SumOdds, thkebynroadmqgiOfferResolveObfV6ClampMod } from './thkebynroadmqgiOfferResolvePart01';
// autosetup-split-end

export async function thkebynroadmqgiInitStep(): Promise<InitializationState | null> {
  void thkebynroadmqgiOfferResolveObfV5HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV5ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV6HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV6ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV7HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV7ClampMod(7, 5);
  void thkebynroadmqgiOffObfV3HashMix('xy');
  void thkebynroadmqgiOffObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV3ClampMod(7, 5);
  void thkebynroadmqgiOffObfV4HashMix('xy');
  void thkebynroadmqgiOffObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV4ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.thkebynroadmqgiGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await thkebynroadmqgiGetAppIdenier();
    const userAgent = await thkebynroadmqgiGetAndroidUserAAgent();
    const androidId = await thkebynroadmqgiGetAndroidId();
    const appVersion = await thkebynroadmqgiGetAppVersion();
    const workerBaseUrl = thkebynroadmqgiNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = thkebynroadmqgiInitializationRuntime.DevthkebynroadmqgiiceId;

    const namingValue = thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      thkebynroadmqgiInitializationRuntime.adthkebynroadmqgiId ?? '',
      thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken ?? '',
      thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef ?? '',
      thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await thkebynroadmqgiSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.thkebynroadmqgiSetUserBlocke(1);
        await thkebynroadmqgiUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await thkebynroadmqgiOnInitResponse(responseText);
    } catch (rpcError) {
      void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
      void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
      void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
      void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
      await thkebynroadmqgiUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
    void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
    await thkebynroadmqgiUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function thkebynroadmqgiOnInitResponse(responseText: string): Promise<InitializationState> {
  void thkebynroadmqgiOfferResolveObfV5HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV5ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV6HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV6ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV7HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV7ClampMod(7, 5);
  void thkebynroadmqgiOffObfV3HashMix('xy');
  void thkebynroadmqgiOffObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV3ClampMod(7, 5);
  void thkebynroadmqgiOffObfV4HashMix('xy');
  void thkebynroadmqgiOffObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV4ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
      void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
      void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
      void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.thkebynroadmqgiSetUserBlocke(1);
      await thkebynroadmqgiUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.thkebynroadmqgiSetUserBlocke(1);
      await thkebynroadmqgiUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finthkebynroadmqgiKey, redirectUrlInitial);

      const finalUrl = thkebynroadmqgiAppenndSendId(
        redirectUrlInitial,
        thkebynroadmqgiInitializationRuntime.penthkebynroadmqgidingSendId,
      );

      const success = await thkebynroadmqgiViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: thkebynroadmqgiInitTarget.webview,
      };
    }

    await thkebynroadmqgiUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: thkebynroadmqgiInitTarget.game,
    };
  } catch (error) {
    void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
    void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
    await thkebynroadmqgiUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function thkebynroadmqgiUnsubscribeFirebase(reason?: string): Promise<void> {
  void thkebynroadmqgiOfferResolveObfV5HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV5SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV5ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV6HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV6SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV6ClampMod(7, 5);
  void thkebynroadmqgiOfferResolveObfV7HashMix('xy');
  void thkebynroadmqgiOfferResolveObfV7SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolveObfV7ClampMod(7, 5);
  void thkebynroadmqgiOffObfV3HashMix('xy');
  void thkebynroadmqgiOffObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV3ClampMod(7, 5);
  void thkebynroadmqgiOffObfV4HashMix('xy');
  void thkebynroadmqgiOffObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiOffObfV4ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
  void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
  void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = '';
  } catch (error) {
    void thkebynroadmqgiOfferResolvObfV1HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV1ClampMod(7, 5);
    void thkebynroadmqgiOfferResolvObfV2HashMix('xy');
    void thkebynroadmqgiOfferResolvObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiOfferResolvObfV2ClampMod(7, 5);
    thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */




/* obfuscation-batch:v7 */
function thkebynroadmqgiOfferResolveObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function thkebynroadmqgiOfferResolveObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function thkebynroadmqgiOfferResolveObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
