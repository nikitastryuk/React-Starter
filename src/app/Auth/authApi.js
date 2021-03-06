const REQUEST_TIMEOUT = 2000;

export class AuthApi {
  static login({ username, password }) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve({ data: { accessToken: 'accessToken', username: 'Nikita' } });
        // resolve({ error: 'Wrong password' });
        // reject(new Error('Rejection'));
      }, REQUEST_TIMEOUT),
    );
  }
}
