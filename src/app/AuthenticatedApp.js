import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { MainLayout } from 'components/MainLayout/MainLayout';
import { ROUTE_PATHS } from 'app/routing/routePaths';
import Login from 'pages/Login';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

export function AuthenticatedApp() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={ROUTE_PATHS.LOGIN} component={Login} />
        <Route exact path={ROUTE_PATHS.MAIN} component={Main} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}
