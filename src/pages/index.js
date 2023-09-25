import React from "react";

import Banner from "../components/banner";
import Skills from "../components/skills";
import Project from "../components/project";
import CusTabs from "../components/cus-tabs";
import Contact from "../components/contact";
import Footer from "../components/footer";
import style from "../styles/index.module.css"

const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <CusTabs />
      <Contact />
      
      <Footer/>
    </>
  );
};

export default Home;
