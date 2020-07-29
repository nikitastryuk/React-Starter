import styled from 'styled-components';

import { StyledAppNavbarLink } from './AppNavbarLink/StyledAppNavbarLink';

export const StyledAppNavbar = styled.nav`
  display: flex;
  font-size: 20px;
  text-transform: uppercase;

  ${StyledAppNavbarLink}:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
