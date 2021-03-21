import { memo } from 'react';
import PropTypes from 'prop-types';

import { BUTTON_VARIANTS, StyledButton } from './StyledButton';

export const Button = memo(({ variant, disabled, children, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export { BUTTON_VARIANTS };
