import * as React from "react";
import { VscGithubAlt } from "react-icons/vsc";

let HeaderComponent = () => {
  return (
    <>
      <nav className="h-auto rounded-b-md bg-[#31ce9f]">
        <section className="flex flex-auto justify-between items-center">
          <section className="mx-2 p-2 text-white font-black text-3xl">
            Annual Yearbook
          </section>
          <section className="mx-2 p-2 text-white content-center font-medium text-3xl hover:translate-y-1">
            <a href="https://github.com/ComputerSocietyVITC/Annual-Yearbook" target="__blank">
                <VscGithubAlt />
            </a>
          </section>
        </section>
      </nav>
    </>
  );
};

export default HeaderComponent;
