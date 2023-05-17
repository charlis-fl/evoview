import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .heading {
    text-align: center;
    color: var(--default-interface-navy-400);
    font-size: calc(var(--default-font-size-5) * 1px);
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.03em;
    margin-top: 5vh;
    @media (max-width: 768px) {
       margin-top: 60px;
    }
  }
  .description {
    text-align: center;
    color: var(--default-interface-navy-400);
    font-size: calc(var(--default-font-size-3) * 1px);
    line-height: 24px;
    letter-spacing: -0.01em;
    margin-top: 4px;
    @media (min-width: 768px) {
      width: 400px;
    } 
  }
`;
