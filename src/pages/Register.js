// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUsers }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleRegister = () => {
    const newUser = {
      id: Date.now(),
      username,
      role,
      bio: "",
    };
    setUsers((prev) => [...prev, newUser]);
    alert("Registered! Now login.");
    navigate("/login");
  };

  return (
    <div>
      <h2>Create Account</h2>

      <input
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
