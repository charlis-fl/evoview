import styled from 'styled-components';

export const BasicLifeFormGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 25px;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    button{
      &:first-of-type{
        margin-top: 50px;
      }
    }
  }
  button{
    height: 400px;
    width: 28vw;
    @media only screen and (max-width: 1120px) {
      width: 50vw;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
