import styled, {css} from 'styled-components';

type WrapperProps = {
    marks?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    ${props => props.marks && css`
        margin-top: 25px;
        margin-left: 15px;
        margin-right: 15px;
    `}
`;