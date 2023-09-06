import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';



function App() {
  return (
    <Router>
   
    <Navbar />
    <Routes>
       {/* <Route  path='/' exact element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} /> */}
       
        
    </Routes>
    </Router>
  );
}

export default App;