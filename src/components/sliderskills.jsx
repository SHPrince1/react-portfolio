import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Style from "../styles/sliderskill.module.css";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import JS from '../assets/js.png'
import Rct from '../assets/react.jpeg'
import Next from '../assets/next.png'
import Boost from '../assets/bootstrap.jpeg'
import Tailw from '../assets/tailwind.png'
import Red from '../assets/redux.png'
import Ant from '../assets/antd.jpeg'
import WP from '../assets/wp.png'
import Sass from '../assets/sass.png'


import Style from "../styles/sliderskill.module.css"

export default function Sliderskill() {
  // render() 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    
  };
  return (

    <div className={Style.slideBox}><br />
    <h3 className={Style.hTitle}>TECHNOLOGICAL TOOLS</h3>
    <Slider {...settings} className={Style.settingsDiv}>
      <div className={Style.skillBlock}>
        <p>JavaScript</p>
            
             {/* <img   className={Style.imgs}src={JS} alt="fireSpot" /> */}

          </div>
          <div  className={Style.skillBlock}>
            <p>ReactJs</p>
       
          {/* <img   className={Style.imgs}src={Rct} alt="fireSpot" /> */}
          </div >
         
          <div  className={Style.skillBlock}>
            <p>NextJs</p>
          {/* <img   className={Style.imgs}src={Next} alt="fireSpot" /> */}
         
          </div>
          <div  className={Style.skillBlock} >
            <p>Redux</p>
          {/* <img   className={Style.imgs}src={Tailw} alt="fireSpot" /> */}
          </div>
          <div  className={Style.skillBlock}>
            <p>Boostrap</p>
          {/* <img   className={Style.imgs}src={Boost} alt="fireSpot" /> */}
         
          </div>
          <div  className={Style.skillBlock}>
            <p>WordPresss</p>
          {/* <img   className={Style.imgs}src={WP} alt="fireSpot" /> */}
         
          </div>
          <div  className={Style.skillBlock}>
            <p>AntDesign</p>
          {/* <img   className={Style.imgs}src={Ant} alt="fireSpot" /> */}
         
          </div>
          <div  className={Style.skillBlock}>
            <p>Sass SCSS</p>
          {/* <img   className={Style.imgs}src={Sass} alt="fireSpot" /> */}
         
          </div>
    </Slider>
    </div>
  );
}