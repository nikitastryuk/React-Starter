import React from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { useAuth } from 'app/Auth/useAuth';

import styles from './Logout.css';

export function Logout() {
  const [, { logout }] = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className={styles.logout}>
      <Card>
        <h1>Log Out</h1>
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogout}>
          Log Out
        </Button>
      </Card>
    </div>
  );
}
