'use client'

import Display from "./components/Display";
import Navbar from "./components/Navbar";
import ShapeOptions from "./components/ShapeOption";
import Slider from "./components/Slider/Slider";
import { useState } from 'react';

export default function Home() {

  const [value1, setValue1] = useState(15);
  const [value2, setValue2] = useState(48);

  const onChangeSlider1 = (e: number) => {
        setValue1(e);
  };

  const onChangeSlider2 = (e: number) => {
      setValue2(e);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mx-40">
        <div className="grid grid-row-3 gap-8 mx-auto my-auto">
          <ShapeOptions />
          <Slider
            min={1}
            max={100}
            marks={{ min: 1, max: 100 }}
            value={value1}
            onChange={e => onChangeSlider1(e)}
            step={1}
            tooltipVisible
            focusColor="#f8b500"
            unFocusColor="#BBBBBB"
          ></Slider>
          <Slider
            min={1}
            max={100}
            marks={{ min: 1, max: 100 }}
            value={value2}
            onChange={e => onChangeSlider2(e)}
            step={1}
            tooltipVisible
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