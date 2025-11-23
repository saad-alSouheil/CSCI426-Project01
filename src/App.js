import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/NavbarTop";
import Login from "./pages/Login";
import Register from "./components/Register";
import Discussions from "./pages/Discussions";
import ViewDiscussion from "./pages/ViewDiscussion";
import AddDiscussion from "./pages/addDiscussion";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { preloadedUsers } from "./data/Users";
import { discussionsData } from "./data/discussionsData";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(preloadedUsers);
  const [allDiscussions, setAllDiscussions] = useState(discussionsData);

  const addDiscussion = (discussion) => {
    setAllDiscussions((prev) => [...prev, discussion]);
  };
  const handleLike = (id, delta) => {
  setAllDiscussions(prev =>
    prev.map(d => (d.id === id ? { ...d, likes: d.likes + delta } : d))
  );
};

const handleAddComment = (discussionId, text) => {
  setAllDiscussions(prev =>
    prev.map(d =>
      d.id === discussionId
        ? {
            ...d,
            comments: [
              ...d.comments,
              { author: currentUser.name, role: currentUser.role, text }
            ]
          }
        : d
    )
  );
};


  return (
    <Router>
      <TopNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} discussions={allDiscussions}/>
      <div className="app-layout">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} discussions={allDiscussions} />
      <main className="main-content">
      <Routes>
        <Route
        path="/login"
        element={<Login 
          users={users}
          setCurrentUser={setCurrentUser}
          setUsers={setUsers}
         />}
      />
      <Route
        path="/register"
        element={<Register users={users} setCurrentUser={setCurrentUser} setUsers={setUsers}/>}
      />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard  currentUser={currentUser} posts={allDiscussions}/>} />
      
      <Route
  path="/discussion/:id"
  element={
    <ViewDiscussion
      discussions={allDiscussions}
      currentUser={currentUser}
      handleLike={handleLike}
      handleAddComment={handleAddComment}
    />
  }
/>

<Route
  path="/discussions"
  element={
    <Discussions
      currentUser={currentUser}
      discussions={allDiscussions}
      setAllDiscussions={setAllDiscussions}
    />
  }
/>

      <Route
          path="/create-discussion"
          element={
            <AddDiscussion
              currentUser={currentUser}
              addDiscussion={addDiscussion}
            />
          }
        />
      <Route path="/about" element={<About />} />
      {currentUser && (
          <>
            <Route path="/profile" element={<Profile user={currentUser} />} />
          </>
        )
      }
      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
