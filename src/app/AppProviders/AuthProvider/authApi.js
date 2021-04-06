// This Api will use OAuth for authentication.
// After a successful login, the API access token (short-lived) and refresh token (long-lived) are returned.
// After the token expires (403 status from api), you'll need to request a new token using the refresh token.
// Then, you need to use the freshly retrieved token for the next API requests until, of course that token will expire as well.
// http://blog.logicwind.com/content/images/2020/05/WPQA0.png

const REQUEST_TIMEOUT = 1500;

const USER = {
  id: 1,
  email: 'test@gmail.com',
};

export class AuthApi {
  static loginUser() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          data: {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: USER,
          },
        });
      }, REQUEST_TIMEOUT),
    );
  }

  static getUser() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          data: {
            user: USER,
          },
        });
      }, REQUEST_TIMEOUT),
    );
  }

  static logoutUser() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, REQUEST_TIMEOUT),
    );
  }

  static refreshUserToken() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          data: {
            accessToken: 'newAccessToken',
            refreshToken: 'newRefreshToken',
          },
        });
      }, REQUEST_TIMEOUT),
    );
  }
}
