import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { ROUTE_PATHS } from '../Routes/routePaths';
import { useAuth } from '../Auth/useAuth';

// Helper to simulate loading
function sleep(sec) {
  return new Promise(r => setTimeout(r, sec * 1000));
}

export function Login() {
  const history = useHistory();
  const [secretKey, setSecretKey] = useState('');
  const [{ user, isLoading }, actions] = useAuth();

  if (user) {
    return <Redirect to={ROUTE_PATHS.APP_MAIN} />;
  }

  if (isLoading) {
    return (
      <div style={{ padding: 50 }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  async function handleLogin() {
    actions.loginStart();
    await sleep(2);
    actions.loginSuccess({ user: 'userData' });
    history.push(ROUTE_PATHS.APP_MAIN);
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Enter secret key to authorize</h1>
      <input value={secretKey} onChange={e => setSecretKey(e.target.value)} />
      <button disabled={!secretKey} onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}
