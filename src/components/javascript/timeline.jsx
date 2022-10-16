import React from "react";
import { Link } from "gatsby";

function Timeline() {
  return (
    <div className="scrollable flex flex-row font-['Montserrat'] font-bold w-auto overflow-x-scroll justify-start">
      <div className="flex flex-col items-center">
        <Link to="/yearbook/2017" className="text-2xl font-bold hover:underline">
          2017
        </Link>
        <div className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <div className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-2 bg-[#31ce9f] w-[128px] rounded-l-full"></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[70px]">
        <div className="h-2 bg-[#31ce9f] w-[128px]"></div>
        <div className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <Link to="/yearbook/2018" className="text-2xl font-bold hover:underline">
          2018
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/yearbook/2019" className="text-2xl font-bold hover:underline">
          2019
        </Link>
        <div className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <div className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-2 bg-[#31ce9f] w-[128px]"></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[70px]">
        <div className="h-2 bg-[#31ce9f] w-[128px]"></div>
        <div className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <Link to="/yearbook/2020" className="text-2xl font-bold hover:underline">
          2020
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/yearbook/2021" className="text-2xl font-bold hover:underline">
          2021
        </Link>
        <div className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <div className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-2 bg-[#31ce9f] w-[128px]"></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[70px]">
        <div className="h-2 bg-[#31ce9f] w-[128px]"></div>
        <div className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></div>
        <div className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></div>
        <Link to="/yearbook/2022" className="text-2xl font-bold hover:underline">
          2022
        </Link>
      </div>
    </div>
  );
}

export default Timeline;
