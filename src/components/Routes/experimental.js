// TODO: Supports nesting and allows map routes array. Is it more scalable than basic approach?
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import { Login } from 'components/Login/Login';
import { Logout } from 'components/Logout/Logout';
import { Main } from 'components/Main/Main';
import { NotFound } from 'components/NotFound/NotFound';
import { ROUTE_PATHS } from 'components/Routes/routePaths';
import { routeShape } from 'components/Routes/routeShape';
import { useAuth } from 'components/Auth/useAuth';

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

export const RootRouteWithSubRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};
RootRouteWithSubRoutes.propTypes = {
  routes: PropTypes.arrayOf(routeShape).isRequired,
};

export const PrivateRoute = ({ component, ...options }) => {
  const { user } = useAuth();
  const finalComponent = user ? component : Login;

  return <Route {...options} component={finalComponent} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

// An array of route configs, with nested objects/arrays in the same structure as app's routes
export const ROUTES = [
  {
    key: 'LOGIN',
    path: ROUTE_PATHS.LOGIN,
    component: Login,
    exact: true,
    isPublic: true,
  },
  {
    key: 'APP_ROOT',
    component: RootRouteWithSubRoutes,
    routes: [
      {
        key: 'APP_MAIN',
        path: ROUTE_PATHS.APP_MAIN,
        component: Main,
        exact: true,
      },
      {
        key: 'APP_LOGOUT',
        path: ROUTE_PATHS.APP_LOGOUT,
        component: Logout,
        exact: true,
      },
    ],
  },
];
