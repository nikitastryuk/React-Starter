import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppNavbar } from 'app/AppNavbar/AppNavbar';
import { AppRoutes } from 'app/routes/AppRoutes';
import { AuthProvider } from 'app/auth/AuthProvider';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import styles from './App.css';

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <AppNavbar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};
