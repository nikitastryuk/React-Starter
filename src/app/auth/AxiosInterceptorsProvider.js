/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';

import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'constants';
import { useAuthActions } from 'hooks/useAuthActions';
import axios from 'utils/axios';
import ls from 'utils/localStorage';

const TOKEN_EXPIRED_STATUS_CODE = 403;
const UNAUTHORIZED_STATUS_CODE = 401;
const AUTHORIZATION_TOKEN_PREFIX = 'Bearer';

// Accessing private resource:
// 1. Valid access token - access granted
// 2. No/Invalid access token - 401, logout()
// 3. Expired access token - 403, refreshToken()
// 4. No/Expired/Invalid refresh token - 401, logout()

export function AxiosInterceptorsProvider({ children }) {
  const { logoutUser, refreshUserToken } = useAuthActions();
  useEffect(() => {
    // Request interceptor for API calls
    if (!axios.interceptors.request.handlers.length) {
      axios.interceptors.request.use(
        async (config) => {
          const accessToken = ls.getItem(ACCESS_TOKEN_LS_KEY);
          if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            config.headers = {
              Authorization: `${AUTHORIZATION_TOKEN_PREFIX} ${accessToken}`,
            };
          }
          return config;
        },
        (error) => {
          Promise.reject(error);
        },
      );
    }

    // Response interceptor for API calls
    if (!axios.interceptors.response.handlers.length) {
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        async (error) => {
          const originalRequest = error.config;
          if (error?.response?.status === UNAUTHORIZED_STATUS_CODE) {
            return logoutUser();
          }
          if (error?.response?.status === TOKEN_EXPIRED_STATUS_CODE && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = ls.getItem(REFRESH_TOKEN_LS_KEY);
            if (refreshToken) {
              axios.defaults.headers.common.Authorization = `${AUTHORIZATION_TOKEN_PREFIX} ${await refreshUserToken()}`;
              return axios(originalRequest);
            }
          }
          return Promise.reject(error);
        },
      );
    }
  }, [logoutUser, refreshUserToken]);

  return children;
}
