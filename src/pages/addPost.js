import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = ({currentUser, addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("study");


  const navigate = useNavigate();

  // If user is NOT logged in -> block access:
 useEffect(() => {
  if (!currentUser) {
    navigate("/login");
    alert("You must be logged in!");
  }
}, [currentUser, navigate]);

if (!currentUser) return null; 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Automatically set type for patients
    const postType =
      currentUser.role === "doctor" ? type : "discussion";


    const newPost = {
      id: Date.now(), // unique ID
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
    <div style={{ padding: "20px" }}>
      <h2>Create a New Post</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <label>Content</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "150px", padding: "8px" }}
        />

   {currentUser.role === "doctor" && (
          <>
            <label>Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
            >
              <option value="study">Study</option>
              <option value="topic">Topic</option>
            </select>
          </>
        )}

        <button
          type="submit"
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          Post Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
