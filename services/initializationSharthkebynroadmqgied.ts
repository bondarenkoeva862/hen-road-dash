import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thkebynroadmqgiDecrypt } from './CrypthkebynroadmqgitoService';
import { finthkebynroadmqgiKey } from './constants/constthkebynroadmqgintsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  thkebynroadmqgiViewportGetState,
  thkebynroadmqgiViewportShow,
} from './thkebynroadmqgiViewportHost';
import { Utils } from './UtthkebynroadmqgiilService';

let thkebynroadmqgiLastOpenedPushExternalUrl = '';
let thkebynroadmqgiLastOpenedPushExternalAt = 0;

export const thkebynroadmqgiInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof thkebynroadmqgiInitTarget)[keyof typeof thkebynroadmqgiInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface thkebynroadmqgiInitializationRuntime {
  pusthkebynroadmqgihToken: string;
  instthkebynroadmqgiallRef: string;
  DevthkebynroadmqgiiceId: string;
  FinthkebynroadmqgilOneLink: string;
  FinthkebynroadmqgilNaming: string;
  adthkebynroadmqgiId: string;
  firsthkebynroadmqgitParameterReceived: boolean;
  orthkebynroadmqgianicWaiting: boolean;
  orgthkebynroadmqginicWaitResolve: (() => void) | null;
  penthkebynroadmqgidingSendId: string;
}

export const thkebynroadmqgiInitializationRuntime: thkebynroadmqgiInitializationRuntime = {
  pusthkebynroadmqgihToken: '',
  instthkebynroadmqgiallRef: '',
  DevthkebynroadmqgiiceId: '',
  FinthkebynroadmqgilOneLink: '',
  FinthkebynroadmqgilNaming: '',
  adthkebynroadmqgiId: '',
  firsthkebynroadmqgitParameterReceived: false,
  orthkebynroadmqgianicWaiting: false,
  orgthkebynroadmqginicWaitResolve: null,
  penthkebynroadmqgidingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function thkebynroadmqgiResetInitializationRuntime(): void {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = '';
  thkebynroadmqgiInitializationRuntime.instthkebynroadmqgiallRef = '';
  thkebynroadmqgiInitializationRuntime.DevthkebynroadmqgiiceId = '';
  thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilOneLink = '';
  thkebynroadmqgiInitializationRuntime.FinthkebynroadmqgilNaming = '';
  thkebynroadmqgiInitializationRuntime.adthkebynroadmqgiId = '';
  thkebynroadmqgiInitializationRuntime.firsthkebynroadmqgitParameterReceived = false;
  thkebynroadmqgiInitializationRuntime.orthkebynroadmqgianicWaiting = false;
  thkebynroadmqgiInitializationRuntime.orgthkebynroadmqginicWaitResolve = null;
}

export function thkebynroadmqgiAppenndSendId(url: string, sendId: string): string {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function thkebynroadmqgiSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AthkebynroadmqgippInfoModule } = NativeModules;
    if (!AthkebynroadmqgippInfoModule || typeof AthkebynroadmqgippInfoModule.getAndClearPendingSenthkebynroadmqgidId !== 'function') {
      return;
    }
    const sendId = await AthkebynroadmqgippInfoModule.getAndClearPendingSenthkebynroadmqgidId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      thkebynroadmqgiInitializationRuntime.penthkebynroadmqgidingSendId = sendId.trim();
    }
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function thkebynroadmqgiTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === thkebynroadmqgiLastOpenedPushExternalUrl &&
    now - thkebynroadmqgiLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    thkebynroadmqgiLastOpenedPushExternalUrl = url;
    thkebynroadmqgiLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    thkebynroadmqgiLastOpenedPushExternalUrl = '';
    thkebynroadmqgiLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function thkebynroadmqgiSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AthkebynroadmqgippInfoModule } = NativeModules;
    if (
      !AthkebynroadmqgippInfoModule ||
      typeof AthkebynroadmqgippInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AthkebynroadmqgippInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await thkebynroadmqgiTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function thkebynroadmqgiGetAppIdenier(): Promise<string> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AthkebynroadmqgippInfoModule } = NativeModules;

    if (!AthkebynroadmqgippInfoModule) {
      //console.log('AthkebynroadmqgippInfoModule module not found');
      return '';
    }

    const packageName = await AthkebynroadmqgippInfoModule.getPacthkebynroadmqgikageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function thkebynroadmqgiGetAppVersion(): Promise<string> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function thkebynroadmqgiGetAndroidId(): Promise<string> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function thkebynroadmqgiGetAndroidUserAAgent(): Promise<string> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAthkebynroadmqgiper } = NativeModules;

    if (!UserAthkebynroadmqgiper) {
      //console.log('UserAthkebynroadmqgiper module not found');
      return '';
    }

    const userAgent: string = await UserAthkebynroadmqgiper.getAndrthkebynroadmqgioidUserAgent();
    return userAgent || '';
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const thkebynroadmqgiINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let thkebynroadmqgiInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function thkebynroadmqgiWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
    void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
    void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
    void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
    void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
    void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
    void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
    void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
    void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void thkebynroadmqgiMixSeed(3, 7);
    void thkebynroadmqgiFoldRange([1, 2, 3]);
    void thkebynroadmqgiClampSpan(5, 0, 10);

    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
      void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
      void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (thkebynroadmqgiInitPushResolver === deliver) {
        thkebynroadmqgiInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
      void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
      void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
      void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
      void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    thkebynroadmqgiInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function thkebynroadmqgiDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!thkebynroadmqgiInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = thkebynroadmqgiInitPushResolver;
  thkebynroadmqgiInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function thkebynroadmqgiHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = thkebynroadmqgiDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = thkebynroadmqgiAppenndSendId(
        redirectUrlInitial,
        thkebynroadmqgiInitializationRuntime.penthkebynroadmqgidingSendId,
      );
      await AsyncStorage.setItem(finthkebynroadmqgiKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = thkebynroadmqgiViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await thkebynroadmqgiViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.thkebynroadmqgiSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function thkebynroadmqgiExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of thkebynroadmqgiINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function thkebynroadmqgiWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
    void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
    void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
    void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
    void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
    void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
    void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
    void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
    void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
      void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
      void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
      void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
      void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
      void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await thkebynroadmqgiOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function thkebynroadmqgiOnTokenReceived(token: string): Promise<void> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    thkebynroadmqgiInitializationRuntime.pusthkebynroadmqgihToken = token;
  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function thkebynroadmqgiOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharthkebynroadmqgiedObfV5HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV5SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV5ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV6HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV6SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV6ClampMod(7, 5);
  void initializationSharthkebynroadmqgiedObfV7HashMix('xy');
  void initializationSharthkebynroadmqgiedObfV7SumOdds([1, 3, 5]);
  void initializationSharthkebynroadmqgiedObfV7ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV3HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV3ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharObfV4HashMix('xy');
  void thkebynroadmqgiinitializationSharObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharObfV4ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);


  void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = thkebynroadmqgiExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = thkebynroadmqgiDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await thkebynroadmqgiHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      thkebynroadmqgiInitializationRuntime.penthkebynroadmqgidingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finthkebynroadmqgiKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = thkebynroadmqgiAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = thkebynroadmqgiViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await thkebynroadmqgiViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix('xy');
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const thkebynroadmqgiabppOnMessageRecieved = thkebynroadmqgiOnMessageRecieved;

function thkebynroadmqgiMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function thkebynroadmqgiFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function thkebynroadmqgiClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function thkebynroadmqgiinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function thkebynroadmqgiinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function thkebynroadmqgiinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function thkebynroadmqgiinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function thkebynroadmqgiinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function thkebynroadmqgiinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function thkebynroadmqgiinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function thkebynroadmqgiinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function thkebynroadmqgiinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function thkebynroadmqgiinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function thkebynroadmqgiinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function thkebynroadmqgiinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharthkebynroadmqgiedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharthkebynroadmqgiedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharthkebynroadmqgiedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharthkebynroadmqgiedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharthkebynroadmqgiedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharthkebynroadmqgiedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function initializationSharthkebynroadmqgiedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharthkebynroadmqgiedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharthkebynroadmqgiedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
