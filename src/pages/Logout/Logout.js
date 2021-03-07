import { useTranslation } from 'react-i18next';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { Route } from 'react-router-dom';
import { Router } from 'app/routing/Router';
import { Switch } from 'react-router';
import { useAuth } from 'app/auth/useAuth';

import { RouteWithSubRoutes } from 'app/routing/RouteWithSubRoutes';

import { StyledLogout } from './StyledLogout';

export default function Logout({ routes }) {
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
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </StyledLogout>
  );
}
