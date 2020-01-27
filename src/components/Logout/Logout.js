import React from 'react';

import { useAuth } from 'components/Auth/useAuth';

import styles from './Logout.scss';

export function Logout() {
  const [, { logout }] = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className={styles.SameClassname} style={{ padding: 50 }}>
      <h1>Log Out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
