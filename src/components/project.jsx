import React from "react";
import ProjectCard from "./project-Card";
import style from '../styles/project.module.css'
import bwimage from '../assets/bwimage.png';
// import '../assets/bwimage.png'
import store from  '../assets/store.png'
import products from '../assets/products.png'
import calcu from '../assets/calcu.png'
import ebm from '../assets/ebm.png'
import country from '../assets/country.png'

const Project = () => {
  const data =[{
    title:'Bankers Ware house',
    description: 'Design and Development',
    image: bwimage,
  },
  {
    title:'Bankers Ware house',
    description: 'Design and Development',
    image:store,
  },
  {
    title:'Bankers Ware house',
    description: 'Design and Development',
    image: products,
  },
  {
    title:'Bankers Ware house',
    description: 'Design and Development',
    image: calcu,
  },
  {
    title:'Bankers Ware house',
    description: 'Design and Development',
    image: country,
  },
  {
    title:'Bankers Ware house',
    description: 'Design and Development',
    image: ebm,
  },
  

  

  


];
  return (
    <div>
      <h1>PROJECTS</h1>
      <div className={style.cardDiv} id="project">

        <div className={style.projectsCardDiv}>{
          
          data.map((data, index )=>{
            return(
           <ProjectCard 
           key={index}
          //  title={data.title}
           image={data.image}
          //  description={data.description}
           />
            )
          })
          }
        </div>
     

      </div>
    
    </div>
  );
};

export default Project;
