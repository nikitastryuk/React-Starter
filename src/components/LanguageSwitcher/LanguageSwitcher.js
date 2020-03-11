import { useTranslation } from 'react-i18next';
import React from 'react';

import { LANGUAGES } from 'i18n/i18n';
import styles from './LanguageSwitcher.css';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  }
  return (
    <div className={styles.languageSwitcher}>
      <button onClick={() => changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </button>
      <button onClick={() => changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </button>
    </div>
  );
}
