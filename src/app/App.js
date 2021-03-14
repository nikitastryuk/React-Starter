import { Suspense, lazy } from 'react';

import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';
import { useAuth } from 'hooks/useAuth';

import { StyledApp } from './StyledApp';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnAuthenticatedApp = lazy(() => import('./UnAuthenticatedApp'));

export function App() {
  const { user } = useAuth();

  return (
    <StyledApp>
      <Suspense fallback={<StyledMainLayoutPage>Loading...</StyledMainLayoutPage>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </StyledApp>
  );
}
