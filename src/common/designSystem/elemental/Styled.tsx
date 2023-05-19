import styled from 'styled-components';

export const ElementalStyled = styled.button<{isSrc: boolean; showDetails?: boolean;}>`
    min-height: 200px;
    border: 0;
    outline: none;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    font-family: 'DM Sans', serif;
    background: #253238;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    @media screen and (max-width: 768px) {
        min-height: 200px;
    }
    &:hover {
        &::after{
            display: ${({ isSrc }) => isSrc ? 'block' : 'none'};
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
        }
        img {
            transform: scale(1.1);
        }
        .content {
            .description, .name {
                opacity: 1;
            }
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: 0.3s;
    }
    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 36px);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        .name{
            opacity: ${({ showDetails }) => showDetails ? '1' : '0'};
            color: white;
            margin-top: 10px;
            font-weight: 500;
            font-size: 1.5vw;
            transition: 0.3s;
            text-transform: capitalize;
            z-index: 3;
            &.no-image{
                opacity: 1;
            }
            @media only screen and (max-width: 768px) {
                font-size: 18px;
            }
        }
        .description{
            opacity: ${({ showDetails }) => showDetails ? '1' : '0'};
            color: white;
            font-weight: 300;
            font-size: 1.25vw;
            overflow: hidden;
            white-space: ${({ showDetails }) => showDetails ? 'normal' : 'nowrap'};;
            text-overflow: ellipsis;
            max-height: calc(100% - 30px);
            width: calc(100% - 32px);
            transition: 0.3s;
            z-index: 3;
            @media only screen and (max-width: 768px) {
                font-size: 12px;
            }
            p {
                white-space: normal;
            }
        }
    }
`;
