import React from "react";
import style from "../styles/banner.module.css";
import {motion} from 'framer-motion';
import style2 from "../styles/reactIconStyles.module.css";
import style3 from '../styles/bannericn.module.css'


// https://www.npmjs.com/package/react-plx
import Plx from "react-plx";

// icons importation
import {AiFillGithub,AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

import TypedAnimation from "./type";
import { BsFillArrowRightSquareFill}  from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import MyImage from '../assets/catimg.jpg';
import Sample from "../assets/sample.mp4"


const Banner = () => {
  // const parallaxData = [
  //   {
  //     start: 0,
  //     end:700,
     
  //     properties: [
  //       {duration:1000,
  //         startValue: 1,
  //         transition:'easeOutCubic',
  //         endValue: 0,
  //         property: "scale",
  //       },
  //     ],
  //   },
  // ];


  return (
    <>

{/* <Plx className="MyAwesomeParallax" parallaxData={parallaxData} 
style={{
  
}}
>

      </Plx> */}

      <motion.div
      initial={{rotate:'180deg', scale:0}}
      animate={{rotate:'0deg', scale:1}}
     
      transition={{ ease: 'easeInOut',  duration:1, stiffness: 100 }}
      >
      
        
      <div className={style.contentDiv}>

      {/* <div className={style.videoContainer}>
       

        <video
        className={style.videoContent}
          source
          src={Sample}
          type="video/mp4"
          autoPlay
          loop
          
          muted />
       
    
        </div> */}

        <div className={style.sectionOne}>
          <div className={style.textPart}>
            {/* <div className={style.welcome}>
              <p>Welcome to my Portfolio</p>
            </div> */}
            <div className={style.nameAndAnimation}>
              <h2>Hi! I'm Sylvanus Prince</h2>
             
              <TypedAnimation />
              {/* <h6>Based in Lagos Nigeria</h6> */}
            </div>
            <div className={style.aboutMeText}>
              <p>
              I am a software engineer Well crafted for brand development and  services based in<br /> <span style={{color:"Green", fontSize:"30px", fontWeight:"bold"}}>Lagos Nigeria</span>.


             
             
                 
              </p>
              
            </div>
            <div className={style.connectDiv}>
              <NavLink  className={style.connectDivLink} to="mailto:princehsylvanus@gmail.com" onClick={()=>console.log('connect')}>
              Email me < BsFillArrowRightSquareFill  size={30}/>
                </NavLink>
                <div className={style.followBox}>

                
            <NavLink to="https://github.com/SHPrince1">
              <AiFillGithub  color="white"  className={style3.Icon1}/>
            </NavLink>
            <NavLink to="https://www.linkedin.com/feed/">
              <AiFillLinkedin  className={style3.Icon1} />
            </NavLink>
            <NavLink to="https://twitter.com/SHPrince_">
              <AiFillTwitterCircle  className={style3.Icon1}/>
            </NavLink>
          


                </div>
             
              
            </div>
            
          </div>

          <div className={style.imageDiv}>
            <img src={MyImage} alt='My own image' width={400} height={380} className={style.img1}/>
          </div>



        </div>
      </div>
        
      </motion.div>
      
    </>
  );
};

export default Banner;
