import { useContext } from 'react';

import { AuthActionsContext } from 'app/auth/AuthProvider';

export function useAuthActions() {
  return useContext(AuthActionsContext);
}
