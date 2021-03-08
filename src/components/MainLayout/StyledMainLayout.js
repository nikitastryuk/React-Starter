import styled from 'styled-components';

export const StyledMainLayout = styled.div`
  display: flex;
`;

export const StyledMainLayoutContent = styled.div`
  width: 100%;
`;

export const StyledMainLayoutToolbar = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMainLayoutPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 150px;
  text-align: center;
`;
