import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from 'react-error-boundary';

import { StyledPage } from 'styles/StyledPage';
import { useAuth } from 'hooks/useAuth';

import { StyledApp } from './StyledApp';

const AuthenticatedApp = lazy(() => import(/* webpackPrefetch: true */ './AuthenticatedApp'));
const UnAuthenticatedApp = lazy(() => import('./UnAuthenticatedApp'));

export function App() {
  const { user } = useAuth();
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
