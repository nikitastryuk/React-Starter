import styled from 'styled-components';

import { StyledAppNavbar } from 'app/AppNavbar/StyledAppNavbar';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    105deg,
    ${({ theme }) => theme.palette.primary.main} 50%,
    ${({ theme }) => theme.palette.secondary.main} 0
  );
  ${StyledAppNavbar} {
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;
