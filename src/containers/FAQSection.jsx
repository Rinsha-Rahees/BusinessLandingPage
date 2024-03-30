import React from "react";
import Collapse from "../utils/Collapse";

function FAQSection() {
  return (
    <div className="flex flex-col items-center w-full my-24 p-6 text-[#200e32]">
      <h2 className="flex justify-center text-center text-2xl lg:text-4xl 2xl:text-6xl font-bold">
        Frequently Asked Questions
      </h2>
      <Collapse />
    </div>
  );
}

export default FAQSection;
