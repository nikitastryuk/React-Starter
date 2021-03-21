import { useTranslation } from 'react-i18next';

import { StyledPage } from 'styles/StyledPage';

const TEST_LABELS = {
  HI: 'main.title',
};

export default function Main() {
  const { t } = useTranslation();

  return (
    <StyledPage>
      {t(TEST_LABELS.HI)}
      <h1>{t('main.title')}</h1>
      <h1>{t('main.items', { postProcess: 'interval', count: 0 })}</h1>
    </StyledPage>
  );
}
