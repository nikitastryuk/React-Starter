import { useTranslation } from 'react-i18next';

import { StyledApp } from 'app/StyledApp';
import { StyledPage } from 'styles/StyledPage';

export function AuthProviderLoading() {
  const { t } = useTranslation();

  return (
    <StyledApp>
      <StyledPage data-testid="auth-provider-loading" style={{ height: '100vh' }}>
        {t('global.loading')}
      </StyledPage>
      ;
    </StyledApp>
  );
}
