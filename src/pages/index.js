import React from "react";

import Banner from "../components/banner";
import Skills from "../components/skills";
import Project from "../components/project";
import CusTabs from "../components/cus-tabs";

const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <CusTabs />
      {/* <Project /> */}
    </>
  );
};

export default Home;
