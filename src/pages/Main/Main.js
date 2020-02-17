import { Card } from 'components/Card/Card';
import { useTranslation } from 'react-i18next';
import React from 'react';

import styles from './Main.css';

export function Main() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <Card>
        <h1>{t('main.title')}</h1>
      </Card>
    </div>
  );
}
