/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { StyledButtonProps } from 'common/designSystem/button/types';

export const ButtonStyled = styled.button<StyledButtonProps>`
  background: ${(p) => p.usage === 'link' || p.usage === 'border-less' ? 'transparent' : 'var(--default-interface-indigo-400)'};
  color: ${(p) => p.usage === 'border-less' ? 'var(--default-interface-indigo-400)' : p.usage === 'link' ? 'var(--default-interface-navy-400)' : 'var(--default-interface-white)'};
  border: ${(p) => p.usage === 'border-less' ? '2px solid var(--default-interface-indigo-400)' : '0'};
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;
  line-height: 16px;
  font-family: 'DM Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
  @media only screen and (max-width: 375px) {
      font-size: 12px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
    &:hover{
      background: ${(p) => p.usage === 'link' || p.usage === 'border-less' ? 'transparent' : 'var(--default-interface-indigo-400)'};
    }
  }
  &:hover{
    background:  ${(p) => p.usage === 'border-less' ? '#DEDBEA' : p.usage === 'link' ? 'var(--default-interface-gray-400)' : 'var(--default-interface-indigo-500)'};
  }
  .icon{
    width: 16px;
    height: 16px;
  }
`;
