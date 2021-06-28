import '../styles/global.scss';
import { AppProps } from 'next/app';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { i18nContext } from '../lib/state/i18n';
import { useI18n } from '../lib/hooks/i18n.hook';

const App = ({ Component, pageProps }: AppProps) => {
  const i18n = useI18n();
  return (
    <i18nContext.Provider value={i18n}>
      <Component {...pageProps} />
    </i18nContext.Provider>
  );
};
export default appWithTranslation(App);
