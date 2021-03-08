import { LANGUAGES } from 'i18n/i18n';
import { useTranslation } from 'react-i18next';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';

import { StyledLanguageSwitcher } from './StyledLanguageSwitcher';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  }
  return (
    <StyledLanguageSwitcher>
      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={() => changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </Button>
      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={() => changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </Button>
    </StyledLanguageSwitcher>
  );
}
