import { Card } from 'components/Card/Card';
import { useTranslation } from 'react-i18next';
import React from 'react';

import styles from './Main.css';

export function Main() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <Card>
        <h1>{t('main.title', { count: 0 })}</h1>
        <h1>{t('main.items', { postProcess: 'interval', count: 0 })}</h1>
      </Card>
    </div>
  );
}
