import React from 'react'
import Style from "../styles/aboutme.module.css"
import styled from 'styled-components'
import Sliderskill from "../components/sliderskills";
import Prince from "../assets/prince5.png"

const AboutMe = () => {
  return (
    <>
    
   
   <div className={Style.container}>
    <div className={Style.imageDiv}>
      <img src={Prince} />
    </div>
    <div className={Style.text}>
      <h3>About me</h3>
      <h2>Consistency is the rule of the game</h2>
      <div>

      <p>I am SHPrince,</p>
      <p>A Tech Ethiusiast ,Web developer, Software engineer and a student of computer science. 
      I am really passionate about web development and software engineering. I love to solve problems and take on challenges especially when it comes to building projects.

      </p>
      <p>I look forward to colaborating with individuals and corporate bodies in bringing solution, values, and improving what has already been done.

</p>
      </div>
        
      
    </div>

   </div>
    
    </>
  )
}

export default AboutMe