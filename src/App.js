import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navigation components:
import Navbar from "./components/Navbar";
import TopNavbar from "./components/NavbarTop";

// Pages:
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
import Footer from "./components/Footer";

// Data:
import { preloadedUsers } from "./data/Users";
import { postsData } from "./data/postsData";

import "./App.css";

function App() {

  // Keeps track of which user is logged in
  const [currentUser, setCurrentUser] = useState(null);

  // All users (including newly registered users)
  const [users, setUsers] = useState(preloadedUsers);

  // All posts (discussions, studies, questions)
  const [allPosts, setAllPosts] = useState(postsData);


  //Adds a new post
  const addPost = (post) => {
    setAllPosts((prev) => [...prev, post]); 
  };
  //Likes a post (delta is +1 or -1)
  const handleLike = (id, delta) => {
    setAllPosts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, likes: p.likes + delta } : p
      )
    );
  };

  //Adds a comment to a selected post
  const handleAddComment = (postId, text) => {
    setAllPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  author: currentUser.name,
                  role: currentUser.role,
                  text,
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <Router basename="/CSCI426-Project01">

      {/* Top navigation bar */}
      <TopNavbar 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser}
        posts={allPosts}
      />

      <div className="app-layout">

        {/* Left sidebar*/}
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          posts={allPosts}
        />

        <main className="main-content">

          <Routes>

            {/* LOGIN */}
            <Route 
              path="/login"
              element={
                <Login 
                  users={users}
                  setCurrentUser={setCurrentUser}
                  setUsers={setUsers}
                />
              }
            />

            {/* REGISTER */}
            <Route 
              path="/register"
              element={
                <Register 
                  users={users}
                  setCurrentUser={setCurrentUser}
                  setUsers={setUsers}
                />
              }
            />

            {/* HOME PAGE */}
            <Route path="/" element={<Home />} />

            {/* DASHBOARD */}
            <Route 
              path="/dashboard"
              element={<Dashboard currentUser={currentUser} posts={allPosts} />}
            />

            {/* DOCTOR-ONLY ROUTE */}
            {currentUser?.role === "Doctor" && (
              <Route
                path="/discussions"
                element={<DiscussionsPage posts={allPosts} currentUser={currentUser} />}
              />
            )}

            {/* VIEW POST */}
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

            {/* EXPLORE All POSTS */}
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

            {/* CREATE NEW POST */}
            <Route
              path="/create-post"
              element={
                <AddPost 
                  currentUser={currentUser}
                  addPost={addPost}
                />
              }
            />

            {/* ABOUT PAGE */}
            <Route path="/about" element={<About />} />

            {/* PROFILE — only for logged in users */}
            {currentUser && (
              <Route
                path="/profile"
                element={
                  <Profile
                    user={currentUser}
                    currentUser={currentUser}
                    posts={allPosts}
                    setCurrentUser={setCurrentUser}
                    setUsers={setUsers}
                  />
                }
              />
            )}

          </Routes>

          {/* FOOTER */}
          <div className="footer">
            <Footer />
          </div>

        </main>
      </div>
    </Router>
  );
}

export default App;
