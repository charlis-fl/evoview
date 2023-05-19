import styled from 'styled-components';

export const IntroLayout = styled.div`
  min-height: 80vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .intro-container{
    max-height: 400px;
    max-width: 400px;
    @media only screen and (max-width: 768px) {
        padding: 0 24px;
    }
  }
`;
