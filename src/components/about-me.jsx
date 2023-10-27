import React from "react";
import Style from "../styles/aboutme.module.css";
import styled from "styled-components";
import Sliderskill from "../components/sliderskills";
import Prince from "../assets/embo.jpg";

const AboutMe = () => {
  return (
    <>
    <div className={Style.generalDiv}>
    <div className={Style.perentDiv}>
        <div className={Style.imageDiv}>
          <img src={Prince} />
        </div>
        <div className={Style.textDiv}>
          <h3>About me</h3>
          <h4>
            
          Consistent growth & improvement is the rule of the Game</h4>
          <div className={Style.textP}>
          <p>
          A Tech Ethiusiast ,Web developer, Software engineer and a student of computer science.
          </p>

          <p>
          I am really passionate about web development and software engineering. I love to solve problems and take on challenges.
          </p>
          <p>I look forward to colaborating with fellow software engineer, give value and increase my value.</p>

          </div>
         
        </div>
      </div>
      <div className={Style.blockDiv}>
      <div className={Style.block1}>
        <p>SIMPLICITY</p>
      </div>
      <div className={Style.block1}>
        <p>CONSISTENCY</p>
      </div>
      <div className={Style.block1}>
        <p>CLASSICAL</p>
      </div>
      <div className={Style.block1}>
        <p>DETAILED ATTENTION</p>
      </div>
      </div>
     
      
    </div>
     
    </>
  );
};

export default AboutMe;
