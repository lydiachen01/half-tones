'use client'

import Display from "./components/Display";
import Navbar from "./components/Navbar";
import ShapeOptions from "./components/ShapeOption";
import Slider from "./components/Slider/Slider";
import { useState } from 'react';

export default function Home() {

  const [value, setValue] = useState(15);

  const onChangeValue = (e: number) => {
        setValue(e);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mx-auto mx-[18vw]">
        <div className="grid grid-row-2 gap-8 mx-auto my-auto">
          <ShapeOptions />
          <Slider
                    min={1}
                    max={20}
                    marks={{ min: 1, max: 20 }}
                    value={value}
                    onChange={e => onChangeValue(e)}
                    step={1}
                    tooltipVisible
                    unit="€"
                    focusColor="#f8b500"
                    unFocusColor="#BBBBBB"
                ></Slider>
        </div>
        <Display />
      </div>
    </>
  );
}


/*
Slider.defaultProps = {
    step: 0.1,
    min: 0,
    max: 100,
    unit: "%",
    focusColor: "#f8b500",
    unFocusColor: "#BBBBBB",
};

 */