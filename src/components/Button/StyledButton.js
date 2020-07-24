import styled from 'styled-components';

// TODO: Dublicate
const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

function handleColoring(variant, disabled, palette) {
  function getColoring(textColor, backgroundColor, hoverColor) {
    const hover = hoverColor && `&:hover { background: ${hoverColor} }`;
    return `color: ${textColor}; background: ${backgroundColor}; ${hover};`;
  }
  if (disabled) {
    return getColoring(palette.common.white, palette.primary.light);
  }
  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return getColoring(
        palette.common.white,
        palette.primary.main,
        palette.primary.dark,
      );
    case BUTTON_VARIANTS.SECONDARY:
      return getColoring(
        palette.common.white,
        palette.secondary.light,
        palette.secondary.dark,
      );
    default:
      return new Error('Variant is required');
  }
}

export const StyledButton = styled.button`
  min-width: 100px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-weight: bold;
  font-size: 14px;

  ${({ variant, theme, disabled }) =>
    handleColoring(variant, disabled, theme.palette)};

  border: none;
  border-radius: 3px;
  outline: none;
`;
