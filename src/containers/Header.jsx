import React, { useState } from "react";
import MenuItems from "../utils/MenuItems";
import IMAGES from "../images/Images";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex fixed justify-between items-center w-full h-fit max-w-[95vw] backdrop-blur-xl rounded-lg p-3 mt-3 z-10">
      <div className="flex items-center">
        <div className="w-fit h-fit rounded-md bg-white p-0.5 mr-1">
          <img
            className="w-12"
            src={IMAGES?.app_logo}
            alt="logo - A crescent moon like arc engulfing the half of capital case alphabet R"
          />
        </div>
        <span className="hidden md:inline-block font-semibold text-3xl tracking-tight text-[#200e32]">
          Resumer
        </span>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex items-center tracking-wider text-gray-500 text-xl font-semibold">
          <MenuItems />
          <button className="py-4 px-10 text-base font-bold bg-[#200e32] text-white rounded-lg tracking-wider">
            Get Started
          </button>
        </ul>
      </div>

      <button className="flex lg:hidden" onClick={handleMenuClick}>
        <img className="w-8" src={IMAGES?.menu} alt="Menu Icon" />
      </button>

      {menuOpen && (
        <div className="absolute h-fit w-fit top-2 right-2 border-2 border-[#200e32] bg-[#f0eeeb] text-[#200e32] rounded-md pb-6 pt-2 px-5">
          <h3 className="text-2xl font-semibold">Explore</h3>
          <hr className="my-3 border border-[#200e32]" />
          <button onClick={handleMenuClick} className="absolute right-3 top-3">
            <img className="w-7" src={IMAGES?.close} alt="Menu Close Icon" />
          </button>
          <ul className="flex flex-col items-start text-xl font-semibold">
            <MenuItems />
            <button className="py-4 px-10 mt-6 text-base font-bold bg-[#200e32] text-white rounded-lg tracking-wider">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
