import styled from 'styled-components';

export const IntroLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .swiper-content{
    max-width: calc(100vw - 32px);
    margin-top: 32px;
    @media (min-width: 768px) {
      height: 65vh;
      margin-top: 55px;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 100px);
    img{
      width: 40vh;
      @media (max-width: 768px) {
        width: 280px;
      } 
    }
  }
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
  .get-started-actions{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    gap: 8px;
    @media (max-width: 768px) {
      position: fixed;
      bottom: 32px;
      width: 100%;
    } 
  }
  .swiper{
    width: 100%;
    height: 100%;
  }
  .swiper-pagination{
    bottom: auto !important;
    top: 300px !important;
    @media (min-width: 768px) {
      top: auto !important;
      bottom: 0px !important;
    } 
  }
  .swiper-pagination-bullet{
    background-color: var(--default-interface-indigo-400);
    width: 4px;
    height: 4px;
  }
`;
