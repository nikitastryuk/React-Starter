import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';

import { StyledPage } from 'styles/StyledPage';
import { useAsync } from 'hooks/useAsync';
import { useAuthActions } from 'hooks/useAuthActions';

const StyledLogin = styled.nav`
  display: flex;
`;

export default function Login() {
  const { t } = useTranslation();
  const { loginUser } = useAuthActions();
  const { isLoading, run, error } = useAsync();

  if (error) {
    return (
      <StyledPage>
        <h1>{error}</h1>
      </StyledPage>
    );
  }

  if (isLoading) {
    return (
      <StyledPage>
        <h1>{t('global.loading')}</h1>
      </StyledPage>
    );
  }

  return (
    <StyledPage>
      <StyledLogin>
        <h1>{t('login.title')}</h1>
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogin}>
          {t('login.buttonText')}
        </Button>
      </StyledLogin>
    </StyledPage>
  );

  async function handleLogin() {
    // Redirect happens inside AuthenticatedApp component
    run(loginUser());
  }
}
