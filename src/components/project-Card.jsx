import React from "react";
import Bwimage from "../assets/bwimage.png";
import style from "../styles/projectcard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={style.cardParentDiv}>
      {/* <h4>{props.title}</h4> */}
      <h4>{props.title}</h4>
      <img src={props.image} alt="Bw image" className={style.pImage} />
      <div className={style.descriptionDiv}>
        <h4>{props.description}</h4>
       <p>{props.details}</p><br></br>
       
       <a href={props.url}>Visit Link</a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
