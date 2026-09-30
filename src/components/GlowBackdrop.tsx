import React from 'react';
import {StyleSheet, View} from 'react-native';

type Blob = {
  color: string;
  size: number;
  top: number;
  left?: number;
  right?: number;
  opacity: number;
};

type Props = {
  blobs?: Blob[];
};

const DEFAULT_BLOBS: Blob[] = [
  {color: '#FFC63F', size: 280, top: -60, left: -80, opacity: 0.07},
  {color: '#31BCD0', size: 260, top: 240, right: -90, opacity: 0.06},
  {color: '#EF5245', size: 220, top: 540, left: -70, opacity: 0.05},
];

/** Soft spotlight pools behind the content — the depth layer between bg and surfaces. */
export function GlowBackdrop({blobs = DEFAULT_BLOBS}: Props) {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {blobs.map((b, i) => (
        <View
          key={i}
          style={[
            styles.blob,
            {
              width: b.size,
              height: b.size,
              borderRadius: b.size / 2,
              backgroundColor: b.color,
              opacity: b.opacity,
              top: b.top,
              left: b.left,
              right: b.right,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
  },
});
