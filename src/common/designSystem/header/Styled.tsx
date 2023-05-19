import styled from 'styled-components';

export const HeaderStyled = styled.label`
  a{
    text-decoration: none;
  }
  .clickable{
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top:20px;
    margin-bottom: 20px;
    @media only screen and (max-width: 768px) {
        gap: 8px;
    }
  }
  .logo{
    img {
      width: 100%;
      height: 100%;
    }
    @media only screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
  }
  .brand-name{
    font-size: 32px;
    font-weight: 700;
    color: #253238;
    @media only screen and (max-width: 768px) {
        font-size: 18px;
        font-weight: 500;
    }
  }
`;
