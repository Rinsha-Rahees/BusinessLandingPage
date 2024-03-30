import React from "react";
import ImageSwiper from "../utils/ImageSwiper";

function Features() {
  return (
    <div className="flex flex-col lg:flex-row 2xl:flex-col items-center w-full h-fit mt-20">
      <h2 className="text-5xl lg:text-6xl text-center w-full lg:text-left lg:max-w-xs lg:pr-8 xl:max-w-sm 2xl:max-w-full 2xl:flex 2xl:justify-center">
        Quick, easy & flexible. Effortless editing with 
        <span className="text-[#ff5f64]"> live preview.</span>
      </h2>
      <ImageSwiper />
    </div>
  );
}

export default Features;
