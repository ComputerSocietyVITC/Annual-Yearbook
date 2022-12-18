import * as React from "react";
import { VscGithubAlt } from "react-icons/vsc";

let HeaderComponent = (): JSX.Element => {
  return (
    <>
      <nav className="h-auto rounded-lg m-1 bg-[#31ce9f] py-2">
        <section className="flex flex-auto justify-between items-center">
          <section className="mx-2 p-2 text-white font-black text-3xl hover:bg-[#00BA9E] hover:rounded-md">
            Annual Yearbook
          </section>
          <section className="flex flex-auto justify-end items-center content-center gap-16">
            <section className="text-white font-bold text-xl">Forms</section>
            <section className="text-white font-bold text-xl">About</section>
            <section className="text-white font-bold text-xl">Join Us</section>
            <section className="mx-2 p-2 text-white content-center font-medium text-3xl hover:translate-y-1">
              <a
                href="https://github.com/ComputerSocietyVITC/Annual-Yearbook"
                target="__blank"
              >
                <VscGithubAlt />
              </a>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
};

export default HeaderComponent;
