import React from "react";
import type { CardPropType } from "../../types/GenericProps";
import { BiLink } from "react-icons/bi";

let Card = (props: CardPropType): JSX.Element => {
  return (
    <>
      <section className="m-4 w-72 text-white bg-gradient-to-br from-cygreen-100 to-cygreen-900 rounded-lg">
        <section className="p-2 flex justify-center items-center flex-auto rounded-t-lg">
          <img src={props.avatar} className="w-20 h-20 rounded-full" />
        </section>
        <section className="backdrop-blur-3xl rounded-b-lg">
          <section className="flex flex-auto justify-around">
            <section className="font-bold lg:text-2xl md:text-xl sm:text-lg font-adio">
              {props?.name}
            </section>
          </section>
          <section className="p-2 font-medium lg:text-lg sm:text-sm md:text-md font-mono">
            {props?.about}
          </section>
          <section className="flex flex-auto justify-end">
            <a href={props?.link} target="__blank">
              <section className="m-2 p-1 font-ligth text-md rounded-md font-adio hover:-translate-x-2 hover:bg-cygreen-900">
                <BiLink className="text-3xl" />
              </section>
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
