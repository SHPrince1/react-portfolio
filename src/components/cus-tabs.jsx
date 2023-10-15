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
import style from "../styles/project.module.css";
import bwimage from "../assets/bwimage.png";
// images
import store from "../assets/store.png";
import products from "../assets/products.png";
import calcu from "../assets/calcu.png";
import ebm from "../assets/ebm.png";
import country from "../assets/country.png";
// import CusTabs from './cus-tabs';

import styles from "../styles/custab.module.css";
import style2 from '../styles/project.module.css'

const data = [
  {
    title: "Bankers Ware house",
    description: "Company's website",
    details: "Design and Development",
    image: bwimage,
    url:"https://bw-clone.netlify.app/",
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
    description: "Business Start-up",
    details: "Design and Development",
    image: products,
    url:"https://productsdesign.netlify.app/",
  },
  {
    title: "Bankers Ware house",
    description: "Business Start-up",
    details: "Design and Development",
    image: calcu,
    url:"https://rgss-coding-calculator.netlify.app/",
  },
  {
    title: "Bankers Ware house",
    description: "Business Start-up",
    details: "Design and Development",
    image: country,

    url:"https://transcendent-otter-8c4077.netlify.app/",
  
  },
  {
    title: "Bankers Ware house",
    description: "Business Start-up",
    details: "Design and Development",
    image: ebm,
    url:"https://ebm-web-app.netlify.app/",
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
             <p>Some collaborated projects and contributions slide and enjoy </p>
              
              
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
                    url={data.url}
                  />
                );
              })}
            </div>
          </div>

         
        </TabPanel>
            
          </TypedContainer>
          
          <TabPanel value={value} index={1} dir={theme.direction}>
            SKILLS
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
