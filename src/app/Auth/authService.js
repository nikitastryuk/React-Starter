export function loginWithSecretKey({ secretKey }) {
  if (!secretKey) {
    return new Error('Secret key is required');
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ user: 'userData' }), 2 * 1000),
  ); // 2 seconds
}
