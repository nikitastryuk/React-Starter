import { useContext } from 'react';

import { AuthContext } from 'app/auth/AuthProvider';

export function useAuth() {
  return useContext(AuthContext);
}
