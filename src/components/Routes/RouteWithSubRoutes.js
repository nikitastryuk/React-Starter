import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const routeShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
});

routeShape.routes = PropTypes.arrayOf(routeShape);

// Render a route that has sub routes
export const RouteWithSubRoutes = ({
  path,
  exact,
  component: Component,
  routes,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} routes={routes} />}
    />
  );
};

RouteWithSubRoutes.propTypes = routeShape.isRequired;
