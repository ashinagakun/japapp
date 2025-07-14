// app/gettabicon.tsx
import React from 'react';
import GrammarIcon from '../icons/GrammarIcon';
import ImportIcon from '../icons/ImportIcon';
import KanjiIcon from '../icons/KanjiIcon';
import ListenIcon from '../icons/ListenIcon';
import VocabularyIcon from '../icons/VocabularyIcon';

export function gettabicon(routeName: string, color: string, size: number) {
  const props = { width: size, height: size, fill: color };

  switch (routeName) {
    case 'import/index':
      return <ImportIcon {...props} />;
    case 'vocabulary/index':
      return <VocabularyIcon {...props} />;
    case 'kanji/index':
      return <KanjiIcon {...props} />;
    case 'grammar/index':
      return <GrammarIcon {...props} />;
    case 'listen/index':
      return <ListenIcon {...props} />;
    default:
      return null;
  }
}
