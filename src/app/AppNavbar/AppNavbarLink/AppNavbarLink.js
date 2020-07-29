import PropTypes from 'prop-types';
import React from 'react';

import { StyledAppNavbarLink } from './StyledAppNavbarLink';

export const AppNavbarLink = ({ route }) => (
  <StyledAppNavbarLink activeClassName="active" exact={true} to={route.path}>
    {route.label}
  </StyledAppNavbarLink>
);

AppNavbarLink.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
