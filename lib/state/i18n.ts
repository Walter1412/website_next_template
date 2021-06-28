import { createContext } from 'react';

export interface II18n {
  index: string;
  setCurrentIndex: (index: string) => void;
}

export const defaultValue = {
  index: '/',
  setCurrentIndex: () => {},
};

export const i18nContext = createContext<II18n>(defaultValue);
