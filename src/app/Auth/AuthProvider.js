import { createContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'constants';
import { AuthApi } from 'app/auth/authApi';
import { StyledApp } from 'app/StyledApp';
import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';
import { useAsync } from 'hooks/useAsync';
import ls from 'utils/localStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { t } = useTranslation();
  const { data: user, setData, isLoading, run } = useAsync({ isLoading: !!areAuthTokensPresent() });

  useEffect(() => {
    if (areAuthTokensPresent()) {
      run(AuthApi.getUser());
    }
  }, [run]);

  if (isLoading) {
    return (
      <StyledApp>
        <StyledMainLayoutPage style={{ height: '100vh' }}>{t('auth.loading')}</StyledMainLayoutPage>;
      </StyledApp>
    );
  }

  // TODO: Test Memoization benefits before adding the complexity
  // const loginUser = useCallback(async () => {
  //   const { data } = await AuthApi.loginUser({ username: 'Username', password: 'Password' });
  //   setAuthTokens(data);
  //   setData(data.user);
  // }, [setData]);

  // const logoutUser = useCallback(() => {
  //   setData(null);
  //   ls.removeItem(ACCESS_TOKEN_LS_KEY);
  //   ls.removeItem(REFRESH_TOKEN_LS_KEY);
  //   // Do not await (supposed to reset tokens on backend)
  //   AuthApi.logoutUser();
  // }, [setData]);

  // const refreshUserToken = useCallback(async () => {
  //   try {
  //     const response = await AuthApi.refreshUserToken({ refreshToken: ls.getItem(REFRESH_TOKEN_LS_KEY) });
  //     setAuthTokens(response.data);
  //     return response.data.accessToken;
  //   } catch (e) {
  //     return logoutUser();
  //   }
  // }, [logoutUser]);

  // const value = useMemo(
  //   () => ({
  //     user,
  //     loginUser,
  //     logoutUser,
  //     refreshUserToken,
  //   }),
  //   [user, loginUser, logoutUser, refreshUserToken],
  // );

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, refreshUserToken }}>{children}</AuthContext.Provider>
  );

  async function loginUser() {
    const { data } = await AuthApi.loginUser({ username: 'Username', password: 'Password' });
    setAuthTokens(data);
    setData(data.user);
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
    setData(null);
    ls.removeItem(ACCESS_TOKEN_LS_KEY);
    ls.removeItem(REFRESH_TOKEN_LS_KEY);
    // Do not await (supposed to reset tokens on backend)
    AuthApi.logoutUser();
  }

  function setAuthTokens({ refreshToken, accessToken }) {
    ls.setItem(ACCESS_TOKEN_LS_KEY, accessToken);
    ls.setItem(REFRESH_TOKEN_LS_KEY, refreshToken);
  }

  function areAuthTokensPresent() {
    return !!(ls.getItem(ACCESS_TOKEN_LS_KEY) && ls.getItem(REFRESH_TOKEN_LS_KEY));
  }
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
