import React from "react";

function QuoteSection() {
  return (
    <div className="flex flex-col w-full h-fit mt-24 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center w-full">
        <div className="flex flex-col lg:text-right text-4xl lg:mr-5 w-full lg:max-w-36">
          <span>One platform</span>
        </div>
        <h1 className="text-6xl lg:hidden">Countless Possibilities</h1>
        <h1 className="text-9xl hidden lg:flex">Countless</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <p className="w-full lg:max-w-80 mr-8 text-lg">
          Resumer: Your Ultimate Destination for Creating Resumes and Complete
          Application Portfolios – Online and Offline. Begin Your Journey Today.
        </p>
        <h1 className="text-9xl hidden lg:flex">Possibilities</h1>
      </div>
    </div>
  );
}

export default QuoteSection;
