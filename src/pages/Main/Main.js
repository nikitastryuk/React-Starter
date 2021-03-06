import { useTranslation } from 'react-i18next';
import i18n from 'i18n/i18n';

import { Card } from 'components/Card/Card';

import { StyledMain } from './StyledMain';

const TEST = i18n.t('main.hi');

export default function Main() {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Card>
        {TEST}
        <h1>{t('main.title', { count: 0 })}</h1>
        <h1>{t('main.items', { postProcess: 'interval', count: 0 })}</h1>
      </Card>
    </StyledMain>
  );
}
