import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './AppNavbarLink.css';

export const AppNavbarLink = ({ route }) => (
  <NavLink
    activeClassName={styles.active}
    className={styles.navbarLink}
    exact={true}
    to={route.path}
  >
    {route.label}
  </NavLink>
);

AppNavbarLink.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
