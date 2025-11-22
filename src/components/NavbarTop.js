import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbar({ currentUser, setCurrentUser }) {
  const handleLogout = () => setCurrentUser(null);
  
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
