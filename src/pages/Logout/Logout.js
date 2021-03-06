import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { logOutUser } from 'store/auth/authActions';

import { StyledLogout } from './StyledLogout';

export default function Logout() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleLogout() {
    dispatch(logOutUser());
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
