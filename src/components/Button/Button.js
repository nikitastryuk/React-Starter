import PropTypes from 'prop-types';

import { BUTTON_VARIANTS, StyledButton } from './StyledButton';

export function Button({ variant, disabled, children, onClick, ...rest }) {
  return (
    <StyledButton {...rest} onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  variant: BUTTON_VARIANTS.PRIMARY,
};

export { BUTTON_VARIANTS };
