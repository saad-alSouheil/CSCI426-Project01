import React from "react";
import { Link } from "react-router-dom";

const PostCards = ({ discussion, currentUser}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "15px",
      }}
    >
      <h3>{discussion.title}</h3>
      <p>
        <strong>By:</strong> {discussion.author} ({discussion.role})
      </p>
      <p>{discussion.type}</p>
      <p>
        <strong>Date:</strong> {discussion.date}
      </p>
      <p>{discussion.content.slice(0, 200)}...</p>

      
        <Link to={`/discussion/${discussion.id}`}>
          <button style={{ marginLeft: "10px" }}>View</button>
        </Link>
      </div>
  );
};

export default PostCards;
