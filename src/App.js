import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/NavbarTop";
import Login from "./pages/Login";
import Register from "./components/Register";
import ExplorePage from "./pages/ExplorePage";
import DiscussionsPage from "./pages/DiscussionsPage";
import ViewPost from "./pages/ViewPost";
import AddPost from "./pages/addPost";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { preloadedUsers } from "./data/Users";
import { postsData } from "./data/postsData";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(preloadedUsers);
  const [allPosts, setAllPosts] = useState(postsData);

  const addPost = (post) => {
    setAllPosts((prev) => [...prev, post]);
  };
  const handleLike = (id, delta) => {
  setAllPosts(prev =>
    prev.map(d => (d.id === id ? { ...d, likes: d.likes + delta } : d))
  );
};

const handleAddComment = (postId, text) => {
  setAllPosts(prev =>
    prev.map(d =>
      d.id === postId
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
      <TopNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} posts={allPosts}/>
      <div className="app-layout">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} posts={allPosts} />
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
      <Route path="/dashboard" element={<Dashboard  currentUser={currentUser} posts={allPosts}/>} />
      
      {currentUser?.role === "doctor" && (
      <Route
      path="/discussions"
      element={<DiscussionsPage posts={allPosts} currentUser={currentUser} />}
    />
    )}

      <Route
  path="/post/:id"
  element={
    <ViewPost
      posts={allPosts}
      currentUser={currentUser}
      handleLike={handleLike}
      handleAddComment={handleAddComment}
    />
  }
/>

<Route
  path="/posts"
  element={
    <ExplorePage
      currentUser={currentUser}
      posts={allPosts}
      setAllPosts={setAllPosts}
    />
  }
/>

      <Route
          path="/create-post"
          element={
            <AddPost
              currentUser={currentUser}
              addPost={addPost}
            />
          }
        />
      <Route path="/about" element={<About />} />
      {currentUser && (
          <>
            <Route path="/profile" element={<Profile user={currentUser} currentUser={currentUser} posts={allPosts} setCurrentUser={setCurrentUser} setUsers={setUsers} />} />
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
