import React from "react";
import { Link } from "gatsby";

let Timeline = () => {
  return (
    <section className="scrollable flex flex-row font-['Montserrat'] font-bold w-auto overflow-x-scroll justify-start">
      <section className="flex flex-col items-center">
        <Link
          to="/yearbook/2017"
          className="text-2xl font-bold hover:underline"
        >
          2017
        </Link>
        <section className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <section className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-2 bg-[#31ce9f] w-[128px] rounded-l-full"></section>
      </section>
      <section className="flex flex-col justify-center items-center mt-[70px]">
        <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
        <section className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <Link
          to="/yearbook/2018"
          className="text-2xl font-bold hover:underline"
        >
          2018
        </Link>
      </section>
      <section className="flex flex-col items-center">
        <Link
          to="/yearbook/2019"
          className="text-2xl font-bold hover:underline"
        >
          2019
        </Link>
        <section className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <section className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
      </section>
      <section className="flex flex-col justify-center items-center mt-[70px]">
        <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
        <section className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <Link
          to="/yearbook/2020"
          className="text-2xl font-bold hover:underline"
        >
          2020
        </Link>
      </section>
      <section className="flex flex-col items-center">
        <Link
          to="/yearbook/2021"
          className="text-2xl font-bold hover:underline"
        >
          2021
        </Link>
        <section className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <section className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
      </section>
      <section className="flex flex-col justify-center items-center mt-[70px]">
        <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
        <section className="h-8 w-2 relative bg-[#31ce9f] -z-10 rounded-top-full"></section>
        <section className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
        <Link
          to="/yearbook/2022"
          className="text-2xl font-bold hover:underline"
        >
          2022
        </Link>
      </section>
    </section>
  );
};

export default Timeline;
