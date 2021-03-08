import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';

import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { MainLayoutSidebar } from 'components/MainLayout/MainLayoutSidebar/MainLayoutSidebar';
import { RouteWithSubRoutes, routeShape } from 'app/routing/RouteWithSubRoutes';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import NotFound from 'pages/NotFound';

import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutToolbar } from './StyledMainLayout';

export function MainLayout({ routes }) {
  return (
    <StyledMainLayout>
      <MainLayoutSidebar />
      <StyledMainLayoutToolbar>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </StyledMainLayoutToolbar>

      <StyledMainLayoutContent>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </StyledMainLayoutContent>
    </StyledMainLayout>
  );
}

MainLayout.propTypes = {
  routes: PropTypes.arrayOf(routeShape).isRequired,
};
