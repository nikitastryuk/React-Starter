import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { ROUTE_PATHS } from 'app/routes/routePaths';
// import { useAuth } from 'app/Auth/useAuth';
import { loginUser } from 'store/auth/authActions';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';

import { StyledLogin, StyledLoginError, StyledLoginLoading } from './StyledLogin';

export default function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { auth, isAuthenticated } = useAuth();
  const [secretKey, setSecretKey] = useState('');

  if (auth.error) {
    return (
      <StyledLoginError>
        <Card>
          <h1>{auth.error}</h1>
        </Card>
      </StyledLoginError>
    );
  }

  if (auth.loading) {
    return (
      <StyledLoginLoading>
        <Card>
          <h1>{t('login.loading')}</h1>
        </Card>
      </StyledLoginLoading>
    );
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTE_PATHS.MAIN} />;
  }

  async function handleLogin() {
    await dispatch(loginUser({ username: 'username', password: 'password' }));
    history.push(ROUTE_PATHS.MAIN);
  }

  return (
    <StyledLogin>
      <Card>
        <h1>{t('login.mainText')}</h1>
        <input data-testid="secret-key-input" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
        <Button variant={BUTTON_VARIANTS.PRIMARY} disabled={!secretKey} onClick={handleLogin}>
          {t('login.buttonText')}
        </Button>
      </Card>
    </StyledLogin>
  );
}
