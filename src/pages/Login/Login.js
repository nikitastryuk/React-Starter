import { Redirect, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { ROUTE_PATHS } from 'app/routes/routePaths';
import { useAuth } from 'app/auth/useAuth';
import { useTranslation } from 'react-i18next';

import {
  StyledLogin,
  StyledLoginError,
  StyledLoginLoading,
} from './StyledLogin';

export function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const [secretKey, setSecretKey] = useState('');
  const [{ user, isLoading, error }, actions] = useAuth();

  if (error) {
    return (
      <StyledLoginError>
        <Card>
          <h1>{error}</h1>
        </Card>
      </StyledLoginError>
    );
  }

  if (isLoading) {
    return (
      <StyledLoginLoading>
        <Card>
          <h1>{t('login.loading')}</h1>
        </Card>
      </StyledLoginLoading>
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
    <StyledLogin>
      <Card>
        <h1>{t('login.mainText')}</h1>
        <input
          data-testid="secret-key-input"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          disabled={!secretKey}
          onClick={handleLogin}
        >
          {t('login.buttonText')}
        </Button>
      </Card>
    </StyledLogin>
  );
}
