import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledPage } from 'styles/StyledPage';
import { useAuthState } from 'hooks/useAuthState';

import { StyledApp } from './StyledApp';

const AuthenticatedApp = lazy(() => import(/* webpackPrefetch: true */ './AuthenticatedApp'));
const UnAuthenticatedApp = lazy(() => import('./UnAuthenticatedApp'));

export function App() {
  const user = useAuthState();
  const { t } = useTranslation();

  return (
    <StyledApp>
      <ErrorBoundary FallbackComponent={() => <StyledPage>{t('app.error')}</StyledPage>}>
        <Suspense fallback={<StyledPage>{t('global.loading')}</StyledPage>}>
          {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </Suspense>
      </ErrorBoundary>
    </StyledApp>
  );
}
