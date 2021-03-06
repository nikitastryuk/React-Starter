import { useTranslation } from 'react-i18next';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { useAuth } from 'app/auth/useAuth';

import { StyledLogout } from './StyledLogout';

export default function Logout() {
  const { t } = useTranslation();
  const [, { logout }] = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <StyledLogout>
      <Card>
        <h1>{t('logout.title')}</h1>
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogout}>
          {t('logout.buttonText')}
        </Button>
      </Card>
    </StyledLogout>
  );
}
