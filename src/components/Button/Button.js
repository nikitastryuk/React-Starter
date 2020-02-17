import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const Button = ({ variant, disabled, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, styles[variant], {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
