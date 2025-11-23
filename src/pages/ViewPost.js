import React from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import CommentsSection from "../components/Comment";
import "../style/ViewPosts.css";

const ViewPost = ({ posts, currentUser, handleAddComment, handleLike }) => {
  const { id } = useParams();
  const post = posts.find(d => d.id === Number(id));

  if (!post) return (
    <div className="view-post-container">
      <p className="post-not-found">Post not found.</p>
    </div>
  );

  return (
    <div className="view-post-container">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        
        <div className="post-meta">
          <div className="meta-item">
            <span className="meta-label">By:</span>
            <span className="author-badge">{post.author} ({post.role})</span>
          </div>
          
          <div className="meta-item">
            <span className="meta-label">Type:</span>
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
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-actions">
        <LikeButton post={post} onLike={handleLike} />
      </div>

      <CommentsSection
        post={post}
        currentUser={currentUser}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default ViewPost;