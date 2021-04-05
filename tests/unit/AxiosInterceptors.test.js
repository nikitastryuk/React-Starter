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
    const { unmount } = render(<AxiosInterceptors />, { wrapper: AuthProvider });
    expect(axios.interceptors.request.use).toHaveBeenCalledTimes(3);
    expect(axios.interceptors.response.use).toHaveBeenCalledTimes(3);
    unmount();
    expect(axios.interceptors.request.eject).toHaveBeenCalledTimes(3);
    expect(axios.interceptors.response.eject).toHaveBeenCalledTimes(3);
  });
  it('should set request Authorization header correctly', async () => {
    const accessToken = 'accessToken';
    const url = '/test';
    jest.spyOn(ls, 'getItem').mockReturnValue(accessToken);
    const interceptor = makeSetAuthorizationHeaderInterceptor();
    const config = interceptor({ url });
    expect(config.headers.Authorization).toBe(`${AUTHORIZATION_TOKEN_PREFIX} ${accessToken}`);
  });
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
