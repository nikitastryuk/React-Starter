import { useTranslation } from 'react-i18next';

import { LANGUAGES } from 'i18n/i18n';

import { StyledLanguageSwitcher } from './StyledLanguageSwitcher';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  }
  return (
    <StyledLanguageSwitcher>
      <button onClick={() => changeLanguage(LANGUAGES.RU)}>{LANGUAGES.RU}</button>
      <button onClick={() => changeLanguage(LANGUAGES.EN)}>{LANGUAGES.EN}</button>
    </StyledLanguageSwitcher>
  );
}
