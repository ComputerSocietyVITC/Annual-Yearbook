import * as React from "react";
import HeaderComponent from "../components/header.jsx";
import Main from "../components/main.jsx";

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <Main />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
