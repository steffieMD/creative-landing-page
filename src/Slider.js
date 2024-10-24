import React, { useState } from "react";
// import BtnSlider from './BtnSlider'
import dataSlider from "./dataSlider";

function Slider() {
  return (
    <div className="">
      {dataSlider.map((obj, index) => {
        return (
          <div>
            <img
              src={
                process.sourceMapsEnabled.PUBLIC_URL +
                `public/png/slider-img-${index + 1}.png`
              }
            />
          </div>
        );
      })}
      <div className=" ">
        <h4>Lean Product Roadmap</h4>
        <h4>2019 Project</h4>
      </div>
    </div>
  );
}
export default Slider;
