import {React, useState} from "react";
import { Link, NavLink } from "react-router-dom";
// css importtaions
import style from "../styles/navbar.module.css";
import style2 from "../styles/reactIconStyles.module.css";
import '../App.css'

// icons importation
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Spin as Hamburger } from "hamburger-react";

// Imported images
import Logo from "../assets/sh-logo.png";

const Navbar = () => {

  const  [visible, setVisible] = useState(false);
  function ToggleBurger(){
      setVisible(!visible);
      // console.log("Cclicke")
  };

  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.logoDiv}>
          <NavLink to="/">
            <img src={Logo} size={20} />
          </NavLink>
          {/* <div className={style.menuDiv}>
          <Hamburger distance="sm" />


          </div> */}
        </div>

        <div className={ visible ? style.linksParentDiv : style.hide}>
          
          <div className={style.linkdiv}>
            <NavLink to="/" activeClassName={style.active}>Home</NavLink>
            <NavLink to="/about">Skills</NavLink>
            <NavLink to="/project">Projects</NavLink>
          </div>
          <div className={style.iconDiv}>
            <NavLink to="https://github.com/SHPrince1">
              <AiFillGithub className={style2.Icons} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/feed/">
              <AiFillLinkedin className={style2.Icons} />
            </NavLink>
            <NavLink to="https://twitter.com/SHPrince_">
              <AiFillTwitterSquare className={style2.Icons} />
            </NavLink>
          </div>
          <div className={style.connect}>
            <NavLink to ="mailto:princehsylvanus@gmail.com"> Email Me</NavLink>
          </div>
          
        </div>
        <div className={style.menuDiv} onClick={ToggleBurger}>
            <Hamburger distance="sm" size={30}/>
          </div>
      </div>
    </> 
  );
};

export default Navbar;
