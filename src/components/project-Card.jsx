import React from 'react'
import Bwimage from '../assets/bwimage.png'
import style from '../styles/projectcard.module.css'

const ProjectCard = (props) => {
  return (
    <div className={style.cardParentDiv}>
        {/* <h4>{props.title}</h4> */}
        <h4>{props.title}</h4>
<img src={props.image}  alt='Bw image' className={style.pImage}/>
<h4>{props.description}</h4>
        
    </div>
  )
}

export default ProjectCard