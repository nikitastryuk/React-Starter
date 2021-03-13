import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { ROUTE_PATHS } from 'app/routing/routePaths';
import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';
import { useAsync } from 'hooks/useAsync';
import { useAuth } from 'hooks/useAuth';

const StyledLogin = styled.nav`
  display: flex;
`;

export default function Login() {
  const history = useHistory();
  const { t } = useTranslation();
  const { loginUser } = useAuth();
  const { isLoading, run, error } = useAsync();

  if (error) {
    return (
      <StyledMainLayoutPage>
        <h1>{error}</h1>
      </StyledMainLayoutPage>
    );
  }

  if (isLoading) {
    return (
      <StyledMainLayoutPage>
        <h1>{t('login.loading')}</h1>
      </StyledMainLayoutPage>
    );
  }

  return (
    <StyledMainLayoutPage>
      <StyledLogin>
        <h1>{t('login.title')}</h1>
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogin}>
          {t('login.buttonText')}
        </Button>
      </StyledLogin>
    </StyledMainLayoutPage>
  );

  async function handleLogin() {
    await run(loginUser());
    history.push(ROUTE_PATHS.MAIN);
  }
}
