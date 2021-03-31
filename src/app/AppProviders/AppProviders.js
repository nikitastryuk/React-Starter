// TODO: Using HashRouter instead BrowserRouter to have gh-pages working
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthProvider } from 'app/AppProviders/AuthProvider/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/AppProviders/AxiosInterceptorsProvider';
import { GlobalStyle } from 'app/AppProviders/GlobalStyle';
import { QueryClientProvider } from 'app/AppProviders/QueryClientProvider';
import { ThemeProvider } from 'app/AppProviders/ThemeProvider/ThemeProvider';

import 'i18n/i18n';

export function AppProviders({ children }) {
  return (
    <QueryClientProvider>
      <HashRouter>
        <ThemeProvider>
          <GlobalStyle />
          <AuthProvider>
            <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
          </AuthProvider>
        </ThemeProvider>
      </HashRouter>
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
