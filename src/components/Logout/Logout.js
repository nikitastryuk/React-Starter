import React from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
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
      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}
