import { useContext } from 'react';

import { ACTIONS, AuthContext } from 'app/auth/AuthProvider';

import { loginWithSecretKey } from 'app/auth/authService';

export function useAuth() {
  const [state, dispatch] = useContext(AuthContext);

  async function login({ secretKey }) {
    try {
      dispatch({
        type: ACTIONS.LOGIN_START,
      });
      const { user } = await loginWithSecretKey({ secretKey });
      dispatch({
        type: ACTIONS.LOGIN_SUCCESS,
        user,
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.LOGIN_ERROR,
        error: error.message,
      });
    }
  }

  const logout = () =>
    dispatch({
      type: ACTIONS.LOGOUT,
    });

  return [
    state,
    {
      login,
      logout,
    },
  ];
}
