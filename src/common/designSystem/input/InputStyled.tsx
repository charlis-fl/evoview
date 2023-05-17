import styled from 'styled-components';

export const InputStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--default-interface-navy-400);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  flex: 1;
  letter-spacing: -0.01em;
  position: relative;
  &.error{
    margin-bottom: 40px;
    @supports (-webkit-touch-callout: none) {
      margin-bottom: 42px;
    }
  }
  &.date-type.error{
    margin-bottom: 50px;
    @supports (-webkit-touch-callout: none) {
      margin-bottom: 55px;
    }
  }
  .custom-input{
    height: 40px;
    position: relative;
    input{
      border: 1.5px solid transparent;
      height: 100%;
      width: 100%;
      padding-left: 12px;
      padding-right: 30px;
      border-radius: 8px;
      background: var(--default-interface-gray-100);
      color: var(--default-interface-navy-400);
      font-size: 16px;
      line-height: 16px;
      font-family: 'DM Sans', sans-serif;
      box-sizing: border-box;
      outline: none;
      &.error{
        border: 1.5px solid var(--default-interface-apricot-500);
      }
      &:focus{
        border: 1.5px solid var(--default-interface-indigo-400);
      }
      &.custom-font{
        font-family: 'Just Another Hand', cursive;
        font-weight: 400;
        font-size: 40px;
        line-height: 32px;
        letter-spacing: -0.01em;
        &:focus{
          border: unset;
        }
      }
    }
    .info-icon{
      position: absolute;
      right: 12px;
      bottom: 12px;
    }
    .visibility-button{
      position: absolute;
      right: 12px;
      top: 11px;
      border: 0;
      background-color: transparent;
    }
  }
  .text-error{
    position: absolute;
    top: 70px;
    font-weight: 400;
    font-size: 10px;
    text-align: left;
    line-height: 12px;
    font-family: 'DM Sans',sans-serif;
    color: var(--default-interface-apricot-700);
    @supports (-webkit-touch-callout: none) {
      top: 66px;
    }
  }
`;
