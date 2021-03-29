import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing(5)};
  font-size: ${({ fontsize }) => fontsize};
  text-align: center;
`;

StyledPage.defaultProps = {
  fontsize: '140px',
};
