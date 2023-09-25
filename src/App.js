import React, { useState, useEffect, CSSProperties } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/index";
import About from "./pages/skills";
import Project from "../src/pages/project";
// import Loaders from "./components/loader";
// import { SpinnerRoundFilled } from 'spinners-react';

// https://mhnpd.github.io/react-loader-spinner/docs/intro
import { Audio } from "react-loader-spinner";
// ddddd
import GridLoader from "react-spinners/GridLoader";
import Footer from "./components/footer";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color:'red',
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='app'>
      {
        loading ?
        < audio  loading={loading} css={override}/>
        :
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
      }
      
      
    
      

      <div className="loaderDiv">

      <GridLoader
      color="white"
        // color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      </div>

    
    </div>
  );
}

export default App;
