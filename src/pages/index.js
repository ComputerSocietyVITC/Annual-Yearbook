import * as React from "react";
import HeaderComponent from "../components/header.jsx";
import Main from "../components/main.jsx";
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <Main />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title = "Annual Yearbook"/>
