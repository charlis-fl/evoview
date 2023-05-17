import styled from 'styled-components';
import { StyledColorButtonProps } from 'common/designSystem/colorButton/types';

export const ButtonStyled = styled.button<StyledColorButtonProps>`
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  border: 0;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;
  background-color: ${(p) => p.backgroundColor};
  color: ${(p) => p.color};
  font-family: 'DM Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
  @media only screen and (max-width: 375px) {
      font-size: 12px;
  }
  &:hover{
    background-color:  ${(p) => p.hoverColor}
  }
  .icon{
    width: 16px;
    height: 16px;
  }
`;
