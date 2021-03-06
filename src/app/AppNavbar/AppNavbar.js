import { AppNavbarLink } from 'app/AppNavbar/AppNavbarLink/AppNavbarLink';
import { ROUTE_PATHS } from 'app/routes/routePaths';
import { useTranslation } from 'react-i18next';

import { StyledAppNavbar } from './StyledAppNavbar';

export function AppNavbar() {
  const { t } = useTranslation();

  const NAVBAR_ROUTES = [
    { path: ROUTE_PATHS.LOGIN, label: t('navbar.login') },
    { path: ROUTE_PATHS.MAIN, label: t('navbar.main') },
    { path: ROUTE_PATHS.LOGOUT, label: t('navbar.logout') },
  ];

  return (
    <StyledAppNavbar>
      {NAVBAR_ROUTES.map((route) => (
        <AppNavbarLink key={`${route.path}.${route.label}`} route={route} />
      ))}
    </StyledAppNavbar>
  );
}
