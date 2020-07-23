import { Redirect, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { ROUTE_PATHS } from 'app/routes/routePaths';
import { useAuth } from 'app/Auth/useAuth';
import { useTranslation } from 'react-i18next';

import styles from './Login.css';

export function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const [secretKey, setSecretKey] = useState('');
  const [{ user, isLoading, error }, actions] = useAuth();

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <Card>
          <h1>{error}</h1>
        </Card>
      </div>
    );
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

  if (user) {
    return <Redirect to={ROUTE_PATHS.MAIN} />;
  }

  async function handleLogin() {
    await actions.login({ secretKey });
    history.push(ROUTE_PATHS.MAIN);
  }

  return (
    <div className={styles.login}>
      <Card>
        <h1>{t('login.mainText')}</h1>
        <input
          data-testid="secret-key-input"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          disabled={!secretKey}
          onClick={handleLogin}
        >
          {t('login.buttonText')}
        </Button>
      </Card>
    </div>
  );
}
