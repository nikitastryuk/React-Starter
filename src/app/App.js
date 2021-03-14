import { Suspense, lazy } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';
import { useAuth } from 'hooks/useAuth';

import { StyledApp } from './StyledApp';

const AuthenticatedApp = lazy(() => import(/* webpackPrefetch: true */ './AuthenticatedApp'));
const UnAuthenticatedApp = lazy(() => import('./UnAuthenticatedApp'));

export function App() {
  const { user } = useAuth();

  return (
    <StyledApp>
      <ErrorBoundary FallbackComponent={() => <StyledMainLayoutPage>Error occured</StyledMainLayoutPage>}>
        <Suspense fallback={<StyledMainLayoutPage>Loading...</StyledMainLayoutPage>}>
          {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </Suspense>
      </ErrorBoundary>
    </StyledApp>
  );
}
