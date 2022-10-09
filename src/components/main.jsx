import * as React from "react";
import logo from "../images/icon.png";
import Layout from "./layout";
import ContributorList from "../components/contributors";

let Main = () => {
  return (
    <>
      <Layout>
        <section className="pt-10 flex flex-auto justify-center text-black">
          <img src={logo} alt="cs_logo"/>
        </section>
        <section className="py-4 text-4xl font-bold flex flex-auto justify-center">
          Annual Yearbook
        </section>
        <section className="p-4 text-2xl font-regular flex flex-auto self-center">
          An open-source project to record and generate a memorable yearbook for
          university students. All graduating students and previously graduated
          students are welcome to list their profile here and present a cool
          story/fact about their time at university
        </section>
        <ContributorList />
        <section className="py-4 text-xl font-medium flex flex-auto justify-center hover:underline">
          <a href="https://github.com/ComputerSocietyVITC">
            Developed by IEEE Computer Society VITC with 💖 ©{" "}
            {new Date().getFullYear()}
          </a>
        </section>
      </Layout>
    </>
  );
};

export default Main;
