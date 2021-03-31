import { useContext } from 'react';

import { AuthActionsContext } from 'app/AppProviders/AuthProvider/AuthProvider';

export function useAuthActions() {
  return useContext(AuthActionsContext);
}
