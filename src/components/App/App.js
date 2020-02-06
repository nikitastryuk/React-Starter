import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'components/Routes/AppRoutes';
import { AuthProvider } from 'components/Auth/AuthProvider';
import { Navbar } from 'components/Navbar/Navbar';
import { authReducer, initialState } from 'components/Auth/useAuth';

import styles from './App.css';

export const App = () => {
  // TODO: Theme-switcher
  document.documentElement.setAttribute('data-theme', 'light');
  return (
    <React.Fragment>
      <AuthProvider reducer={authReducer} initialState={initialState}>
        <BrowserRouter>
          <div className={styles.app}>
            <Navbar />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
};
