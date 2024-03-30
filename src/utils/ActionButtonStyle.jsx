import React from "react";
import { SWIRL_UP_ARROW } from "../utils/Constants";

function ActionButtonStyle({children}) {
  return (
    <span className="flex items-center bg-[#200e32] text-white text-xl font-bold tracking-wider w-fit p-5 rounded-lg">
      <img className="w-8 mr-2" src={SWIRL_UP_ARROW} alt="Up Arrow - swirled" />
      {children}
    </span>
  );
}

export default ActionButtonStyle;
