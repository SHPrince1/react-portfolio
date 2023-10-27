import React from "react";
// import { motion, useScroll } from "framer-motion"

import Banner from "../components/banner";
// import Skills from "../components/skills";
import Sliderskill from "../components/sliderskills";
import Project from "../components/project";
import CusTabs from "../components/cus-tabs";
import Contact from "../components/contact";
import Footer from "../components/footer";
import style from "../styles/index.module.css"
import AboutMe from "../components/about-me";

const Home = () => {
 
  return (
    <>
    
      <Banner />
      <AboutMe />
      <CusTabs />
      <Sliderskill />
      <Contact />
      
      <Footer/>
    </>
  );
};

export default Home;






