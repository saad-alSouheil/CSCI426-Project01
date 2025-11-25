/**
 * This component provides a form for new users to create an account.
 * When submitted, it adds the new user to the list of existing users and navigates to the login page.
 * 
 * Props:
 * - users: array of existing user objects
 * - setUsers: function to update the users array
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Register.css";

export default function Register({ users, setUsers }) {

  //state variables for form inputs
  const [newUsername, setNewUsername] = useState(""); 
  const [newRole, setNewRole] = useState("Patient"); 
  const [password, setPassword] = useState("");       
  const [gender, setGender] = useState("male");     

  const navigate = useNavigate(); // used to redirect to another page


  const handleRegister = () => {
    if (!newUsername.trim()) {   // checks for empty username
      alert("Username is required.");
      return;
    }

    const exists = users.some((u) => u.username === newUsername); // check duplicate username
    if (exists) {
      alert("Username already exists!");
      return;
    }

    // Create new user object
    const newUser = {
      id: Date.now(),  
      username: newUsername,
      role: newRole,
      password: password,
      gender: gender,
      bio: "",          
    };

    // Add the new user to the users state
    setUsers((prev) => [...prev, newUser]);

    alert("Account created! You can now log in."); 
    navigate("/login");         // redirect to login page

    // Reset form fields
    setNewUsername("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>

        {/* Username */}
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

        {/* Password */}
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

        {/* Gender */}
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

        {/* Role */}
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
