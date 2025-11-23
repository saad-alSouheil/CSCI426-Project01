import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";

function Navbar({ currentUser }) {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="side-navbar">
      <ul>
        <li>
          {currentUser ? (
            <Link 
              to="/dashboard" 
              className={isActive("/dashboard") ? "active" : ""}
            >
              Dashboard
            </Link>
          ) : (
            <Link 
              to="/" 
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>
          )}
        </li>
        <li>
          <Link 
            to="/posts" 
            className={isActive("/posts") ? "active" : ""}
          >
           🌐 Explore
          </Link>
        </li>
        <li>
          {currentUser?.role?.toLowerCase() === "doctor" && (
            <Link 
              to="/discussions" 
              className={isActive("/discussions") ? "active" : ""}
            >
             ❔ Discussions
            </Link>
          )}
        </li>
        <li>
          <Link 
            to="/create-post" 
            className={isActive("/create-post") ? "active" : ""}
          >
           ➕ Create Post
          </Link>
        </li>
        <li>
          {currentUser && (
            <Link 
              to="/profile" 
              className={isActive("/profile") ? "active" : ""}
            >
              Profile
            </Link>
          )}
        </li>
        <li>
          <Link 
            to="/about" 
            className={isActive("/about") ? "active" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Navbar;