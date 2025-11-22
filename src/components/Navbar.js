import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../style/Navbar.css'; 

function Navbar() { 
    return ( 
        <nav className="navbar"> 
            <h2>My App</h2> 
            <div className="links"> 
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link>  
            </div> 
        </nav> 
    ); 
}
 
export default Navbar; 