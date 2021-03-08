import { useContext } from 'react';

import { ACTIONS, AuthContext } from 'app/auth/AuthProvider';
import { AuthApi } from 'app/auth/authApi';

export function useAuth() {
  const [state, dispatch] = useContext(AuthContext);

  async function login() {
    try {
      dispatch({
        type: ACTIONS.LOGIN_START,
      });
      const { data } = await AuthApi.login({ username: 'Username', password: 'Password' });
      dispatch({
        type: ACTIONS.LOGIN_SUCCESS,
        user: data.username,
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
