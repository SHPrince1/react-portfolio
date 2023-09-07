import React from "react";
import { TypeAnimation } from "react-type-animation";


import 'font-awesome/css/font-awesome.min.css';

import styled from "styled-components";

const TypedAnimation = () => {
  
  // my  styled component
  const TypedContainer = styled.div`
  display:flex;
  align-items:center;
    font-size: 44px;
     width: 500px;
     height: 60px;
     font-family: 'rubik';
     font-weight:bold;
     text-shadow:0px 0px 20px rgb(255,255,255);
     box-shadow:0px 0px 8px rgb(255,255,255);
     color:red;
     background-color: #6666ff;

    @media (max-width: 425px) {
      font-size: 28px;
      width: 330px!important;
      font-weight:bold;
      height: 60px;
      font-family: 'rubik';
      font-weight:bold;
      text-shadow:0px 0px 20px rgb(255,255,255);
      box-shadow:0px 0px 8px rgb(255,255,255);
      color:red;
      background-color: #6666ff;
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
