import React from 'react'
import Style from "../styles/aboutme.module.css"
import styled from 'styled-components'
import Sliderskill from "../components/sliderskills";

const AboutMe = () => {
  return (
    <>
    
   
    <div className={Style.parentdiv}>  
    <div className={Style.h1div}><br /><br />
    <h1>ABOUT ME</h1>

    </div>
        
       

        <div className={Style.paragraphDiv}>
            <p>I am SHPrince,</p>
            <p>A Tech Ethiusiast ,Web developer, Software engineer and a student of computer science.</p>
            <p>I am really passionate about web development and software engineering. I love to solve problems and take on challenges especially when it comes to building projects.</p>
            <p>I believe in the principle of geting it done and keep making it better. Getting the job done brings me joy, it's a pleasure to keep improving on it.</p>
            <p>I look forward to colaborating with individuals and corporate bodies in bringing solution, values, and improving what has already been done.</p>
        </div>

        <div className={Style.skilSlideDiv}>
            <h3>FAMILAR TOOLS</h3>
            <div className={Style.slider}>
                <Sliderskill />
                
            </div>
        </div>
            
            </div>
    
    </>
  )
}

export default AboutMe