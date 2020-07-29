import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppNavbarLink = styled(NavLink)`
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
