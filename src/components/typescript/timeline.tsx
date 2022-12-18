import React from "react";
import { Link } from "gatsby";

interface IYearComponentProps {
  year: number;
}

const UpComponent = (props: IYearComponentProps): JSX.Element => {
  return (
    <section className="flex flex-col items-center">
      <Link
        to={`/years/${props?.year}`}
        className="text-2xl font-bold hover:underline"
      >
        {props?.year}
      </Link>
      <section className="h-4 w-4 relative mb-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
      <section className="h-8 w-[6px] relative bg-[#31ce9f] -z-10 "></section>
      <section className="h-2 bg-[#31ce9f] w-[128px] rounded-l-full"></section>
    </section>
  );
};

const DownComponent = (props: IYearComponentProps): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center mt-[70px]">
      <section className="h-2 bg-[#31ce9f] w-[128px]"></section>
      <section className="h-8 w-2 relative bg-[#31ce9f] -z-10"></section>
      <section className="h-4 w-4 relative mt-[-10px] bg-white rounded-full border-[6px] z-20 border-[#31ce9f]"></section>
      <Link
        to={`/years/${props?.year}`}
        className="text-2xl font-bold hover:underline"
      >
        {props?.year}
      </Link>
    </section>
  );
};

let Timeline = () => {
  return (
    <section className="scrollable flex flex-row font-['Montserrat'] font-bold w-auto overflow-x-scroll justify-start">
      <UpComponent year={2017} />
      <DownComponent year={2018} />
      <UpComponent year={2019} />
      <DownComponent year={2020} />
      <UpComponent year={2021} />
      <DownComponent year={2022} />
      <UpComponent year={2023} />
      <DownComponent year={2024} />
      <UpComponent year={2025} />
    </section>
  );
};

export default Timeline;
