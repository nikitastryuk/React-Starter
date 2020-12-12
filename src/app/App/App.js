import { AppNavbar } from 'app/AppNavbar/AppNavbar';
import { AppRoutes } from 'app/Routes/AppRoutes';
import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/Auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'app/GlobalStyle';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledApp } from './StyledApp';

console.log(2);

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
            <AppRoutes />
          </StyledApp>
        </AuthProvider>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
