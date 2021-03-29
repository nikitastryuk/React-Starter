import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/auth/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/auth/AxiosInterceptorsProvider';
import { GlobalStyle } from 'app/GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <AppThemeProvider>
          <GlobalStyle />
          <AuthProvider>
            <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
          </AuthProvider>
        </AppThemeProvider>
      </HashRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
