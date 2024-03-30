import React from "react";
import { TOOLS } from "../utils/Constants";

function OurToolsSection() {
  return (
    <div className="flex flex-col items-center w-full h-fit my-20">
      <h2 className="font-semibold w-full text-center text-3xl lg:text-4xl 2xl:text-6xl text-[#200e32] my-14 underline decoration-wavy tracking-widest">
        Master Your Career Journey With Resumer Tools
      </h2>
      <div className="flex w-fit h-fit">
        <div className="grid sm:grid-cols-2 gap-4 2xl:gap-16 xl:grid-cols-4 w-full h-fit">
          {TOOLS.map((tool) => {
            return (
              <div
                key={tool?.id}
                className={`w-60 h-60 md:w-80 md:h-72 lg:w-96 xl:w-72 2xl:w-96 rounded-br-full rounded-t-full ${tool?.bgColor}`}>
                <div className="flex flex-col w-full h-full items-center justify-center text-white p-2">
                  <img 
                  className="w-12" 
                  src={tool?.icon} 
                  alt="icon" />
                  <h4 className="text-lg leading-10">{tool?.title}</h4>
                  <p className="text-sm max-w-52 leading-6">{tool?.subhead}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurToolsSection;
