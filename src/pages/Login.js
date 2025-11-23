import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ users, setCurrentUser}) {
  const [selectedUser, setSelectedUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = users.find((u) => u.username === selectedUser);
    if (found) {
      setCurrentUser(found);
      navigate("/discussions");
    } else {
      alert("Please select a user.");
    }
  };


  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      {/* LOGIN DROPDOWN */}
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((u) => (
          <option key={u.id} value={u.username}>
            {u.username} ({u.role})
          </option>
        ))}
      </select>

      <button onClick={handleLogin}>Login</button>

      <hr />

      <p>Doesn't have an account? Sign up now</p>
      <Link to="/register"><button>Sign Up</button></Link>
    </div>
  );
}
