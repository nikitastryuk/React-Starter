import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { RouteWithSubRoutes } from 'app/routing/RouteWithSubRoutes';
import { routes } from 'app/routing/routes';
import NotFound from 'pages/NotFound/NotFound';

export function Router() {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}
