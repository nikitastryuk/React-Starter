export function loginWithSecretKey({ secretKey }) {
  const TIMEOUT_IN_SECONDS = 2;

  if (!secretKey) {
    return new Error('Secret key is required');
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ user: 'userData' }), TIMEOUT_IN_SECONDS * 1000),
  );
}
