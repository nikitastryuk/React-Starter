/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';

import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'constants';
import { useAuthActions } from 'hooks/useAuthActions';
import axios from 'utils/axios';
import ls from 'utils/localStorage';

export const TOKEN_EXPIRED_STATUS_CODE = 403;
export const UNAUTHORIZED_STATUS_CODE = 401;
export const AUTHORIZATION_TOKEN_PREFIX = 'Bearer';

// Accessing private resource:
// 1. Valid access token - access granted
// 2. No/Invalid access token - 401, logout()
// 3. Expired access token - 403, refreshToken()
// 4. No/Expired/Invalid refresh token - 401, logout()

export function AxiosInterceptors() {
  const { logoutUser, refreshUserToken } = useAuthActions();

  useEffect(() => {
    // Set request interceptors
    const setAuthorizationHeaderInterceptor = axios.interceptors.request.use(
      makeSetAuthorizationHeaderInterceptor(),
      (error) => Promise.reject(error),
    );

    // Set response interceptors
    const unauthorizedResponseInterceptor = axios.interceptors.response.use(
      (response) => response,
      makeUnauthorizedResponseInterceptorErrorHandler(logoutUser),
    );
    const refreshUserTokenInterceptor = axios.interceptors.response.use(
      (response) => response,
      makeRefreshUserTokenInterceptorErrorHandler(refreshUserToken),
    );

    return () => {
      // Eject request interceptors
      axios.interceptors.request.eject(setAuthorizationHeaderInterceptor);

      // Eject response interceptors
      axios.interceptors.response.eject(unauthorizedResponseInterceptor);
      axios.interceptors.response.eject(refreshUserTokenInterceptor);
    };
  }, [logoutUser, refreshUserToken]);

  return null;
}

export function makeSetAuthorizationHeaderInterceptor() {
  return (config) => {
    const accessToken = ls.getItem(ACCESS_TOKEN_LS_KEY);
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `${AUTHORIZATION_TOKEN_PREFIX} ${accessToken}`,
      };
    }
    return config;
  };
}

export function makeUnauthorizedResponseInterceptorErrorHandler(logoutUser) {
  return (error) => {
    if (error?.response?.status === UNAUTHORIZED_STATUS_CODE) {
      return logoutUser();
    }
    return Promise.reject(error);
  };
}

export function makeRefreshUserTokenInterceptorErrorHandler(refreshUserToken) {
  return async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === TOKEN_EXPIRED_STATUS_CODE && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = ls.getItem(REFRESH_TOKEN_LS_KEY);
      if (refreshToken) {
        axios.defaults.headers.common.Authorization = `${AUTHORIZATION_TOKEN_PREFIX} ${await refreshUserToken()}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  };
}
