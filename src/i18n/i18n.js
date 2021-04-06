import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import { LANGUAGES } from 'constants';

import { en } from './locales/en';
import { ru } from './locales/ru';

i18next
  .use(LanguageDetector)
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    fallbackLng: LANGUAGES.EN,
    resources: {
      en,
      ru,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
