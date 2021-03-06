import { AppNavbar } from 'app/AppNavbar/AppNavbar';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/Auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'app/GlobalStyle';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Router } from 'app/routes/Router';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <StyledApp>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <AppNavbar />
            <Router />
          </StyledApp>
        </AuthProvider>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
