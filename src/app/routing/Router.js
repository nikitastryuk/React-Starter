import { Switch } from 'react-router';

import { RouteWithSubRoutes } from 'app/routing/RouteWithSubRoutes';

export function Router({ routes }) {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
}
