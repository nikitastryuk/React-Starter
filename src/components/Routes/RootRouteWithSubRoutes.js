import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { NotFound } from '../NotFound/NotFound';
import { routeShape, RouteWithSubRoutes } from './RouteWithSubRoutes';

export const RootRouteWithSubRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

RootRouteWithSubRoutes.propTypes = {
  routes: PropTypes.arrayOf(routeShape).isRequired,
};
