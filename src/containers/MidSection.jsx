import React from "react";
import ActionButtonStyle from "../utils/ActionButtonStyle";

function MidSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full h-fit lg:mt-12">
      <h2 className="text-5xl lg:text-6xl w-full lg:pr-10">
        Why settle for good when you can be outstanding?
      </h2>
      <div className="flex flex-col items-start w-full h-full mt-12 lg:mt-0">
        <span className="text-xl lg:text-2xl font-semibold">
          Tired of generic templates and complicated layouts?
        </span>
        <p className="text-xl lg:text-2xl leading-8">
          Resumer takes the hassle out of resume design. Choose from fully
          customizable templates that adapt to your needs, not the other way
          around. Share your masterpiece for that final polish and take control
          of your career journey.
        </p>
        <button className="mt-8">
          <ActionButtonStyle>Start crafting your resume</ActionButtonStyle>
        </button>
      </div>
    </div>
  );
}

export default MidSection;
