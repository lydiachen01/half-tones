import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface DotStyledProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly position?: number;
    readonly backgroundColor?: string;
}

export const DotStyled = styled.button.attrs((props: DotStyledProps) => ({
    style: {
        left: `${props.position}%`,
    },
})) <DotStyledProps>`
    all: unset;
    z-index: 100;
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
   `;