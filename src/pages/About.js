import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Our Platform</h2>

      <div className="about-content">
        <p className="about-paragraph">
          This platform was created to make communication between Doctors and
          Patients easier and faster. Patients can post questions, share concerns,
          and learn from others — while Doctors can provide reliable guidance and
          clarify medical topics.
        </p>

        <p className="about-paragraph">
          Our goal is to help users:
        </p>

        <ul className="about-list">
          <li>Get quick medical insights</li>
          <li>Ask health-related questions</li>
          <li>Share experiences</li>
          <li>Stay informed with trustworthy information</li>
        </ul>

        <div className="about-note">
          This app is not a replacement for real medical diagnosis, but a space
          for learning and guidance.
        </div>
      </div>
    </div>
  );
}