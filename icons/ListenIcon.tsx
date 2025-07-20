import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ListenIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Path d="M12 5l7 7-7 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}