import { Redirect, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { ROUTE_PATHS } from 'app/Routes/routePaths';
import { useAuth } from 'app/Auth/useAuth';
import { useTranslation } from 'react-i18next';

import styles from './Login.css';

// Simulate loading
function sleep(sec) {
  return new Promise(r => setTimeout(r, sec * 1000));
}

export function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const [secretKey, setSecretKey] = useState('');
  const [{ user, isLoading }, actions] = useAuth();

  if (user) {
    return <Redirect to={ROUTE_PATHS.MAIN} />;
  }

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Card>
          <h1>{t('login.loading')}</h1>
        </Card>
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
      <Card>
        <h1>{t('login.mainText')}</h1>
        <input value={secretKey} onChange={e => setSecretKey(e.target.value)} />
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          disabled={!secretKey}
          onClick={handleLogin}
        >
          {t('login.title')}
        </Button>
      </Card>
    </div>
  );
}
