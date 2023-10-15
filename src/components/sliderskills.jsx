import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Style from "../styles/sliderskill.module.css";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import uba from "../assets/uba.png"
import ecobank from "../assets/ecobank.png"
// import gtb from "../assets/gtb.png"
import keystone from "../assets/keystone.png"
import providus from "../assets/providus.png"
import standard from "../assets/standard.png"
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
    <Slider {...settings} className={Style.settingsDiv}>
      <div>
             <img   className={Style.imgs}src={uba} alt="fireSpot" />

          </div>
          <div>
          <img   className={Style.imgs}src={ecobank} alt="fireSpot" />
          </div>
         
          <div>
          <img   className={Style.imgs}src={keystone} alt="fireSpot" />
          </div>
          <div>
          <img   className={Style.imgs}src={providus} alt="fireSpot" />
          </div>
          <div>
          <img   className={Style.imgs}src={standard} alt="fireSpot" />
          </div>
    </Slider>
  );
}