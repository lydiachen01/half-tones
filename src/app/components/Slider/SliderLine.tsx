import styled from 'styled-components';

type LineFillProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: number;
    backgroundColor?: string;
};

export const LineFill = styled.div.attrs((props: LineFillProps) => ({
    style: {
        width: `${props.position}%`,
    },
})) <LineFillProps>`
    height: 100%;
    background-color: ${props => props.backgroundColor};
`
;
type LineStyledProps = {
    backgroundColor?: string;
};

export const LineStyled = styled.div<LineStyledProps>`
    height: 3px;
    background-color: ${props => props.backgroundColor};
`;