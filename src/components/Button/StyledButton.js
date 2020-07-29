import styled from 'styled-components';

import { THEME_MODES } from 'app/theme/ThemeProvider';
import { styledMap } from 'utils/styledMap';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const VARIANT_PROP_NAME = 'variant';
const THEME_MODE_PROP_NAME = 'theme.themeMode';

const textColor = ({ theme }) =>
  styledMap(THEME_MODE_PROP_NAME, {
    [THEME_MODES.LIGHT]: styledMap(VARIANT_PROP_NAME, {
      [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.black,
      [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.black,
    }),
    [THEME_MODES.DARK]: styledMap(VARIANT_PROP_NAME, {
      [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.white,
      [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.white,
    }),
  });
const backgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.main,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.main,
  });
const disabledBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.dark,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.dark,
  });
const hoverBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.light,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.light,
  });
const hoverTextColor = ({ theme }) =>
  styledMap(THEME_MODE_PROP_NAME, {
    [THEME_MODES.LIGHT]: theme.palette.common.black,
    [THEME_MODES.DARK]: theme.palette.common.white,
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
    cursor: pointer;
  }
`;

// Initial version
// export const StyledButton = styled.button(
//   ({ theme, variant }) => css`
//     min-width: 100px;
//     padding: ${theme.spacing(2)} ${theme.spacing(4)};
//     color: ${(theme.themeMode === THEME_MODES.LIGHT &&
//       variant === BUTTON_VARIANTS.PRIMARY &&
//       theme.palette.common.black) ||
//     (theme.themeMode === THEME_MODES.LIGHT &&
//       variant === BUTTON_VARIANTS.SECONDARY &&
//       theme.palette.common.black) ||
//     (theme.themeMode === THEME_MODES.DARK &&
//       variant === BUTTON_VARIANTS.PRIMARY &&
//       theme.palette.common.white) ||
//     (theme.themeMode === THEME_MODES.DARK &&
//       variant === BUTTON_VARIANTS.SECONDARY &&
//       theme.palette.common.white)};
//     font-weight: bold;
//     font-size: 14px;
//     background-color: ${(variant === BUTTON_VARIANTS.PRIMARY &&
//       theme.palette.primary.main) ||
//     (variant === BUTTON_VARIANTS.SECONDARY && theme.palette.secondary.main)};
//     border: none;
//     border-radius: 3px;
//     outline: none;
//     &:disabled {
//       background-color: ${(variant === BUTTON_VARIANTS.PRIMARY &&
//         theme.palette.primary.dark) ||
//       (variant === BUTTON_VARIANTS.SECONDARY && theme.palette.secondary.dark)};
//     }
//     &:hover:enabled {
//       color: ${(theme.themeMode === THEME_MODES.LIGHT &&
//         theme.palette.common.black) ||
//       (theme.themeMode === THEME_MODES.DARK && theme.palette.common.white)};
//       background-color: ${(variant === BUTTON_VARIANTS.PRIMARY &&
//         theme.palette.primary.light) ||
//       (variant === BUTTON_VARIANTS.SECONDARY && theme.palette.common.black)};
//       cursor: pointer;
//     }
//   `,
// );

// Second version
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

// export const StyledButton = styled.button`
//   min-width: 100px;
//   padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
//   font-weight: bold;
//   font-size: 14px;
//   border: none;
//   border-radius: 3px;
//   outline: none;

// ${({ variant, theme, disabled }) =>
//     handleColoring(variant, disabled, theme.palette)};
// `;
