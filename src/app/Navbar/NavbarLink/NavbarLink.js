import PropTypes from 'prop-types';
import React from 'react';

import { StyledNavbarLink } from './StyledNavbarLink';

export const NavbarLink = ({ route }) => (
  <StyledNavbarLink
    activeClassName="active"
    className="navbarLink"
    exact={true}
    to={route.path}
  >
    {route.label}
  </StyledNavbarLink>
);

NavbarLink.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
