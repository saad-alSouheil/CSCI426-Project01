import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Register.css";
export default function Register({ users, setUsers }) {
  const [newUsername, setNewUsername] = useState("");
  const [newRole, setNewRole] = useState("Patient");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!newUsername.trim()) {
      alert("Username is required.");
      return;
    }

    const exists = users.some((u) => u.username === newUsername);
    if (exists) {
      alert("Username already exists!");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: newUsername,
      role: newRole,
      password: password,
      gender: gender,
      bio: "",
    };

    setUsers((prev) => [...prev, newUser]);
    alert("Account created! You can now log in.");
    navigate("/login");
    setNewUsername("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>

        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Role</label>
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="form-select"
          >
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
        </div>

        <button onClick={handleRegister} className="register-button">
          Create Account
        </button>

      </div>
    </div>
  );
}