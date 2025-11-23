import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddDiscussion = ({currentUser, addDiscussion }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  // If user is NOT logged in -> block access:
 useEffect(() => {
  if (!currentUser) {
    navigate("/login");
    alert("You must be logged in!");
  }
}, [currentUser, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiscussion = {
      id: Date.now(), // unique ID
      title,
      content,
      author: currentUser.name,
      role: currentUser.role,
      date: new Date().toISOString().split("T")[0],
    };

    addDiscussion(newDiscussion);

    // Go back to discussions page
    navigate("/discussions");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create a New Discussion</h2>

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

        <button
          type="submit"
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          Post Discussion
        </button>
      </form>
    </div>
  );
};

export default AddDiscussion;
