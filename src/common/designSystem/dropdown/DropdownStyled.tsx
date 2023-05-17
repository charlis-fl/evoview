import styled from 'styled-components';

export const DropdownStyled = styled.label<{startingIcon: string, shortDropdown:boolean}>`
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


    .drop-button{
      border: 0;
      height: 100%;
      width: 100%;
      outline: none;
      background: transparent;
      padding: 0;
      input{
        border: 1.5px solid transparent;
        height: ${({ shortDropdown }) => shortDropdown ? '90%' : '100%'}; ;
        width: 100%;
        padding-right: 30px;
        border-radius: 8px;
        background: ${({ shortDropdown }) => shortDropdown ? '#FFFFFF' : 'var(--default-interface-gray-100)'};
        color: var(--default-interface-navy-400);
        font-size: 16px;
        line-height: 16px;
        font-family: 'DM Sans', sans-serif;
        box-sizing: border-box;
        outline: none;
        padding-left: ${({ startingIcon }) => startingIcon.length > 0 ? '40px' : '12px'};
        border-radius: ${({ shortDropdown }) => shortDropdown ? '24px' : '8px'};
        font-weight: ${({ shortDropdown }) => shortDropdown ? '700' : ''};
        ::placeholder {
          color: ${({ shortDropdown }) => shortDropdown ? '#1E1E32' : ''};
          opacity: 1; 
        }
        &.error{
          border: 1.5px solid var(--default-interface-apricot-500);
        }
        &.active{
          border: 1.5px solid var(--default-interface-indigo-400);
        }
        &:focus{
          border: 1.5px solid var(--default-interface-indigo-400);;
        }
      }
      .info-icon{
        position: absolute;
        right: 12px;
        bottom: 12px;
      }
      .server-status-icon{
        width: 16px;
        height: 16px;
      }
    }
    .info-icon{
      position: absolute;
      right: 32px;
      bottom: 12px;
      pointer-events: none;
    }
    .drop-icon{
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      height: 16px;
    }
    .starting-icon{
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      height: 16px;
    }
  }
  .custom-menu-items{
    background-color: var(--default-interface-white);
    box-shadow: 0px 4px 16px rgba(212, 206, 210, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    top: ${({ shortDropdown }) => shortDropdown ? '40px' : '50px'}; ;
    left: 0;
    z-index: 1;
    width: 100%;
    max-height: 192px;
    overflow-y: auto;
    outline: none;
    &::-webkit-scrollbar {
        width: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--default-interface-gray-500);
        &:hover {
            background: rgba(255,255,255,.2);
        }
    }
    .custom-item{
      padding: 8px;
      border-radius: 4px;
      border: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--default-interface-navy-400);
      font-family: 'DM Sans', sans-serif;
      background-color: transparent;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;
      &:focus, &:active{
        background-color: var(--default-interface-indigo-400);
        color: var(--default-interface-white);
      }
      &.active{
        background-color: var(--default-interface-indigo-400);
        color: var(--default-interface-white);
      }
      &.highlighted-item {
        background-color: var(--default-interface-indigo-400);
        color: #FFFFFF;
      }
    }
  }
  .text-error{
    position: absolute;
    top: 70px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: var(--default-interface-apricot-700);
    font-family: 'DM Sans',sans-serif;
    @supports (-webkit-touch-callout: none) {
      top: 63px;
    }
  }
`;
