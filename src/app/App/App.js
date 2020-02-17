import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'app/Routes/AppRoutes';
import { AuthProvider } from 'app/Auth/AuthProvider';
import { Navbar } from 'app/Navbar/Navbar';
import { authReducer, initialState } from 'app/Auth/useAuth';

import styles from './App.css';

export const App = () => {
  // TODO: Theme-switcher
  // document.documentElement.setAttribute('data-theme', 'light');
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
