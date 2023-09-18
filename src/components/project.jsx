import React from "react";
import ProjectCard from "./project-Card";
import style from "../styles/project.module.css";
import bwimage from "../assets/bwimage.png";
// import '../assets/bwimage.png'
import store from "../assets/store.png";
import products from "../assets/products.png";
import calcu from "../assets/calcu.png";
import ebm from "../assets/ebm.png";
import country from "../assets/country.png";

const Project = () => {
  const data = [
    {
      title: "Bankers Ware house",
     description: "Business Start-up",
      details:'Design and Development',
      image: bwimage,
      url: "https://www.facebook.com/",
    },
    {
      title: "Bankers Ware house",
     description: "Business Start-up",
      details:'Design and Development',
      image: store,
    },
    {
      title: "Bankers Ware house",
     description: "Business Start-up",
      details:'Design and Development',
      image: products,
    },
    {
      title: "Bankers Ware house",
     description: "Business Start-up",
      details:'Design and Development',
      image: calcu,
    },
    {
      title: "Bankers Ware house",
     description: "Business Start-up",
      details:'Design and Development',
      image: country,
    },
    {
      title: "Bankers Ware house",
      description: "Business Start-up",
      details:'Design and Development',
      image: ebm,
    },
  ];
  return (
    <div>
      {/* <h1>PROJECTS</h1> */}
       
      <div className={style.cardDiv} id="project">

      <div className={style.cardText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          sapiente ullam eum eos dolorem excepturi in? Facere hic sint delectus
          veritatis, cumque libero iste illum fugiat laudantium aut ea? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          accusantium et rerum saepe consectetur tempore possimus quasi aut
          dolores eligendi.
        </div>
       
       
        <div className={style.projectsCardDiv}>
          {data.map((data, index) => {
            return (
              <ProjectCard
                key={index}
                //  title={data.title}
                image={data.image}
                 description={data.description}
                 details={data.details}
                 url={data.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
