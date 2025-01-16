'use client'

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { DotStyled } from './SliderDot';
import { Wrapper } from './SliderWrapper';
import { MarksStyled, MarksText } from './SliderMarks';
import { LineFill, LineStyled } from './SliderLine';

interface Marks {
    min: number;
    max: number;
   }

interface SliderProps {
    unFocusColor?: string;
    focusColor?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    theme?: any;
    onChange?: (value: number) => void;
    value?: number;
    defaultValue?: number;
    marks?: Marks;
    tooltipVisible?: boolean;
    step?: number;
    vertical?: boolean;
    min?: number;
    max?: number;
    unit?: string;
}

const Slider = (props: SliderProps) => {
    const {
        style,
        className,
        theme,
        onChange,
        value,
        marks,
        tooltipVisible,
        step,
        vertical,
        min,
        max,
        unit,
        unFocusColor,
        focusColor,
    } = props;

    const [enable, setEnable] = useState(false);
    const [positionCursorPercentage, setPositionCursorPercentage] = useState(
        value ? ((value - min) / (max - min)) * 100 : 0
    );
    const [positionCursor, setPositionCursor] = React.useState(value ? value : min);
    const slide = useRef(null);

    useEffect(() => {
        const rect = slide.current.getBoundingClientRect();
        const minPosition = 0;
        const maxPosition = rect.width;
        let positionAbsolute = positionCursorPercentage;
        window.onmousemove = (ev: MouseEvent): any => {
            const position = vertical ? rect.y + rect.height - ev.clientY : ev.clientX - rect.x;
            if (enable) {
                window.onmouseup = (evMouseUp: MouseEvent): any => {
                    setEnable(false);
                };
                if (position < minPosition) {
                    positionAbsolute = min;
                } else if (position > maxPosition) {
                    positionAbsolute = max;
                } else {
                    positionAbsolute = (position / maxPosition) * (max - min) + min;
                }

                if (
                    positionAbsolute <= positionCursorPercentage + step &&
                    positionAbsolute >= positionCursorPercentage - step
                ) {
                    positionAbsolute = positionCursorPercentage;
                }
                positionAbsolute = Math.round(positionAbsolute * (1 / step)) / (1 / step);
                if (onChange) {
                    onChange(positionAbsolute);
                } else {
                    setPositionCursor(positionAbsolute);
                }
            }
        };
    }, [enable]);

    useEffect(() => {
        if (value) {
            onChangePositionOfCursor(value);
        } else {
            onChangePositionOfCursor(positionCursor);
        }
    }, [value, positionCursor]);

    const onChangePositionOfCursor = (positionAbsolute: number) => {
        setPositionCursorPercentage(((positionAbsolute - min) / (max - min)) * 100);
    };

    const valueOfCursor =
        Math.round(((positionCursorPercentage / 100) * (max - min) + min) * step) / step;

    return (
        <Wrapper
            marks={marks ? true : false}
            ref={slide}
            className={className}
            style={style}
        >
            <LineStyled backgroundColor={unFocusColor}>
                <LineFill
                    backgroundColor={focusColor}
                    position={positionCursorPercentage}
                ></LineFill>
            </LineStyled>
            <DotStyled
                backgroundColor={focusColor}
                position={positionCursorPercentage}
                onMouseDown={() => setEnable(true)}
            >
            </DotStyled>

            {marks ? (
                <>
                    <MarksStyled
                        backgroundColor={focusColor}
                        position={((marks.min - min) / (max - min)) * 100}
                    >
                        <MarksText>
                            {marks.min}
                            {unit}
                        </MarksText>
                    </MarksStyled>
                    <MarksStyled
                        backgroundColor={focusColor}
                        position={((marks.max - min) / (max - min)) * 100}
                    >
                        <MarksText>
                            {marks.max}
                            {unit}
                        </MarksText>
                    </MarksStyled>
                </>
            ) : null}
        </Wrapper>
    );
}

export default Slider;