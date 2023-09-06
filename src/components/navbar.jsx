import {React, useState} from "react";
import { Link } from "react-router-dom";
// css importtaions
import style from "../styles/navbar.module.css";
import style2 from "../styles/reactIconStyles.module.css";

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
          <Link to="#">
            <img src={Logo} size={20} />
          </Link>
          {/* <div className={style.menuDiv}>
          <Hamburger distance="sm" />


          </div> */}
        </div>

        <div className={ visible ? style.linksParentDiv : style.hide}>
          
          <div className={style.linkdiv}>
            <Link to="#">Home</Link>
            <Link to="#">Skills</Link>
            <Link to="#">Projects</Link>
          </div>
          <div className={style.iconDiv}>
            <Link to="#">
              <AiFillGithub className={style2.Icons} />
            </Link>
            <Link to="#">
              <AiFillLinkedin className={style2.Icons} />
            </Link>
            <Link to="#">
              <AiFillTwitterSquare className={style2.Icons} />
            </Link>
          </div>
          <div className={style.connect}>
            <Link to=""> Let's Connect</Link>
          </div>
          
        </div>
        <div className={style.menuDiv} onClick={ToggleBurger}>
            <Hamburger distance="sm" size={18}/>
          </div>
      </div>
    </> 
  );
};

export default Navbar;
