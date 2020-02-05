import React from 'react';

import { ROUTE_PATHS } from 'components/Routes/routePaths';

import { NavbarLink } from './NavbarLink/NavbarLink';
import styles from './Navbar.scss';

const NAVBAR_ROUTES = [
  { path: ROUTE_PATHS.LOGIN, label: 'LOGIN' },
  { path: ROUTE_PATHS.MAIN, label: 'MAIN' },
  { path: ROUTE_PATHS.LOGOUT, label: 'LOGOUT' },
];

export const Navbar = () => (
  <nav className={styles.navbar}>
    {NAVBAR_ROUTES.map(route => (
      <NavbarLink key={`${route.path}.${route.label}`} route={route} />
    ))}
  </nav>
);
