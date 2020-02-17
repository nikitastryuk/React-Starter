import { Card } from 'components/Card/Card';
import { useTranslation } from 'react-i18next';
import React from 'react';

import styles from './NotFound.css';

export function NotFound() {
  const { t } = useTranslation();
  return (
    <div className={styles.notFound}>
      <Card>
        <h1>{t('notFound.title')}</h1>
      </Card>
    </div>
  );
}
