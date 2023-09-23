import React, { Component } from "react";
import Plx from "react-plx";


import { styled } from "styled-components";
import style from "../styles/skills.module.css";
import SkillsSlider from "./skillsslider";

const Skills = () => {
  const parallaxData = [
    {
      start: 200,
      duration: 100,
      properties: [
        {
          startValue: 1.5,
        endValue: 1,
        property: "scale",
        },
      ],
    },
  ];

  return (
   


    <>

<Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
<div className={style.parentDiv}>
  <div className={style.content}>
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
      
         <SkillsSlider />

         
        </div>

  </div>
       


       
      </div>
      </Plx>
    

      
    </>
  );
};

export default Skills;
