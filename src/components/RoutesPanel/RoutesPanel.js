import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { routeShape } from '../Routes/routeShape';

// Render a nested hierarchy of route configs with unknown depth/breadth
export function RoutesPanel({ routes }) {
  // Render a single route as a list item link to the configs pathname
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {route.path && singleRoute(route)}
              <RoutesPanel routes={route.routes} />
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}

RoutesPanel.propTypes = {
  routes: PropTypes.arrayOf(routeShape).isRequired,
};
