import * as React from "react";
import HeaderComponent from "../components/javascript/header.jsx";
import Main from "../components/javascript/main.jsx";
import Timeline from "../components/javascript/timeline.jsx";

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
