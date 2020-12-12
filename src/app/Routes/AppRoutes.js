import { Route, Switch } from 'react-router-dom';

import { Login } from 'pages/Login/Login';
import { Logout } from 'pages/Logout/Logout';
import { Main } from 'pages/Main/Main';
import { NotFound } from 'pages/NotFound/NotFound';
import { PrivateRoute } from 'app/Routes/PrivateRoute';
import { ROUTE_PATHS } from 'app/Routes/routePaths';

export function AppRoutes() {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.LOGIN} exact component={Login} />
      <PrivateRoute path={ROUTE_PATHS.MAIN} exact component={Main} />
      <PrivateRoute path={ROUTE_PATHS.LOGOUT} exact component={Logout} />
      <Route component={NotFound} />
    </Switch>
  );
}
