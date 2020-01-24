import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from '../NotFound/NotFound';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Logout } from '../Logout/Logout';
import { PrivateRoute } from './PrivateRoute';
import { ROUTE_PATHS } from './routePaths';

export function AppRoutes() {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.LOGIN} exact={true} component={Login} />
      <PrivateRoute path={ROUTE_PATHS.APP_MAIN} exact={true} component={Main} />
      <PrivateRoute
        path={ROUTE_PATHS.APP_LOGOUT}
        exact={true}
        component={Logout}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
