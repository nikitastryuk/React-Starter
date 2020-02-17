import PropTypes from 'prop-types';
import React from 'react';

import styles from './Card.css';

export function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
