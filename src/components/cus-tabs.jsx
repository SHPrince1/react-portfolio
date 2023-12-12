import React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Project from "./project";
import ProjectCard from "./project-Card";
import MySkills from "../components/my-skills"
import style from "../styles/project.module.css";
// images
import bwimage from "../assets/bwimage.png";
import store from "../assets/store.png";
import products from "../assets/products.png";
import calcu from "../assets/calcu.png";
import ebm from "../assets/ebm.png";
import country from "../assets/country.png";
import cod from "../assets/cod.png";
import t47 from "../assets/t47.png";
import LinkdlnImage from '../assets/cloned-linkdln.png'
// import CusTabs from './cus-tabs';

import styles from "../styles/custab.module.css";
import style2 from '../styles/project.module.css'

const data = [
 
  {
    title: "COD TRAVELS",
    description: "A traveling web app for flight booking",
    details: "Design and Development",
    image: cod,
    roleplayed:"Designed the frontend user-interface",
    url:   "https://codtravels.com/",
  },
  {
    title: "274 TRAVELS",
    description: "AIRLINE BOOKING WEB APP",
    details: "Design and Development",
    image: t47,
    url:   "https://247travels.com/",
  },
   {
    title: "Bankers Ware house",
    description: "Company's website",
    details: "Design and Development",
    image: bwimage,
    url:"https://bw-clone.netlify.app/",
  },
  {
    title: "Bankers Ware house",
    description: "Linkdln cloned",
    details: "Frontend Implementations",
    image: LinkdlnImage,
    url:   "https://sh-linkdln.netlify.app/",
  },
  {
    title: "Bankers Ware house",
    description: "E-COMMERCE WEBSITE ",
    details: "Design and Development",
    image: store,
    url:   "https://benevolent-bombolone-c31318.netlify.app/",
  },
  {
    title: "Bankers Ware house",
    description: "A Logistics Website",
    details: "Design and Development",
    image: products,
    url:"https://justmove.com.ng",
  },
  
  {
    title: "Bankers Ware house",
    description: "Countries Name and Flag",
    details: "Design and Development",
    image: country,

    url:"https://transcendent-otter-8c4077.netlify.app/",
  
  },
 
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
    
  };
}

const CusTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const TypedContainer = styled.div`
  overflow:hidden;

    @media (max-width: 425px) {
      overflow:hidden;
    }
  `;

  const TypedContainer2 = styled.div`
  background:red

    @media (max-width: 425px) {
      overflow:hidden;
    }
  `;

  return (
    <div className={styles.parentDiv}>
      <Box sx={{}} className={styles.boxDiv}>
        <AppBar position="static" className={styles.appBarStyle}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="red"
            // textColor="green"
            variant="fullWidth"
           
            aria-label="full width tabs example"
            className={styles.tabBox}
            style={{background:'blue'}}
          >
            <Tab label="Projects" {...a11yProps(0)}  />
            <Tab label="Skills" {...a11yProps(1)} />
            <Tab label="Others" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        
          height={400}
          className={styles.swip}
          style={{overflow:'hidden'}}

        > */}
          <TypedContainer>
          <TabPanel value={value} index={0} dir={theme.direction} className={styles.test}>
          

          <div className={style2.cardDiv} id="project">
            <div className={style2.cardText}>
             <p>Some  personal and collaborated projects with other developers </p>
              
            </div>

            <div className={style2.projectsCardDiv}>
              {data.map((data, index) => {
                return (
                  <ProjectCard
                    key={index}
                    //  title={data.title}
                    image={data.image}
                    description={data.description}
                    details={data.details}
                    roleplayed={data.roleplayed}
                    url={data.url}
                  />
                );
              })}
            </div>
          </div>

         
        </TabPanel>
            
          </TypedContainer>
          
          <TabPanel value={value} index={1} dir={theme.direction} >
            <div className={styles.textPart}>There is always space and place for improvement</div>
            <div className={styles.progressBarDiv}>
            <div className={styles.progressBarCont1}>
              
              <MySkills bgcolor="orange" progress='90' text='JavaScript' height={30} />
              
              <MySkills bgcolor="gold" progress='85' text='ReactJS ' height={30} />
             
              <MySkills  bgcolor="orange" progress='75' text='NextJS '  height={30}/>
             
              <MySkills  bgcolor="gold" progress='70' text='REDUX ' height={30}/>
              <MySkills  bgcolor="orange" progress='60' text='Wordpress ' height={30}/>
              <MySkills  bgcolor="gold" progress='60' text='Git ' height={30}/>
              

            </div>
            <div className={styles.progressBarCont2}>
               <MySkills bgcolor="orange" progress='90' text='CSS3 '  height={30}/>
             
           
              
              <MySkills bgcolor="gold" progress='85' text='SCSS ' height={30} width={10} />
             
              <MySkills  bgcolor="orange" progress='75' text='Tailwind CSS '  height={30}/>
             
              <MySkills  bgcolor="gold" progress='90' text='Boostrap ' height={30}/>
              <MySkills  bgcolor="orange" progress='70' text='AntD ' height={30}/>
              <MySkills  bgcolor="gold" progress='70' text='Material UI ' height={30}/>

            </div>

            </div>
           
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        {/* </SwipeableViews> */}
      </Box>
    </div>
  );
};

export default CusTabs;
