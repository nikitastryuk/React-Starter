import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function handleColoring(active, palette) {
  function getColoring(textColor) {
    const hover = `&:hover { color: ${palette.primary.dark} }`;
    return `color: ${textColor}; ${hover};`;
  }
  if (active) {
    return getColoring(palette.primary.main);
  }
  return getColoring(palette.primary.light);
}

export const StyledNavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.light};
  }

  &.active {
    color: ${({ theme }) => theme.palette.common.black};
    &:hover {
      color: ${({ theme }) => theme.palette.secondary.light};
    }
  }
`;
