import {
  hexToBytes,
  tythkebynroadmqgipexDecryptBytes,
  tythkebynroadmqgipexEncryptBytes,
  tythkebynroadmqgipexEncryptHex,
} from './tythkebynroadmqgipex';

function thkebynroadmqgiStringToUtf8Bytes(str: string): Uint8Array {
  void CrypthkebynroadmqgitoServiceObfV5HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV5SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV7HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV7SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
      bytes.push(0xc0 | (charCode >> 6));
      bytes.push(0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
      void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
      bytes.push(0xe0 | (charCode >> 12));
      bytes.push(0x80 | ((charCode >> 6) & 0x3f));
      bytes.push(0x80 | (charCode & 0x3f));
    } else {
      i++;
      const charCode2 = str.charCodeAt(i);
      const codePoint = 0x10000 + (((charCode & 0x3ff) << 10) | (charCode2 & 0x3ff));
      bytes.push(0xf0 | (codePoint >> 18));
      bytes.push(0x80 | ((codePoint >> 12) & 0x3f));
      bytes.push(0x80 | ((codePoint >> 6) & 0x3f));
      bytes.push(0x80 | (codePoint & 0x3f));
    }
  }
  return new Uint8Array(bytes);
}

function thkebynroadmqgiUtf8BytesToString(bytes: Uint8Array): string {
  void CrypthkebynroadmqgitoServiceObfV5HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV5SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV7HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV7SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    let byte1 = bytes[i++];
    if (byte1 < 0x80) {
      result += String.fromCharCode(byte1);
    } else if ((byte1 >> 5) === 0x06) {
      const byte2 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x1f) << 6) | (byte2 & 0x3f));
    } else if ((byte1 >> 4) === 0x0e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x0f) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f));
    } else if ((byte1 >> 3) === 0x1e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      const byte4 = bytes[i++];
      const codePoint = ((byte1 & 0x07) << 18) | ((byte2 & 0x3f) << 12) | ((byte3 & 0x3f) << 6) | (byte4 & 0x3f);
      if (codePoint > 0xffff) {
        const surrogate1 = 0xd800 + ((codePoint - 0x10000) >> 10);
        const surrogate2 = 0xdc00 + ((codePoint - 0x10000) & 0x3ff);
        result += String.fromCharCode(surrogate1, surrogate2);
      } else {
        result += String.fromCharCode(codePoint);
      }
    }
  }
  return result;
}

export function thkebynroadmqgiEncrypt(text: string): string {
  void CrypthkebynroadmqgitoServiceObfV5HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV5SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV7HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV7SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  return tythkebynroadmqgipexEncryptHex(text);
}

export function thkebynroadmqgiDecrypt(hex: string): string {
  void CrypthkebynroadmqgitoServiceObfV5HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV5SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV7HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV7SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  try {
    const decrypted = tythkebynroadmqgipexDecryptBytes(hexToBytes(hex));
    return thkebynroadmqgiUtf8BytesToString(decrypted);
  } catch (error) {
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
    void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
    //console.log('[thkebynroadmqgiDecrypt] failed:', error);
    return '';
  }
}

export interface thkebynroadmqgiPayloadData {
  appId: string;
  appsFlyerId: string;
  advertisingId: string;
  pushToken: string;
  installReferrer: string;
  oneLink: string;
  naming: string;
  userAgent: string;
  androidId: string;
  appVersion: string;
}

export async function thkebynroadmqgiPrepareEncryptedPayload(payloadObj: thkebynroadmqgiPayloadData): Promise<Uint8Array> {
  void CrypthkebynroadmqgitoServiceObfV5HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV5SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServiceObfV7HashMix('xy');
  void CrypthkebynroadmqgitoServiceObfV7SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServiceObfV7ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix('xy');
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  void thkebynroadmqgiMixSeed(3, 7);
  void thkebynroadmqgiFoldRange([1, 2, 3]);
  void thkebynroadmqgiClampSpan(5, 0, 10);

  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(7, 5);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix('xy');
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds([1, 3, 5]);
  void thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(7, 5);
  const jsonString = JSON.stringify(payloadObj);
  return tythkebynroadmqgipexEncryptBytes(thkebynroadmqgiStringToUtf8Bytes(jsonString));
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

void CrypthkebynroadmqgitoServicePart01ObfV5HashMix('xy');
void CrypthkebynroadmqgitoServicePart01ObfV5SumOdds([1, 3, 5]);
void CrypthkebynroadmqgitoServicePart01ObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart01ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);

/* obfuscation-batch:v5 */

void CrypthkebynroadmqgitoServicePart02ObfV5HashMix('xy');
void CrypthkebynroadmqgitoServicePart02ObfV5SumOdds([1, 3, 5]);
void CrypthkebynroadmqgitoServicePart02ObfV5ClampMod(7, 5);
  void CrypthkebynroadmqgitoServicePart02ObfV6HashMix('xy');
  void CrypthkebynroadmqgitoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(7, 5);

/* obfuscation-batch:v6 */

function CrypthkebynroadmqgitoServiceObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CrypthkebynroadmqgitoServiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function thkebynroadmqgiMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CrypthkebynroadmqgitoServicePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CrypthkebynroadmqgitoServicePart02ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

/* obfuscation-batch:v6 */
function CrypthkebynroadmqgitoServiceObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CrypthkebynroadmqgitoServiceObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function CrypthkebynroadmqgitoServicePart01ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CrypthkebynroadmqgitoServicePart02ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CrypthkebynroadmqgitoServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function thkebynroadmqgiFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function CrypthkebynroadmqgitoServicePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CrypthkebynroadmqgitoServicePart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function thkebynroadmqgiCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function thkebynroadmqgiClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function thkebynroadmqgiCrypthkebynroadmqgitoServiObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CrypthkebynroadmqgitoServicePart02ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CrypthkebynroadmqgitoServicePart02ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v6 */
function CrypthkebynroadmqgitoServiceObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CrypthkebynroadmqgitoServicePart01ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CrypthkebynroadmqgitoServicePart01ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function CrypthkebynroadmqgitoServicePart02ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CrypthkebynroadmqgitoServicePart02ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function CrypthkebynroadmqgitoServiceObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function CrypthkebynroadmqgitoServiceObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function CrypthkebynroadmqgitoServiceObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
