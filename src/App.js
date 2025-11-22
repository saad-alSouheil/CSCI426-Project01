import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './components/Home';  
import Footer from './components/Footer';
import './App.css'; 

function App() { 
    return ( 
    <Router> 
        <Navbar /> 
        <div className="container"> 
            <Routes> 
                <Route path="/" element={<Home />} />                 
            </Routes> 
        </div> 

        <div className='footer'>
            <Footer/>
        </div>
    </Router> 
    
    ); 
} 

export default App; 