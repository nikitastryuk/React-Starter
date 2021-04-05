// TODO: Using HashRouter instead BrowserRouter to have gh-pages working
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthProvider } from 'app/AppProviders/AuthProvider/AuthProvider';
import { AxiosInterceptors } from 'app/AppProviders/AxiosInterceptors';
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
            <AxiosInterceptors />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </HashRouter>
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
