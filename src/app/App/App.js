import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'app/routes/AppRoutes';
import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthProvider } from 'app/Auth/AuthProvider';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Navbar } from 'app/Navbar/Navbar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <StyledApp>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Navbar />
            <AppRoutes />
          </StyledApp>
        </AuthProvider>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
