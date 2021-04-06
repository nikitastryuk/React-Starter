import { render } from '@testing-library/react';

import {
  AUTHORIZATION_TOKEN_PREFIX,
  AxiosInterceptors,
  TOKEN_EXPIRED_STATUS_CODE,
  UNAUTHORIZED_STATUS_CODE,
  makeRefreshUserTokenInterceptorErrorHandler,
  makeSetAuthorizationHeaderInterceptor,
  makeUnauthorizedResponseInterceptorErrorHandler,
} from 'app/AppProviders/AxiosInterceptors';
import { AuthProvider } from 'app/AppProviders/AuthProvider/AuthProvider';
import axios from 'utils/axios';
import ls from 'utils/localStorage';

jest.mock('utils/axios');

describe('<AxiosInterceptors />', () => {
  it('should add interceptors and clean up when unmounted', async () => {
    axios.interceptors = {
      request: {
        use: jest.fn(),
        eject: jest.fn(),
      },
      response: {
        use: jest.fn(),
        eject: jest.fn(),
      },
    };
    const { unmount } = render(<AxiosInterceptors />, { wrapper: AuthProvider });
    expect(axios.interceptors.request.use).toHaveBeenCalledTimes(1);
    expect(axios.interceptors.response.use).toHaveBeenCalledTimes(2);
    unmount();
    expect(axios.interceptors.request.eject).toHaveBeenCalledTimes(1);
    expect(axios.interceptors.response.eject).toHaveBeenCalledTimes(2);
  });
  describe('Set Authorization header interceptor', () => {
    it('should set header correctly', async () => {
      const accessToken = 'accessToken';
      jest.spyOn(ls, 'getItem').mockReturnValue(accessToken);
      const interceptor = makeSetAuthorizationHeaderInterceptor();
      const config = interceptor({});
      expect(config.headers.Authorization).toBe(`${AUTHORIZATION_TOKEN_PREFIX} ${accessToken}`);
    });
    it('should not set header if there is no stored token', async () => {
      jest.spyOn(ls, 'getItem').mockReturnValue(null);
      const interceptor = makeSetAuthorizationHeaderInterceptor();
      const config = interceptor({});
      expect(config).toStrictEqual({});
    });
  });
  describe('Unauthorization response interceptor', () => {
    it('should logout user if unauthorized response happens', async () => {
      const error = {
        response: {
          status: UNAUTHORIZED_STATUS_CODE,
        },
      };
      const mockedLogout = jest.fn();
      const interceptorErrorHandler = makeUnauthorizedResponseInterceptorErrorHandler(mockedLogout);
      interceptorErrorHandler(error);
      expect(mockedLogout).toHaveBeenCalledTimes(1);
    });
  });
  describe('Refresh user token interceptor', () => {
    beforeEach(() => {
      const refreshToken = 'refreshToken';
      jest.spyOn(ls, 'getItem').mockReturnValue(refreshToken);
    });
    it('should refresh if first expired token response happens', async () => {
      const error = {
        config: {
          _retry: false,
        },
        response: {
          status: TOKEN_EXPIRED_STATUS_CODE,
        },
      };
      const refreshTokenLogout = jest.fn();
      const interceptorErrorHandler = makeRefreshUserTokenInterceptorErrorHandler(refreshTokenLogout);
      interceptorErrorHandler(error);
      expect(refreshTokenLogout).toHaveBeenCalledTimes(1);
    });
    it('should not refresh if second expired token response happens', async () => {
      const error = {
        config: {
          _retry: true,
        },
        response: {
          status: TOKEN_EXPIRED_STATUS_CODE,
        },
      };
      const refreshTokenLogout = jest.fn();
      const interceptorErrorHandler = makeRefreshUserTokenInterceptorErrorHandler(refreshTokenLogout);
      const response = interceptorErrorHandler(error);
      expect(refreshTokenLogout).not.toHaveBeenCalled();
      await expect(response).rejects.toEqual(error);
    });
  });
});
