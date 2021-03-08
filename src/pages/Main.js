import { useTranslation } from 'react-i18next';
import i18n from 'i18n/i18n';

import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';

const TEST = i18n.t('main.hi');

export default function Main() {
  const { t } = useTranslation();

  return (
    <StyledMainLayoutPage>
      {TEST}
      <h1>{t('main.title')}</h1>
      <h1>{t('main.items', { postProcess: 'interval', count: 0 })}</h1>
    </StyledMainLayoutPage>
  );
}
