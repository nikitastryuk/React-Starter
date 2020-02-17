import { Redirect, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { ROUTE_PATHS } from 'components/Routes/routePaths';
import { useAuth } from 'components/Auth/useAuth';

import styles from './Login.css';

// Simulate loading
function sleep(sec) {
  return new Promise(r => setTimeout(r, sec * 1000));
}

export function Login() {
  const history = useHistory();
  const [secretKey, setSecretKey] = useState('');
  const [{ user, isLoading }, actions] = useAuth();

  if (user) {
    return <Redirect to={ROUTE_PATHS.MAIN} />;
  }

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <h1>Loading...</h1>
      </div>
    );
  }

  async function handleLogin() {
    actions.loginStart();
    await sleep(2);
    actions.loginSuccess({ user: 'userData' });
    history.push(ROUTE_PATHS.MAIN);
  }

  return (
    <div className={styles.login}>
      <h1>Enter secret key to authorize</h1>
      <input value={secretKey} onChange={e => setSecretKey(e.target.value)} />
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        disabled={!secretKey}
        onClick={handleLogin}
      >
        Log In
      </Button>
    </div>
  );
}
