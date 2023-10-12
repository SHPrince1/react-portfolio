import React from "react";
import style from "../styles/banner.module.css";


// https://www.npmjs.com/package/react-plx
import Plx from "react-plx";

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

      <div>
      
        
      <div className={style.contentDiv}>

      <div className={style.videoContainer}>
       

        <video
        className={style.videoContent}
          source
          src={Sample}
          type="video/mp4"
          autoPlay
          loop
          
          muted />
       
    
        </div>

        <div className={style.sectionOne}>
          <div className={style.textPart}>
            <div className={style.welcome}>
              <p>Welcome to my Portfolio</p>
            </div>
            <div className={style.nameAndAnimation}>
              <h2>Hi! I'm Sylvanus Prince</h2>
             
              <TypedAnimation />
            </div>
            <div className={style.aboutMeText}>
              <p>
                Simple About me Lorem ipsum dolor sit amet consectetur
                adipisicing elit. At, recusandae voluptatem numquam quo harum
                voluptatibus! Accusantium cum repellat veniam error! Lorem ipsum
                dolor sit amet consectetur 
                 
              </p>
              
            </div>
            <div className={style.connectDiv}>
              <NavLink  className={style.connectDivLink} to='#' onClick={()=>console.log('connect')}>
              Let's connect < BsFillArrowRightSquareFill  size={30}/>
                </NavLink>
             
              
            </div>
          </div>

          <div className={style.imageDiv}>
            <img src={MyImage} alt='My own image' width={380} height={380} className={style.img}/>
          </div>



        </div>
      </div>
        
      </div>
      
    </>
  );
};

export default Banner;
