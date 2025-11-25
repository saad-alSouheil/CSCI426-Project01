import React from "react";
import { Link } from "react-router-dom";
import "../style/PostCards.css";

/**
 * displays a summary card for a post.
 * 
 * Props:
 *  - post: post object containing details like title, author, role, type, date, likes, and content
 * 
 * Functionality:
 *  - It shows the title, author, role, type of post, date, likes, and a preview of the content.
 *  - navigate to the full post page
 */

const PostCards = ({post}) => {
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
      
      <p className="post-content">{post.content.slice(0, 200)}...</p> {/* Preview of content */}

      <div className="post-actions">
        <Link to={`/post/${post.id}`}> {/* Link to full post */}
          <button className="view-button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCards;