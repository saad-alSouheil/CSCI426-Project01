import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";

export default function Login({ users, setCurrentUser }) {
  const [selectedUser, setSelectedUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = users.find((u) => u.username === selectedUser);
    if (found) {
      setCurrentUser(found);
      navigate("/dashboard");
    } else {
      alert("Please select a user.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <div className="form-group">
          <label className="form-label">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="form-select"
          >
            <option value="">Choose a user to login...</option>
            {users.map((u) => (
              <option key={u.id} value={u.username}>
                {u.username} ({u.role})
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <div className="divider"></div>

        <div className="register-section">
          <p className="register-text">Don't have an account?</p>
          <Link to="/register" className="register-button">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}