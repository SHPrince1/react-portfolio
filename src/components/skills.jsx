import React from "react";


import { styled } from "styled-components";
import style from "../styles/skills.module.css";
import SkillsSlider from "./skillsslider";

const Skills = () => {
  

  return (
    <>
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

      
    </>
  );
};

export default Skills;
