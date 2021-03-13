import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'constants';
import { AuthApi } from 'app/auth/authApi';
import ls from 'utils/localStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // TODO: Use useAsync hook for data/loading/error state
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ls.getItem(ACCESS_TOKEN_LS_KEY) && ls.getItem(REFRESH_TOKEN_LS_KEY)) {
      getUser();
    }
  }, []);

  // TODO: Loading styles/translation
  if (isUserLoading) {
    return 'Loading...';
  }

  return (
    <AuthContext.Provider
      value={[
        { user, isLoading, error },
        { loginUser, logoutUser, refreshUserToken },
      ]}
    >
      {children}
    </AuthContext.Provider>
  );

  async function loginUser() {
    try {
      setIsLoading(true);
      const { data } = await AuthApi.loginUser({ username: 'Username', password: 'Password' });
      setAuthTokens(data);
      setUser(data.user);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }

  async function getUser() {
    setIsUserLoading(true);
    const { data } = await AuthApi.getUser();
    setUser(data.user);
    setIsUserLoading(false);
  }

  async function refreshUserToken() {
    try {
      const response = await AuthApi.refreshUserToken({ refreshToken: ls.getItem(REFRESH_TOKEN_LS_KEY) });
      setAuthTokens(response.data);
      return response.data.accessToken;
    } catch (e) {
      return logoutUser();
    }
  }

  async function logoutUser() {
    setUser(null);
    ls.removeItem(ACCESS_TOKEN_LS_KEY);
    ls.removeItem(REFRESH_TOKEN_LS_KEY);
    // Do not await (supposed to reset tokens on backend)
    AuthApi.logoutUser();
  }

  function setAuthTokens({ refreshToken, accessToken }) {
    ls.setItem(ACCESS_TOKEN_LS_KEY, accessToken);
    ls.setItem(REFRESH_TOKEN_LS_KEY, refreshToken);
  }
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
