import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function GrammarIcon({ color = 'black', size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 4h16v2H4V4zm0 6h10v2H4v-2zm0 6h16v2H4v-2z"
        fill={color}
      />
    </Svg>
  );
}