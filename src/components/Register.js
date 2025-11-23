import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ users, setUsers }) {
  const [newUsername, setNewUsername] = useState("");
  const [newRole, setNewRole] = useState("patient");
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
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Create Account</h2>

      <label>Username</label>
      <input
        type="text"
        placeholder="Choose a username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Choose a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Gender</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label>Role</label>
      <select
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
      >
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      <button
        onClick={handleRegister}
        style={{ padding: "10px 20px", width: "100%" }}
      >
        Create Account
      </button>
    </div>
  );
}