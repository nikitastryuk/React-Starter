import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { memo } from 'react';

import { MainLayout } from 'components/MainLayout/MainLayout';
import { ROUTE_PATHS } from 'app/routing/routePaths';
import Main, { MainErrorBoundary } from 'pages/Main';
import NotFound from 'pages/NotFound';

function AuthenticatedApp() {
  return (
    <MainLayout>
      <Switch>
        <Route
          exact
          path={ROUTE_PATHS.MAIN}
          render={() => (
            <MainErrorBoundary>
              <Main />
            </MainErrorBoundary>
          )}
        />
        <Redirect from={ROUTE_PATHS.LOGIN} to={ROUTE_PATHS.MAIN} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default memo(AuthenticatedApp);
