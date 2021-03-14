import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { MainLayout } from 'components/MainLayout/MainLayout';
import { ROUTE_PATHS } from 'app/routing/routePaths';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

// Just for testing the Error boundary
// function Bomb() {
//   throw new Error('💥 CABOOM 💥');
// }

export default function AuthenticatedApp() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={ROUTE_PATHS.MAIN} component={Main} />
        <Redirect from={ROUTE_PATHS.LOGIN} to={ROUTE_PATHS.MAIN} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}
