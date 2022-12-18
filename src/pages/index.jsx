import * as React from "react";
import HeaderComponent from "../components/typescript/header";
import Main from "../components/javascript/main";

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <Main />
      {/* <Timeline /> */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Annual Yearbook</title>;
