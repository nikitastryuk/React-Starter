import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Switch } from 'react-router';

import { AppNavbar } from 'app/AppNavbar/AppNavbar';
import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/auth/AuthProvider';
import { GlobalStyle } from 'app/GlobalStyle';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { RouteWithSubRoutes } from 'app/routing/RouteWithSubRoutes';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { routes } from 'app/routing/routes';
import NotFound from 'pages/NotFound/NotFound';

import { StyledApp } from './StyledApp';

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <AuthProvider>
          <GlobalStyle />
          <BrowserRouter>
            <StyledApp>
              <LanguageSwitcher />
              <ThemeSwitcher />
              <AppNavbar />
              <AppRoutes />
            </StyledApp>
          </BrowserRouter>
        </AuthProvider>
      </AppThemeProvider>
    </QueryClientProvider>
  );
}
