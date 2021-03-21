import { useContext } from 'react';

import { AuthStateContext } from 'app/auth/AuthProvider';

export function useAuthState() {
  return useContext(AuthStateContext);
}
