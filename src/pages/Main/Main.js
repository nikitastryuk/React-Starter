import { Card } from 'components/Card/Card';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { StyledMain } from './StyledMain';

export function Main() {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Card>
        <h1>{t('main.title', { count: 0 })}</h1>
        <h1>{t('main.items', { postProcess: 'interval', count: 0 })}</h1>
      </Card>
    </StyledMain>
  );
}
