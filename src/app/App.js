import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Switch } from 'react-router';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/auth/AuthProvider';
import { GlobalStyle } from 'app/GlobalStyle';
import { RouteWithSubRoutes } from 'app/routing/RouteWithSubRoutes';
import { routes } from 'app/routing/routes';
import NotFound from 'pages/NotFound';

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
              <AppRoutes />
            </StyledApp>
          </BrowserRouter>
        </AuthProvider>
      </AppThemeProvider>
    </QueryClientProvider>
  );
}
