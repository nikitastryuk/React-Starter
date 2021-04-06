import { useTranslation } from 'react-i18next';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { LANGUAGES } from 'constants';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={() => changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </Button>
      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={() => changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </Button>
    </div>
  );

  function changeLanguage(lng) {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }
}
