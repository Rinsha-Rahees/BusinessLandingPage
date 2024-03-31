import React from 'react'
import IMAGES from "../images/Images"

function HeroSeparator() {
  return (
    <div className='flex flex-col w-full my-24'>
    <hr className="border border-[#200e32] border-dashed w-full"/>
      <div className="flex justify-center items-center text-lg w-full h-fit font-bold p-12 md:p-2">
            {IMAGES?.profiles.map((icon) => {
              return (
                <img key={icon} className="w-12 md:-ml-2 -ml-12" src={icon} alt="Profile icon avatars" />
              );
            })}
            <span className="pl-5 text-center md:text-left">
              🏅1.4 Million success stories and counting
            </span>
          </div>
      <hr className="border border-[#200e32] border-dashed w-full"/>
    </div>
  )
}

export default HeroSeparator