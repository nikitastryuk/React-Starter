import styled from 'styled-components';

import { styledMap } from 'utils/styledMap';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const VARIANT_PROP_NAME = 'variant';

const textColor = styledMap(VARIANT_PROP_NAME, {
  [BUTTON_VARIANTS.PRIMARY]: ({ theme }) => theme.palette.common.white,
  [BUTTON_VARIANTS.SECONDARY]: ({ theme }) => theme.palette.common.black,
});
const hoverTextColor = styledMap(VARIANT_PROP_NAME, {
  [BUTTON_VARIANTS.PRIMARY]: ({ theme }) => theme.palette.primary.main,
  [BUTTON_VARIANTS.SECONDARY]: ({ theme }) => theme.palette.common.black,
});

const backgroundColor = styledMap(VARIANT_PROP_NAME, {
  [BUTTON_VARIANTS.PRIMARY]: ({ theme }) => theme.palette.primary.main,
  [BUTTON_VARIANTS.SECONDARY]: ({ theme }) => theme.palette.secondary.main,
});
const disabledBackgroundColor = styledMap(VARIANT_PROP_NAME, {
  [BUTTON_VARIANTS.PRIMARY]: ({ theme }) => theme.palette.primary.light,
  [BUTTON_VARIANTS.SECONDARY]: ({ theme }) => theme.palette.secondary.light,
});
const hoverBackgroundColor = styledMap(VARIANT_PROP_NAME, {
  [BUTTON_VARIANTS.PRIMARY]: ({ theme }) => theme.palette.primary.dark,
  [BUTTON_VARIANTS.SECONDARY]: ({ theme }) => theme.palette.secondary.dark,
});

export const StyledButton = styled.button`
  min-width: 100px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  color: ${textColor};
  font-weight: bold;
  font-size: 14px;
  background-color: ${backgroundColor};
  border: none;
  border-radius: 3px;
  outline: none;
  &:disabled {
    background-color: ${disabledBackgroundColor};
  }
  &:hover:enabled {
    color: ${hoverTextColor};
    background-color: ${hoverBackgroundColor};
  }
`;

// function handleColoring(variant, disabled, palette) {
//   function getColoring(textColor, backgroundColor, hoverColor) {
//     const hover = hoverColor && `&:hover { background: ${hoverColor} }`;
//     return `color: ${textColor}; background: ${backgroundColor}; ${hover};`;
//   }
//   if (disabled) {
//     return getColoring(palette.common.white, palette.primary.light);
//   }
//   switch (variant) {
//     case BUTTON_VARIANTS.PRIMARY:
//       return getColoring(
//         palette.common.white,
//         palette.primary.main,
//         palette.primary.dark,
//       );
//     case BUTTON_VARIANTS.SECONDARY:
//       return getColoring(
//         palette.common.white,
//         palette.secondary.light,
//         palette.secondary.dark,
//       );
//     default:
//       return new Error('Variant is required');
//   }
// }

/* ${({ variant, theme, disabled }) =>
    handleColoring(variant, disabled, theme.palette)}; */
