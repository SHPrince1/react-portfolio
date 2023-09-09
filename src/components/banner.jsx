import React from "react";
import style from "../styles/banner.module.css";
import TypedAnimation from "./type";
import { BsFillArrowRightSquareFill}  from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import MyImage from '../assets/img4.jpg'


const Banner = () => {
  return (
    <>
      <div className={style.parentDiv}>
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
            <img src={MyImage} alt='My own image' width={450} height={450} className={style.img}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
