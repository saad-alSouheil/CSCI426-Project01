import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to the Online Doctor Platform</h1>

      <p style={{ fontSize: "18px", marginTop: "15px" }}>
        Connect with medical professionals, ask questions, and participate in
        health discussions. This platform makes it easy for anyone to seek help
        and share knowledge.
      </p>

      <hr style={{ margin: "25px 0" }} />


      <div style={{ marginTop: "30px" }}>
        <Link to="/posts">
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            View Discussions
          </button>
        </Link>

        <Link to="/register">
          <button style={{ padding: "10px 20px" }}>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
