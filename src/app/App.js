import { AuthenticatedApp } from 'app/AuthenticatedApp';
import { UnauthenticatedApp } from 'app/UnAuthenticatedApp';
import { useAuth } from 'hooks/useAuth';

import { StyledApp } from './StyledApp';

export function App() {
  const { user } = useAuth();

  return <StyledApp>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</StyledApp>;
}