import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../style/AddPost.css";

/**
 * AddPost Page for creating a new post.
 * 
 * props:
 * - currentUser: The currently logged-in user object.
 * - addPost: Function to add a new post to the list of posts.
 */

const AddPost = ({currentUser, addPost }) => {
  // State variables for form inputs
  const [title, setTitle] = useState(""); // Title of the post
  const [content, setContent] = useState(""); // Content of the post
  const [type, setType] = useState("Study"); // Type of the post (Study or topic)

  const navigate = useNavigate();

  // Redirect to login if user tries to create a post and is not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      alert("You must be logged in!");
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Set post type based on user role (Patients can only create Discussion posts)
    const postType = currentUser.role === "Doctor" ? type : "Discussion";

    const newPost = {
      id: Date.now(),
      title,
      type: postType,
      content,
      author: currentUser.name,
      role: currentUser.role,
      date: new Date().toISOString().split("T")[0],
      comments: [],  
      likes: 0  
    };

    addPost(newPost);
    navigate("/posts");
  };

  return (
    <div className="add-post-container">
      <h2 className="add-post-title">Create a New Post</h2>

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="Enter post title..."
          />
        </div>

        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-input form-textarea"
            placeholder="Write your post content here..."
          />
        </div>

        {currentUser.role === "Doctor" && (
          <div className="Doctor-only">
            <div className="form-group">
              <label className="form-label">Post Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="form-select"
              >
                <option value="Study">Study</option>
                <option value="topic">Topic</option>
              </select>
            </div>
          </div>
        )}

        <button type="submit" className="submit-button">
         Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;