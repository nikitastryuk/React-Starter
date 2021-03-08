import { StyledIconBase } from '@styled-icons/styled-icon';
import styled from 'styled-components';

export const StyledMainLayoutSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #131415;
  ${StyledIconBase} {
    width: 22px;
    height: 22px;
  }
`;

export const StyledMainLayoutSidebarLogo = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  padding: 0 ${({ theme }) => theme.spacing(12)};
  padding-top: ${({ theme }) => theme.spacing(12)};
  color: white;
  font-size: 50px;
`;

export const StyledMainLayoutSidebarLogoutButton = styled.button`
  align-self: center;
  margin-top: auto;
  padding-bottom: ${({ theme }) => theme.spacing(12)};
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  background: none;
  border: none;
  outline: none;
  &:hover {
    color: lightgreen;
    cursor: pointer;
  }
`;
