import { Route, Switch } from 'react-router-dom';
import React from 'react';

import { Login } from 'components/Login/Login';
import { Logout } from 'components/Logout/Logout';
import { Main } from 'components/Main/Main';
import { NotFound } from 'components/NotFound/NotFound';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { ROUTE_PATHS } from 'components/Routes/routePaths';

export function AppRoutes() {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.LOGIN} exact={true} component={Login} />
      <PrivateRoute path={ROUTE_PATHS.MAIN} exact={true} component={Main} />
      <PrivateRoute path={ROUTE_PATHS.LOGOUT} exact={true} component={Logout} />
      <Route component={NotFound} />
    </Switch>
  );
}
