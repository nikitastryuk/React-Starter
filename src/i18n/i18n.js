import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { en } from './locales/en';
import { ru } from './locales/ru';

export const LANGUAGES = {
  RU: 'ru',
  EN: 'en',
};

i18n.use(initReactI18next).init({
  resources: {
    ...en,
    ...ru,
  },
  lng: LANGUAGES.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
