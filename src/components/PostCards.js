import React from "react";
import { Link } from "react-router-dom";
import "../style/PostCards.css";

const PostCards = ({ post, currentUser }) => {
  return (
    <div className="post-card" data-type={post.type}>
      <h3 className="post-title">{post?.title}</h3>
      
      <div className="post-meta">
        <div className="meta-item">
          <span className="meta-label">By</span>
          <span className="meta-label">{post.author}</span>
          <span className="author-badge">{post.role}</span>
        </div>
        
        <div className="meta-item">
          <span className="type-badge">{post.type}</span>
        </div>
        
        <div className="meta-item">
          <span className="meta-label">Date:</span>
          <span>{post.date}</span>
        </div>
        
        
          <div className="meta-item">
            <span className="meta-label">Likes:</span>
            <span>{post.likes}</span>
          </div>
        
      </div>
      
      <p className="post-content">{post.content.slice(0, 200)}...</p>

      <div className="post-actions">
        <Link to={`/post/${post.id}`}>
          <button className="view-button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCards;