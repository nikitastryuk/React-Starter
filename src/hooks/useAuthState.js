import { useContext } from 'react';

import { AuthStateContext } from 'app/AppProviders/AuthProvider/AuthProvider';

export function useAuthState() {
  return useContext(AuthStateContext);
}
