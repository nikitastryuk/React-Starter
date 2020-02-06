import React from 'react';

import { useAuth } from 'components/Auth/useAuth';

import styles from './Logout.css';

export function Logout() {
  const [, { logout }] = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className={styles.logout}>
      <h1>Log Out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
