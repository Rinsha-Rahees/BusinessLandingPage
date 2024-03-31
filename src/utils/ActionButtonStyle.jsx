import React from "react";
import IMAGES from "../images/Images";

function ActionButtonStyle({children}) {
  return (
    <span className="flex items-center bg-[#200e32] text-white text-xl font-bold tracking-wider w-fit p-5 rounded-lg">
      <img className="w-8 mr-2" src={IMAGES?.swirl_up_arrow} alt="Up Arrow - swirled" />
      {children}
    </span>
  );
}

export default ActionButtonStyle;
