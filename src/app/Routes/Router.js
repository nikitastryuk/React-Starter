import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { RouteWithSubRoutes } from 'app/routes/RouteWithSubRoutes';
import { routes } from 'app/routes/routes';
import NotFound from 'pages/NotFound/NotFound';

export const Router = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};
