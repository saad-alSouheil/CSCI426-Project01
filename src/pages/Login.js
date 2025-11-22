// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = users.find((u) => u.username === username);
    if (found) {
      setCurrentUser(found);
      navigate("/discussions");
    } else {
      alert("User not found!");
    }
  };

  return (
    <div>
      <h2>Fake Login</h2>
      <input
        placeholder="Enter username (doctor1 or patient1)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
