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
          I am SHPrince,
A Tech Ethiusiast ,Web developer, Software engineer and a student of computer science.

I am really passionate about web development and software engineering. I love to solve problems and take on challenges especially when it comes to building projects.

I believe in the principle of geting it done and keep making it better. Getting the job done brings me joy, it's a pleasure to keep improving on it.

I look forward to colaborating with individuals and corporate bodies in bringing solution, values, and improving what has already been done.
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
