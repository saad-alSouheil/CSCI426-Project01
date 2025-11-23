import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ users, setUsers }) {
  const [newUsername, setNewUsername] = useState("");
  const [newRole, setNewRole] = useState("patient");
  
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
      bio: "",
    };

    setUsers((prev) => [...prev, newUser]);
    navigate("/login");
    setNewUsername("");
  };

  return (
    <div>
      <h2>Sign up</h2>
      <input
        placeholder="Choose a username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />

      <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      <button onClick={handleRegister}>Creat Account</button>
    </div>
  );
}
