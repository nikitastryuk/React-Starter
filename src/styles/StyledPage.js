import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  font-size: 100px;
  text-align: center;
`;
