import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 275px;
  padding: 20px;
  font-size: 54px;
  text-transform: uppercase;
  > *:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;
