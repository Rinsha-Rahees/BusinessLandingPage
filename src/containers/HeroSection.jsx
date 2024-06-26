import React from "react";
import IMAGES from "../images/Images";
import ActionButtonStyle from "../utils/ActionButtonStyle";

function HeroSection() {
  return (
    <div id="home"
    className="flex flex-col-reverse md:flex-row md:justify-between w-full h-fit mt-36 md:mt-44">
      <div className="Hero-Desc flex flex-col items-center md:items-start justify-center w-full mr-4 lg:mr-32 mt-12 md:mt-0">
        <img
          className="w-44 h-fit"
          src={IMAGES?.award}
          alt="Resume builder of the year badge"
        />
        <h1 className="text-5xl md:text-7xl text-center md:text-left py-8">Unlock Your Dream Career</h1>
        <h3 className="text-xl md:text-2xl text-center md:text-left font-bold">
          The Only Resume Builder You'll Ever Need. Effortless. Customizable.
          Result-Driven.
        </h3>
        <p className="text-xl md:text-2xl text-center md:text-left py-10">
          Ready to unlock your dream job? Let Resumer lead the way. Curate
          stunning resumes, get invaluable feedback, and share your story with
          the world. Your next big career move starts now.
        </p>
        <button>
        <ActionButtonStyle>Take Action - It's Free ✨</ActionButtonStyle>
        </button>
        <div className="flex flex-col md:flex-row items-center w-full font-bold text-xl mt-12">
          <img
            className="w-72 mr-12"
            src={IMAGES?.client_comment}
            alt="Comment from a client - 5 star rating"
          />
          <img
            className="w-72"
            src={IMAGES?.customer_review}
            alt="Comment from a client - 5 star rating"
          />
        </div>
      </div>
      <div className="Hero-Resume-Section flex w-fit h-fit bg-black shadow-2xl p-3 rounded-lg">
        <img
          className="w-full h-fit"
          src={IMAGES?.hero_resume}
          alt="Demo resume with pastel blue and pink theme"
        />
      </div>
    </div>
  );
}

export default HeroSection;
