import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar({ currentUser }) {
  return (
    <aside className="side-navbar">
      <ul>
        <li>
          {currentUser ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
              </>
              ):(
              <><Link to="/">Home</Link></>
                )
            }
        </li>
        <li><Link to="/posts">Explore</Link></li>
        <li>{currentUser?.role === "doctor" && <Link to="/discussions">Discussions</Link>}</li>
        <li>{currentUser && <Link to="/profile">Profile</Link>}</li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </aside>
  );
}

export default Navbar;