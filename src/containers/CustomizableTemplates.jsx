import React from "react";
import { TEMPLATES } from "../utils/Constants";
import ActionButtonStyle from "../utils/ActionButtonStyle";

function CustomizableTemplates() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full h-fit lg:justify-between items-start mt-10 lg:mt-20">
      <div className="flex w-full -m-14">
        <img 
        src={TEMPLATES} 
        alt="Image of template collection" />
      </div>
      <div className="flex flex-col items-center text-center lg:items-start lg:justify-center lg:text-left w-full h-full lg:w-[70%] lg:pl-36 mb-32">
        <h2 className="text-5xl lg:text-6xl w-full">Customizable Templates</h2>
        <p className="text-xl lg:text-2xl leading-8 my-8">
          Unleash possibilities with FlowCV's thoughtfully designed templates.
          Whether for resumes, cover letters, personal websites, or more, our
          customizable templates help you make a lasting impact.
        </p>
        <button>
            <ActionButtonStyle>See all templates</ActionButtonStyle>
        </button>
      </div>
    </div>
  );
}

export default CustomizableTemplates;
