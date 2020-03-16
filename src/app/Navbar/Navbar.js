import React from 'react';

import { NavbarLink } from 'app/Navbar/NavbarLink/NavbarLink';
import { ROUTE_PATHS } from 'app/routes/routePaths';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.css';

export function Navbar() {
  const { t } = useTranslation();

  const NAVBAR_ROUTES = [
    { path: ROUTE_PATHS.LOGIN, label: t('navbar.login') },
    { path: ROUTE_PATHS.MAIN, label: t('navbar.main') },
    { path: ROUTE_PATHS.LOGOUT, label: t('navbar.logout') },
  ];

  return (
    <nav className={styles.navbar}>
      {NAVBAR_ROUTES.map(route => (
        <NavbarLink key={`${route.path}.${route.label}`} route={route} />
      ))}
    </nav>
  );
}
