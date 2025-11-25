import React from "react";
import { Link } from "react-router-dom";

import "../style/Home.css";

/**
 * Home Page
 * 
 * Functionality:
 * - Serves as the landing page for the application. 
 */

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to MediConnect</h1>
        <p className="hero-subtitle">
          Your trusted online healthcare companion.  
          Connect with doctors, ask questions, and get reliable information — 
          all in one place.
        </p>
        <p className="hero-subtitle">
          Whether you're here to start a discussion or simply learn more,
          we’re always here to help.
        </p>
        
        <div className="cta-buttons">
          <Link to="/register" className="cta-button primary">
            Get Started
          </Link>
          <Link to="/about" className="cta-button secondary">
            Learn More
          </Link>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Community Support</h3>
            <p>Connect with Patients and healthcare professionals</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💬</div>
            <h3>Share Experiences</h3>
            <p>Discuss health topics and share your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;