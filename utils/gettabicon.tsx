import React from 'react';
import GrammarIcon from '../icons/GrammarIcon';
import ImportIcon from '../icons/ImportIcon';
import KanjiIcon from '../icons/KanjiIcon';
import ListenIcon from '../icons/ListenIcon';
import VocabularyIcon from '../icons/VocabularyIcon';

export function getTabIcon(name: string, color: string, size: number) {
  switch (name) {
    case 'import':
      return <ImportIcon color={color} size={size} />;
    case 'vocabulary':
      return <VocabularyIcon color={color} size={size} />;
    case 'kanji':
      return <KanjiIcon color={color} size={size} />;
    case 'grammar':
      return <GrammarIcon color={color} size={size} />;
    case 'listen':
      return <ListenIcon color={color} size={size} />;
    default:
      return null;
  }
}