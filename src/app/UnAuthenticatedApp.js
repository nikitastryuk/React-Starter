import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { ROUTE_PATHS } from 'app/routing/routePaths';
import Login from 'pages/Login';

export default function UnAuthenticatedApp() {
  return (
    <Switch>
      <Route exact path={ROUTE_PATHS.LOGIN} component={Login} />
      <Redirect to={ROUTE_PATHS.LOGIN} />
    </Switch>
  );
}
