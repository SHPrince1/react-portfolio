import React, { Component } from "react";
import Plx from "react-plx";


import { styled } from "styled-components";
import style from "../styles/skills.module.css";
import SkillsSlider from "./skillsslider";

const Skills = () => {
  const parallaxData = [
    {
      start: 700,
      duration: 3000,
      properties: [
        {
          startValue: 100,
        endValue: 3,
        property: "translateY",
        },
      ],
    },
  ];

  return (
   


    <>

<Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
<div className={style.parentDiv}>
        <div className={style.skillH1}>
          <h1>SKILLS</h1>
        </div>
        <div className={style.skillsText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            fugiat saepe praesentium alias neque nostrum nulla eligendi esse
            natus rerum?
          </p>
        </div>

        <div className={style.skilsSet}>
         {/* <h1>HELLO</h1>
         <h1>HELLO</h1>
         <h1>HELLO</h1>
         <h1>HELLO</h1> */}
         <SkillsSlider />

         
        </div>


       
      </div>
      </Plx>
    

      
    </>
  );
};

export default Skills;
