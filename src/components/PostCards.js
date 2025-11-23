import React from "react";
import { Link } from "react-router-dom";

const PostCards = ({ post, currentUser}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "15px",
      }}
    >
      <h3>{post?.title}</h3>
      <p>
        <strong>By:</strong> {post.author} ({post.role})
      </p>
      <p>{post.type}</p>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      <p>{post.content.slice(0, 200)}...</p>

      
        <Link to={`/post/${post.id}`}>
          <button style={{ marginLeft: "10px" }}>View</button>
        </Link>
      </div>
  );
};

export default PostCards;
