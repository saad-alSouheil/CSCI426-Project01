import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  
 const handleLogout = () => {
  navigate('/');
  // Use setTimeout or defer state update
  setTimeout(() => setCurrentUser(null), 5);
};
  
  return (
    <nav className="top-navbar">
        <div className="logo">MyApp</div>
        <div className="links">
            {currentUser ? (
                <>
                <button onClick={handleLogout}>Logout</button>
                </>
            ):(
                <><Link to="/login">Login</Link></>
            )
            }
        </div>
    </nav>
  );
}
