import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from 'components/NotFound/NotFound';
import { Login } from 'components/Login/Login';
import { Main } from 'components/Main/Main';
import { Logout } from 'components/Logout/Logout';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { ROUTE_PATHS } from 'components/Routes/routePaths';

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
