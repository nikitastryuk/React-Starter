import React from 'react';

import { NavbarLink } from 'app/Navbar/NavbarLink/NavbarLink';
import { ROUTE_PATHS } from 'app/Routes/routePaths';

import styles from './Navbar.css';

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
