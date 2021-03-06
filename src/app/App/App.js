import { Provider } from 'react-redux';

import { AppNavbar } from 'app/AppNavbar/AppNavbar';
import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'app/GlobalStyle';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Router } from 'app/routes/Router';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { store } from 'store/store';

import { StyledApp } from './StyledApp';

export function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <StyledApp>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <AppNavbar />
            <Router />
          </StyledApp>
        </BrowserRouter>
      </AppThemeProvider>
    </Provider>
  );
}
