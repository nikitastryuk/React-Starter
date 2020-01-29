import { NavLink } from 'react-router-dom';
import React from 'react';

import { ROUTE_PATHS } from 'components/Routes/routePaths';

import styles from './Navbar.scss';

const NAVBAR_ROUTES = [
  { path: ROUTE_PATHS.LOGIN, label: 'LOGIN' },
  { path: ROUTE_PATHS.MAIN, label: 'MAIN' },
  { path: ROUTE_PATHS.LOGOUT, label: 'LOGOUT' },
];

export const Navbar = () => (
  <nav className={styles.navbar}>
    {NAVBAR_ROUTES.map(route => (
      <NavLink
        key={`${route.path}.${route.label}`}
        activeClassName={styles.active}
        className={styles.link}
        exact={true}
        to={route.path}
      >
        {route.label}
      </NavLink>
    ))}
  </nav>
);
