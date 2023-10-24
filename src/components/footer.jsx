import React from "react";
import { NavLink } from "react-router-dom";
import style1 from "../styles/footer.module.css";
import style from "../styles/navbar.module.css";
import Logo from "../assets/sh-logo.png";
import style2 from "../styles/reactIconStyles.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
    <div className={style1.grandParentDiv}>
    <div className={style1.parentDiv}>
        <div className={style1.box1}>
          
            <img src={Logo} alt="" width={200} />
          
         
        </div>

        <div className={style1.iconDivParent}>
            <div className={style1.iconDiv}>
              <a href="https://github.com/SHPrince1">
                <AiFillGithub className={style1.Icons}  />
              </a>{" "}
              <a href="https://www.linkedin.com/feed/">
                <AiFillLinkedin className={style1.Icons} />
              </a>{" "}
              <a href="https://twitter.com/SHPrince_">
                <AiFillTwitterCircle className={style1.Icons} />
              </a>
              {/* <a href="https://twitter.com/SHPrince_">
                <AiFillTwitterCircle className={style1.Icons} />
              </a>
              <a href="https://twitter.com/SHPrince_">
                <AiFillTwitterCircle className={style1.Icons} />
              </a>
              <a href="https://twitter.com/SHPrince_">
                <AiFillTwitterCircle className={style1.Icons} />
              </a> */}
            </div>
          </div>
        <div className={style1.copy}>
          <p>Copyright 2023. All right reserved</p>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Footer;
