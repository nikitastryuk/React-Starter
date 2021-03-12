// This Api will use mocked OAuth for authentication.
// After a successful login, the API token, refresh token, expiration date are returned.
// After the token expires, you'll need to request a new token using the refresh token.
// Then, you need to use the freshly retrieved token for the next API requests until, of course that token will expire as well.
// http://blog.logicwind.com/content/images/2020/05/WPQA0.png

const REQUEST_TIMEOUT = 2000;

export class AuthApi {
  // POST
  static login({ username, password }) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve({
          data: {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            // 30 seconds
            accessTokenExpiresAt: new Date().getTime() + 30000,
            username: 'Nikita',
          },
        });
        // resolve({ error: 'Wrong password' });
        // reject(new Error('Rejection'));
      }, REQUEST_TIMEOUT),
    );
  }

  // POST
  static refreshToken({ username, password }) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve({ data: { accessToken: 'newAccessToken', refreshToken: 'newRefreshToken' } });
        // resolve({ error: 'Wrong password' });
        // reject(new Error('Rejection'));
      }, REQUEST_TIMEOUT),
    );
  }
}
