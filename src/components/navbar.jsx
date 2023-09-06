import { React, useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";
// css importtaions
import style from "../styles/navbar.module.css";
import style2 from "../styles/reactIconStyles.module.css";
// import "../App.css";

// icons importation
import {AiFillGithub,AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import { Spin as Hamburger } from "hamburger-react";

// Imported images
import Logo from "../assets/sh-logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  function ToggleBurger() {
    setVisible(!visible);
    // console.log("Cclicke")
  }

  function updateActiveLink(value){
   setActiveLink(value)
  }

  useEffect(() => {
    const onScroll =()=>{

      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return()=>window.removeEventListener('scroll', onScroll);
  }, []) ;

  return (
    <>
      <div className={scrolled ? 'scrolled' : style.parentDiv}>
        <div className={style.logoDiv}>
          <NavLink to="/">
            <img src={Logo} size={20} alt="logo"/>
          </NavLink>
          {/* <div className={style.menuDiv}>
          <Hamburger distance="sm" />


          </div> */}

          
        </div>

        <div className={visible ? style.linksParentDiv : style.hide}>
          <div className={style.linkdiv}>
            <NavLink to="#home" ClassName={activeLink ==='home' ? style.linkActive: style.links } onClick={()=> updateActiveLink('home')}>Home</NavLink>
            <NavLink to="#skills" className={activeLink ==='skills' ?   style.linkActive: style.links} onClick={()=> updateActiveLink('skills')} >Skills</NavLink>
            <NavLink to="#project" className={activeLink ==='project' ? style.linkActiveactive: style.links } onClick={()=> updateActiveLink('project')}>Projects</NavLink>
          </div>
          <div className={style.iconDiv}>
            <NavLink to="https://github.com/SHPrince1">
              <AiFillGithub className={style2.Icons} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/feed/">
              <AiFillLinkedin className={style2.Icons} />
            </NavLink>
            <NavLink to="https://twitter.com/SHPrince_">
              <AiFillTwitterCircle className={style2.Icons} />
            </NavLink>
          </div>
          <div className={style.connect}>
            <NavLink className={style.connect}
              to="mailto:princehsylvanus@gmail.com"
              onClick={() => console.log("connect")}
            >
            
              Email Me
            </NavLink>
          </div>
        </div>
        <div className={style.menuDiv} onClick={ToggleBurger}>
          <Hamburger distance="sm" size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
