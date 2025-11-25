import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";

/**
 * This sidebar navigation is shown on every page.
 * It displays different links depending on whether a user is logged in,
 * and whether the user is a doctor or a patient.
 *
 * Props:
 *  - currentUser: The currently logged-in user object (null if no user logged in)
 *
 * Functionality:
 *  - If no user is logged in show "Home", if a user is logged in show "Dashboard" instead
 *  - Only doctors can see the "Discussions" page
 *  - All users can see "Explore", "Create Post", "Profile", and "About" pages
 *  - "Profile" link is only shown when a user is logged in
 */

function Navbar({ currentUser }) {
  const location = useLocation();

  //function to check if a link is active (for styling purposes!)
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="side-navbar">
      <ul>

        {/* Show Dashboard when logged in, Home when logged out */}
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