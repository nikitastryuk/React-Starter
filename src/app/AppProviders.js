import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';
// TODO: Remove from prod bundle
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/auth/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/auth/AxiosInterceptorsProvider';
import { GlobalStyle } from 'app/GlobalStyle';

const queryClient = new QueryClient();

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
          </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};