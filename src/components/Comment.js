import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentsSection = ({ discussion, currentUser, onAddComment }) => {
  const [commentInput, setCommentInput] = useState("");
  const navigate =useNavigate();
  const handleAddComment = () => {
    if (!commentInput.trim()) return;

    if (!currentUser) {
      navigate("/login");
      alert("You must be logged in to comment!");
      return;
    }

    onAddComment(discussion.id, commentInput.trim());
    setCommentInput("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <p>({discussion.comments.length}) Comments</p>

      {discussion.comments.map((c, i) => (
  <div key={i} style={{ borderBottom: "1px solid #eee", paddingBottom: "5px", marginBottom: "5px" }}>
    <p style={{ margin: 0 }}>
      <strong>{c.username} ({c.role})</strong>
    </p>
    <p style={{ margin: 0 }}>{c.text}</p>
  </div>
))}

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          style={{ width: "80%", padding: "5px" }}
        />
        <button onClick={handleAddComment} style={{ marginLeft: "5px" }}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
