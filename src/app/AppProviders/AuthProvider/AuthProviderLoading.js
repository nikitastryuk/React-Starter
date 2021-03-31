import { useTranslation } from 'react-i18next';

import { StyledApp } from 'app/StyledApp';
import { StyledPage } from 'styles/StyledPage';

export function AuthProviderLoading() {
  const { t } = useTranslation();

  return (
    <StyledApp>
      <StyledPage style={{ height: '100vh' }}>{t('global.loading')}</StyledPage>;
    </StyledApp>
  );
}
