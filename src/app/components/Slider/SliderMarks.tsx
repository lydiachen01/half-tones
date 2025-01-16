import styled from 'styled-components';

type MarksStyledProps = {
    position?: number;
    backgroundColor?: string;
};

export const MarksStyled = styled.div<MarksStyledProps>`
    z-index: 10;
    position: absolute;
    height: 8px;
    width: 2px;
    background-color: ${props => props.backgroundColor};
    left: ${props => `${props.position}%`};
    top: 50%;
    transform: translate(-50%, -50%);
   `;

export const MarksText = styled.div`
    position: absolute;
    bottom: 15px;
    transform: translate(-50%, 0);
   `;