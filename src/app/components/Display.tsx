'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react';

const Display: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const defaultBackground = useMemo(() => {
        const dots = [];
        const dotSize = 3;
        const spacing = 20;

        for (let y = 0; y < dimensions.height; y += spacing) {
            for (let x = 0; x < dimensions.width; x += spacing) {
                dots.push(
                    <circle key={`dot-${x}-${y}`} cx={x} cy={y} r={dotSize / 2} fill="black" />
                );
            }
        }

        return (
            <svg height={dimensions.height} width={dimensions.width}>
                {dots}
            </svg>
        );
    }, [dimensions]);

    return (
        <div
            ref={ref}
            className="border border-2 border-slate-500 h-[30vh] w-[30vh] rounded"
            style={{ position: 'relative' }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}>
                {defaultBackground}
            </div>
        </div>
    );
};

const CenteredDisplay: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Display />
        </div>
    );
};

export default CenteredDisplay;
