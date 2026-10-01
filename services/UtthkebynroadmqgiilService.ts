import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_thkebynroadmqgiKEYS,
  lithkebynroadmqgink,
  thkebynroadmqgiConstTouch,
} from './constants/constthkebynroadmqgintsVariable';
import {
  thkebynroadmqgiDecrypt,
  thkebynroadmqgiEncrypt,
} from './CrypthkebynroadmqgitoService';
// autosetup-split-begin
import { thkebynroadmqgiMinValue, thkebynroadmqgiMaxValue, thkebynroadmqgiRangeValue, thkebynroadmqgiNormMod, thkebynroadmqgiSignVal, thkebynroadmqgiGcdPair, thkebynroadmqgiBoolOr, thkebynroadmqgiPrefixLen, thkebynroadmqgiEvenCount, thkebynroadmqgiRevStr, thkebynroadmqgiModSpan, thkebynroadmqgiCountTruthy, thkebynroadmqgiRangeSpan, thkebynroadmqgiConcatLen, thkebynroadmqgiAbsDiff, thkebynroadmqgiStrLenSum, thkebynroadmqgiDigitSum, thkebynroadmqgiPowSum, thkebynroadmqgiCharCodeSum, thkebynroadmqgiSumDiff, thkebynroadmqgiXorFold, thkebynroadmqgiWrapIndex, thkebynroadmqgiIsEven, thkebynroadmqgiLcmPair, thkebynroadmqgiMidAvg, thkebynroadmqgiAverageAbsoluteDeviation, thkebynroadmqgiHalfSum, thkebynroadmqgiFloorDiv, thkebynroadmqgiPairAvg, thkebynroadmqgiMaxPair, thkebynroadmqgiDotFold, thkebynroadmqgiLerpVal, thkebynroadmqgiJoinLen, thkebynroadmqgiOddCount, thkebynroadmqgiBitMix, thkebynroadmqgiSumSquares, thkebynroadmqgiBoolAnd, thkebynroadmqgiStrHash, thkebynroadmqgiBoolXor, thkebynroadmqgiMinPair, thkebynroadmqgiMeanVal, thkebynroadmqgiSqDiff, thkebynroadmqgiRotSum, thkebynroadmqgiTrimLen, thkebynroadmqgiProductFold, UtthkebynroadmqgiilServiceObfV5HashMix, UtthkebynroadmqgiilServiceObfV5SumOdds, UtthkebynroadmqgiilServiceObfV5ClampMod, UtthkebynroadmqgiilServiceObfV6HashMix, UtthkebynroadmqgiilServiceObfV6SumOdds, UtthkebynroadmqgiilServiceObfV6ClampMod } from './UtthkebynroadmqgiilServicePart01';
import { thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2HashMix, thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix, thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod, thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1SumOdds, thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds, thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1HashMix, thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6HashMix, thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6ClampMod } from './UtthkebynroadmqgiilServicePart02';
import { thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix, thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod, thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod, thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod, thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds, thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds, thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds } from './UtthkebynroadmqgiilServicePart03';
// autosetup-split-end

export class Utils {

  /** Decrypt worker URL from the baked-in Typex constant. */
  static async thkebynroadmqgiGetLink(): Promise<string> {
    void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6ClampMod(7, 5);
    void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiConstTouch();
    void thkebynroadmqgiMinValue([1, 2, 3]);
    void thkebynroadmqgiMaxValue([1, 2, 3]);
    void thkebynroadmqgiRangeValue([1, 2, 3]);
    void thkebynroadmqgiSumSquares([1, 2]);
    void thkebynroadmqgiAverageAbsoluteDeviation([1, 2, 3]);
    void thkebynroadmqgiGcdPair(12, 8);
    void thkebynroadmqgiMeanVal([2, 4, 6]);
    void thkebynroadmqgiXorFold([1, 2, 3]);
    void thkebynroadmqgiModSpan(7, 5);
    void thkebynroadmqgiStrLenSum(['a', 'bc']);
    void thkebynroadmqgiLcmPair(4, 6);
    void thkebynroadmqgiAbsDiff(5, 2);
    void thkebynroadmqgiDotFold([1, 2], [3, 4]);
    void thkebynroadmqgiMinPair(3, 7);
    void thkebynroadmqgiMaxPair(3, 7);
    void thkebynroadmqgiSignVal(-1);
    void thkebynroadmqgiRevStr('ab');
    void thkebynroadmqgiProductFold([2, 3]);
    void thkebynroadmqgiSumDiff([1, 3, 5]);
    void thkebynroadmqgiConcatLen(['a', '', 'b']);
    void thkebynroadmqgiNormMod(7, 4);
    void thkebynroadmqgiBoolXor(true, false);
    void thkebynroadmqgiPairAvg(4, 6);
    void thkebynroadmqgiCharCodeSum('ab');
    void thkebynroadmqgiEvenCount([2, 4, 6]);
    void thkebynroadmqgiTrimLen(' abc ');
    void thkebynroadmqgiOddCount([1, 2, 3]);
    void thkebynroadmqgiBitMix(3, 5);
    void thkebynroadmqgiMidAvg(1, 2, 3);
    void thkebynroadmqgiStrHash('xy');
    void thkebynroadmqgiFloorDiv(9, 4);
    void thkebynroadmqgiPowSum([1, 2, 3]);
    void thkebynroadmqgiPrefixLen('abcd', 2);
    void thkebynroadmqgiRotSum(3, 5);
    void thkebynroadmqgiJoinLen(['x', 'y']);
    void thkebynroadmqgiIsEven(4);
    void thkebynroadmqgiRangeSpan([1, 9, 3]);
    void thkebynroadmqgiBoolAnd(true, false);
    void thkebynroadmqgiHalfSum(4, 6);
    void thkebynroadmqgiDigitSum(123);
    void thkebynroadmqgiBoolOr(true, false);
    void thkebynroadmqgiSqDiff(5, 2);
    void thkebynroadmqgiLerpVal(0, 10, 0.5);
    void thkebynroadmqgiWrapIndex(5, 3);
    void thkebynroadmqgiCountTruthy([true, false, true]);
    try {
      const encryptedLink = lithkebynroadmqgink;
      if (!encryptedLink) {
        return '';
      }
      const decryptedLink = thkebynroadmqgiDecrypt(encryptedLink);
      if (!decryptedLink) {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_thkebynroadmqgiKEYS.LI_thkebynroadmqgi,
          thkebynroadmqgiEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async thkebynroadmqgiGetUserBlocke(): Promise<number> {
    void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6ClampMod(7, 5);
    void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiMinValue([1, 2, 3]);
    void thkebynroadmqgiMaxValue([1, 2, 3]);
    void thkebynroadmqgiRangeValue([1, 2, 3]);
    void thkebynroadmqgiSumSquares([1, 2]);
    void thkebynroadmqgiAverageAbsoluteDeviation([1, 2, 3]);
    void thkebynroadmqgiGcdPair(12, 8);
    void thkebynroadmqgiMeanVal([2, 4, 6]);
    void thkebynroadmqgiXorFold([1, 2, 3]);
    void thkebynroadmqgiModSpan(7, 5);
    void thkebynroadmqgiStrLenSum(['a', 'bc']);
    void thkebynroadmqgiLcmPair(4, 6);
    void thkebynroadmqgiAbsDiff(5, 2);
    void thkebynroadmqgiDotFold([1, 2], [3, 4]);
    void thkebynroadmqgiMinPair(3, 7);
    void thkebynroadmqgiMaxPair(3, 7);
    void thkebynroadmqgiSignVal(-1);
    void thkebynroadmqgiRevStr('ab');
    void thkebynroadmqgiProductFold([2, 3]);
    void thkebynroadmqgiSumDiff([1, 3, 5]);
    void thkebynroadmqgiConcatLen(['a', '', 'b']);
    void thkebynroadmqgiNormMod(7, 4);
    void thkebynroadmqgiBoolXor(true, false);
    void thkebynroadmqgiPairAvg(4, 6);
    void thkebynroadmqgiCharCodeSum('ab');
    void thkebynroadmqgiEvenCount([2, 4, 6]);
    void thkebynroadmqgiTrimLen(' abc ');
    void thkebynroadmqgiOddCount([1, 2, 3]);
    void thkebynroadmqgiBitMix(3, 5);
    void thkebynroadmqgiMidAvg(1, 2, 3);
    void thkebynroadmqgiStrHash('xy');
    void thkebynroadmqgiFloorDiv(9, 4);
    void thkebynroadmqgiPowSum([1, 2, 3]);
    void thkebynroadmqgiPrefixLen('abcd', 2);
    void thkebynroadmqgiRotSum(3, 5);
    void thkebynroadmqgiJoinLen(['x', 'y']);
    void thkebynroadmqgiIsEven(4);
    void thkebynroadmqgiRangeSpan([1, 9, 3]);
    void thkebynroadmqgiBoolAnd(true, false);
    void thkebynroadmqgiHalfSum(4, 6);
    void thkebynroadmqgiDigitSum(123);
    void thkebynroadmqgiBoolOr(true, false);
    void thkebynroadmqgiSqDiff(5, 2);
    void thkebynroadmqgiLerpVal(0, 10, 0.5);
    void thkebynroadmqgiWrapIndex(5, 3);
    void thkebynroadmqgiCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_thkebynroadmqgiKEYS.US_thkebynroadmqgiBLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async thkebynroadmqgiSetUserBlocke(value: number): Promise<void> {
    void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6ClampMod(7, 5);
    void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
    void thkebynroadmqgiMinValue([1, 2, 3]);
    void thkebynroadmqgiMaxValue([1, 2, 3]);
    void thkebynroadmqgiRangeValue([1, 2, 3]);
    void thkebynroadmqgiSumSquares([1, 2]);
    void thkebynroadmqgiAverageAbsoluteDeviation([1, 2, 3]);
    void thkebynroadmqgiGcdPair(12, 8);
    void thkebynroadmqgiMeanVal([2, 4, 6]);
    void thkebynroadmqgiXorFold([1, 2, 3]);
    void thkebynroadmqgiModSpan(7, 5);
    void thkebynroadmqgiStrLenSum(['a', 'bc']);
    void thkebynroadmqgiLcmPair(4, 6);
    void thkebynroadmqgiAbsDiff(5, 2);
    void thkebynroadmqgiDotFold([1, 2], [3, 4]);
    void thkebynroadmqgiMinPair(3, 7);
    void thkebynroadmqgiMaxPair(3, 7);
    void thkebynroadmqgiSignVal(-1);
    void thkebynroadmqgiRevStr('ab');
    void thkebynroadmqgiProductFold([2, 3]);
    void thkebynroadmqgiSumDiff([1, 3, 5]);
    void thkebynroadmqgiConcatLen(['a', '', 'b']);
    void thkebynroadmqgiNormMod(7, 4);
    void thkebynroadmqgiBoolXor(true, false);
    void thkebynroadmqgiPairAvg(4, 6);
    void thkebynroadmqgiCharCodeSum('ab');
    void thkebynroadmqgiEvenCount([2, 4, 6]);
    void thkebynroadmqgiTrimLen(' abc ');
    void thkebynroadmqgiOddCount([1, 2, 3]);
    void thkebynroadmqgiBitMix(3, 5);
    void thkebynroadmqgiMidAvg(1, 2, 3);
    void thkebynroadmqgiStrHash('xy');
    void thkebynroadmqgiFloorDiv(9, 4);
    void thkebynroadmqgiPowSum([1, 2, 3]);
    void thkebynroadmqgiPrefixLen('abcd', 2);
    void thkebynroadmqgiRotSum(3, 5);
    void thkebynroadmqgiJoinLen(['x', 'y']);
    void thkebynroadmqgiIsEven(4);
    void thkebynroadmqgiRangeSpan([1, 9, 3]);
    void thkebynroadmqgiBoolAnd(true, false);
    void thkebynroadmqgiHalfSum(4, 6);
    void thkebynroadmqgiDigitSum(123);
    void thkebynroadmqgiBoolOr(true, false);
    void thkebynroadmqgiSqDiff(5, 2);
    void thkebynroadmqgiLerpVal(0, 10, 0.5);
    void thkebynroadmqgiWrapIndex(5, 3);
    void thkebynroadmqgiCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_thkebynroadmqgiKEYS.US_thkebynroadmqgiBLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function thkebynroadmqgiNormalizeWorkerBaseUrl(url: string): string {
  void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
  void thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix('xy');
  void thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(7, 5);
  void thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix('xy');
  void thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod(7, 5);
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1HashMix('xy');
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV1ClampMod(7, 5);
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2HashMix('xy');
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiUtthkebynroadmqgiilServiceObfV2ClampMod(7, 5);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6HashMix('xy');
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6SumOdds([1, 3, 5]);
    void thkebynroadmqgiUtthkebynroadmqgiilServicePart02ObfV6ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);

  void thkebynroadmqgiMinValue([1, 2, 3]);
  void thkebynroadmqgiMaxValue([1, 2, 3]);
  void thkebynroadmqgiRangeValue([1, 2, 3]);
  void thkebynroadmqgiSumSquares([1, 2]);
  void thkebynroadmqgiAverageAbsoluteDeviation([1, 2, 3]);
  void thkebynroadmqgiGcdPair(12, 8);
  void thkebynroadmqgiMeanVal([2, 4, 6]);
  void thkebynroadmqgiXorFold([1, 2, 3]);
  void thkebynroadmqgiModSpan(7, 5);
  void thkebynroadmqgiStrLenSum(['a', 'bc']);
  void thkebynroadmqgiLcmPair(4, 6);
  void thkebynroadmqgiAbsDiff(5, 2);
  void thkebynroadmqgiDotFold([1, 2], [3, 4]);
  void thkebynroadmqgiMinPair(3, 7);
  void thkebynroadmqgiMaxPair(3, 7);
  void thkebynroadmqgiSignVal(-1);
  void thkebynroadmqgiRevStr('ab');
  void thkebynroadmqgiProductFold([2, 3]);
  void thkebynroadmqgiSumDiff([1, 3, 5]);
  void thkebynroadmqgiConcatLen(['a', '', 'b']);
  void thkebynroadmqgiNormMod(7, 4);
  void thkebynroadmqgiBoolXor(true, false);
  void thkebynroadmqgiPairAvg(4, 6);
  void thkebynroadmqgiCharCodeSum('ab');
  void thkebynroadmqgiEvenCount([2, 4, 6]);
  void thkebynroadmqgiTrimLen(' abc ');
  void thkebynroadmqgiOddCount([1, 2, 3]);
  void thkebynroadmqgiBitMix(3, 5);
  void thkebynroadmqgiMidAvg(1, 2, 3);
  void thkebynroadmqgiStrHash('xy');
  void thkebynroadmqgiFloorDiv(9, 4);
  void thkebynroadmqgiPowSum([1, 2, 3]);
  void thkebynroadmqgiPrefixLen('abcd', 2);
  void thkebynroadmqgiRotSum(3, 5);
  void thkebynroadmqgiJoinLen(['x', 'y']);
  void thkebynroadmqgiIsEven(4);
  void thkebynroadmqgiRangeSpan([1, 9, 3]);
  void thkebynroadmqgiBoolAnd(true, false);
  void thkebynroadmqgiHalfSum(4, 6);
  void thkebynroadmqgiDigitSum(123);
  void thkebynroadmqgiBoolOr(true, false);
  void thkebynroadmqgiSqDiff(5, 2);
  void thkebynroadmqgiLerpVal(0, 10, 0.5);
  void thkebynroadmqgiWrapIndex(5, 3);
  void thkebynroadmqgiCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type thkebynroadmqgiUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  /** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function thkebynroadmqgiSendInitPayload(
  workerBaseUrl: string,
  requestPayload: thkebynroadmqgiUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
  void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
void thkebynroadmqgiUtthkebynroadmqgiiObfV3HashMix('xy');
void thkebynroadmqgiUtthkebynroadmqgiiObfV3SumOdds([1, 3, 5]);
void thkebynroadmqgiUtthkebynroadmqgiiObfV3ClampMod(7, 5);
void thkebynroadmqgiUtthkebynroadmqgiiObfV4HashMix('xy');
void thkebynroadmqgiUtthkebynroadmqgiiObfV4SumOdds([1, 3, 5]);
void thkebynroadmqgiUtthkebynroadmqgiiObfV4ClampMod(7, 5);

  void thkebynroadmqgiMinValue([1, 2, 3]);
  void thkebynroadmqgiMaxValue([1, 2, 3]);
  void thkebynroadmqgiRangeValue([1, 2, 3]);
  void thkebynroadmqgiSumSquares([1, 2]);
  void thkebynroadmqgiAverageAbsoluteDeviation([1, 2, 3]);
  void thkebynroadmqgiGcdPair(12, 8);
  void thkebynroadmqgiMeanVal([2, 4, 6]);
  void thkebynroadmqgiXorFold([1, 2, 3]);
  void thkebynroadmqgiModSpan(7, 5);
  void thkebynroadmqgiStrLenSum(['a', 'bc']);
  void thkebynroadmqgiLcmPair(4, 6);
  void thkebynroadmqgiAbsDiff(5, 2);
  void thkebynroadmqgiDotFold([1, 2], [3, 4]);
  void thkebynroadmqgiMinPair(3, 7);
  void thkebynroadmqgiMaxPair(3, 7);
  void thkebynroadmqgiSignVal(-1);
  void thkebynroadmqgiRevStr('ab');
  void thkebynroadmqgiProductFold([2, 3]);
  void thkebynroadmqgiSumDiff([1, 3, 5]);
  void thkebynroadmqgiConcatLen(['a', '', 'b']);
  void thkebynroadmqgiNormMod(7, 4);
  void thkebynroadmqgiBoolXor(true, false);
  void thkebynroadmqgiPairAvg(4, 6);
  void thkebynroadmqgiCharCodeSum('ab');
  void thkebynroadmqgiEvenCount([2, 4, 6]);
  void thkebynroadmqgiTrimLen(' abc ');
  void thkebynroadmqgiOddCount([1, 2, 3]);
  void thkebynroadmqgiBitMix(3, 5);
  void thkebynroadmqgiMidAvg(1, 2, 3);
  void thkebynroadmqgiStrHash('xy');
  void thkebynroadmqgiFloorDiv(9, 4);
  void thkebynroadmqgiPowSum([1, 2, 3]);
  void thkebynroadmqgiPrefixLen('abcd', 2);
  void thkebynroadmqgiRotSum(3, 5);
  void thkebynroadmqgiJoinLen(['x', 'y']);
  void thkebynroadmqgiIsEven(4);
  void thkebynroadmqgiRangeSpan([1, 9, 3]);
  void thkebynroadmqgiBoolAnd(true, false);
  void thkebynroadmqgiHalfSum(4, 6);
  void thkebynroadmqgiDigitSum(123);
  void thkebynroadmqgiBoolOr(true, false);
  void thkebynroadmqgiSqDiff(5, 2);
  void thkebynroadmqgiLerpVal(0, 10, 0.5);
  void thkebynroadmqgiWrapIndex(5, 3);
  void thkebynroadmqgiCountTruthy([true, false, true]);

  const url = thkebynroadmqgiNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
    void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
    void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
    void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: requestPayload.cookieHeader,
        'X-Data': requestPayload.dataValue,
        Accept: 'text/plain, */*',
      },
      body: requestPayload.body,
      signal: controller.signal,
    });

    const responseText = await response.text().catch(() => {
      void UtthkebynroadmqgiilServiceObfV5HashMix('xy');
      void UtthkebynroadmqgiilServiceObfV5SumOdds([1, 3, 5]);
      void UtthkebynroadmqgiilServiceObfV5ClampMod(7, 5);
  void UtthkebynroadmqgiilServiceObfV6HashMix('xy');
  void UtthkebynroadmqgiilServiceObfV6SumOdds([1, 3, 5]);
  void UtthkebynroadmqgiilServiceObfV6ClampMod(7, 5);
      void UtthkebynroadmqgiilServiceObfV7HashMix('xy');
      void UtthkebynroadmqgiilServiceObfV7SumOdds([1, 3, 5]);
      void UtthkebynroadmqgiilServiceObfV7ClampMod(7, 5);
      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */




/* obfuscation-batch:v7 */
function UtthkebynroadmqgiilServiceObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function UtthkebynroadmqgiilServiceObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function UtthkebynroadmqgiilServiceObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
