import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'app/routes/AppRoutes';
import { AuthProvider } from 'app/Auth/AuthProvider';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Navbar } from 'app/Navbar/Navbar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { authReducer, initialState } from 'app/Auth/useAuth';

import styles from './App.css';

export const App = () => {
  return (
    <AuthProvider reducer={authReducer} initialState={initialState}>
      <BrowserRouter>
        <div className={styles.app}>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Navbar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};
