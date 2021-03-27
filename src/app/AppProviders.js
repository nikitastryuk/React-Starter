import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/auth/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/auth/AxiosInterceptorsProvider';
import { GlobalStyle } from 'app/GlobalStyle';

const queryClient = new QueryClient();

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppThemeProvider>
          <GlobalStyle />
          <AuthProvider>
            <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
          </AuthProvider>
        </AppThemeProvider>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
