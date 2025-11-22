import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/NavbarTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Discussions from "./pages/Discussions";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import { preloadedUsers } from "./data/Users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(preloadedUsers);

  return (
    <Router>
      <TopNavbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route
        path="/login"
        element={<Login users={users} setCurrentUser={setCurrentUser} />}
      />
      <Route
        path="/register"
        element={<Register users={users} setUsers={setUsers}/>}
      />
      <Route path="/" element={<Home />} />
        
      <Route path="/discussions" element={<Discussions currentUser={currentUser} />} />
      <Route path="/about" element={<About />} />
      {currentUser && (
          <>
            <Route path="/profile" element={<Profile user={currentUser} />} />
          </>
        )
      }
      </Routes>

      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      
    </Router>
  );
}

export default App;
