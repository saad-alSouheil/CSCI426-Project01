import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

/**
 * displays the top navigation bar of the app.
 * 
 * Props:
 *  - currentUser: the currently logged-in user object (null if not logged in)
 *  - setCurrentUser: function to update the currentUser state (used for logout)
 * 
 * Functionality:
 *  - Displays 'Login' link if no user is logged in
 *  - Displays 'Logout' button if user is logged in
 *  - Handles logout and redirects to home page
 */

export default function Navbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate(); // Navigation hook

  const handleLogout = () => {
    navigate('/'); // Redirect to home page
    setTimeout(() => setCurrentUser(null), 5); // Log out user
  };
  
  return (
    <nav className="top-navbar">
      <div className="logo">MediConnect</div>

      <div className="links">
        {currentUser ? (
          <>
            {/* Show logout button if user is logged in */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            {/* Show login link if no user is logged in */}
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
