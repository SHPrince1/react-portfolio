import React from "react";
import { TypeAnimation } from "react-type-animation";


import 'font-awesome/css/font-awesome.min.css';

import styled from "styled-components";

const TypedAnimation = () => {
  
  // my  styled component
  const TypedContainer = styled.div`
  display:flex;
  align-items:center;
    font-size: 38px;
     width: fit-content;
     height: 65px;
     border-radius:20px;
     font-family: 'rubik';
     font-weight:bold;
     text-shadow:0px 0px 20px rgb(255,255,255);
     box-shadow:0px 0px 8px rgb(255,255,255);
     color:#fff;
     background-color: #000;
     border-radius: 20px  5px 10px 10px;

    @media (max-width: 425px) {
      font-size: 20px;
      width: fit-content;
      font-weight:bold;
      height: 45px;
      font-family: 'rubik';
      font-weight:bold;
      padding: 3px 20px 2px 20px;
      text-shadow:0px 0px 20px rgb(255,255,255);
      box-shadow:0px 0px 8px rgb(255,255,255);
      color:#fff;
      background-color: #000;
      border-radius: 20px  5px 10px 10px;
      // margin-top:-10px;
    }
  `;

  return (
    <div>
      <TypedContainer>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A ReactJS Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "A Software Engineer",
            1000,
            "AN IT Support Engineer",
            1000,
            "A Tech Ethusiast",
            1000,
           
          ]}
         
          wrapper="span"
          speed={10}
          typeSpeed={50}
          backSpeed={10}
          style={{
           
            display: "content",
            // fontFamily: "sacramento",
            
          }}
          repeat={Infinity}
        />
      </TypedContainer>
    </div>
  );
};

export default TypedAnimation;
