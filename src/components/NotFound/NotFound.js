import { Card } from 'components/Card/Card';
import React from 'react';

import styles from './NotFound.css';

export const NotFound = () => (
  <div className={styles.notFound}>
    <Card>
      <h1>Not Found</h1>
    </Card>
  </div>
);
