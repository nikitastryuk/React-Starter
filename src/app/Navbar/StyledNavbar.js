import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  font-size: 20px;
  text-transform: uppercase;

  a:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
