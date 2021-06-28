import { useState, useCallback } from 'react';
import { II18n } from '../state/i18n';

export const useI18n = (): II18n => {
  const [index, setIndex] = useState('/welcome');
  const setCurrentIndex = useCallback((currentIndex: string): void => {
    setIndex(currentIndex);
  }, []);
  return {
    index,
    setCurrentIndex,
  };
};
