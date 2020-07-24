import PropTypes from 'prop-types';
import React from 'react';

import { StyledButton } from './StyledButton';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export function Button({ variant, disabled, children, onClick }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
