import React from "react";
import { CAREER_TOOLS_LIST, TEMPLATES_LIST } from "../utils/Constants";
import IMAGES from "../images/Images"

function Footer() {
  return (
    <div className="flex flex-col items-center w-full bg-[#200e32] text-[#f0eeeb]">
      <div className="flex flex-col items-center w-full h-fit max-w-[95vw] p-3">
        <div className="flex flex-col justify-center text-center md:w-2/3 my-5 items-center">
          <h2 className="text-3xl md:text-5xl mb-12">
            Do you have any feedback for us?
          </h2>
          <div className="flex justify-center w-full">
            <input
              className="w-full p-5 rounded-lg bg-transparent border-2 border-[#f0eeeb] placeholder:italic placeholder:text-[#f0eeeb] placeholder:text-xl placeholder:invisible sm:placeholder:visible"
              placeholder="Enter your feedback here..."
            />
            <button className="bottom-0 w-fit right-0 -ml-12 mr-4">
              <img
                className="w-8"
                src={IMAGES?.send}
                alt="Send Icon"
              />
            </button>
          </div>
        </div>

        <div id="ourstory" className="flex flex-col items-center md:flex-row md:items-start justify-between text-xl my-20">
          <img
            className="w-24 mb-10 md:w-44 h-fit mt-2"
            src={IMAGES?.app_logo}
            alt="logo - A crescent moon like arc engulfing the half of capital case alphabet R"
          />
          <p
          className="md:ml-12">
            "We're a dynamic team hailing from diverse corners of the globe,
            united by a passion for revolutionizing the job search experience.
            Think of us as the trailblazers of career advancement, blending
            innovation with expertise to empower job seekers everywhere. Our
            mission? Simple: to streamline your journey to success, making it
            not just efficient, but downright enjoyable. With Resumer.io by your
            side, consider your job search game elevated to a whole new level.
            From crafting standout resumes to providing invaluable career
            insights, we're here to make your job search journey smoother, more
            enjoyable, and ultimately more successful. Let's embark on this
            journey together, because your success is our success."
          </p>
        </div>

        <div className="flex w-full max-w-2xl justify-between text-lg mb-20">
          <div>
            <h3 className="text-xl leading-10">CAREER TOOLS</h3>
            <ul>
             {CAREER_TOOLS_LIST.map((tool) => <li className="leading-10" key={tool}>{tool}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl leading-10">TEMPLATES</h3>
          <ul>
             {TEMPLATES_LIST.map((tool) => <li key={tool} className="leading-10">{tool}</li>)}
            </ul>
          </div>
        </div>

        <div className="flex justify-between w-1/2 mb-20">
          {IMAGES.socials.map((url) => <button key={url} className="p-2" ><img src={url} className="w-8" alt="Social Media Icon"/></button>)}
        </div>


        <div className="flex justify-center w-1/2">© Resumer 2024</div>

      </div>
    </div>
  );
}

export default Footer;
