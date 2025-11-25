/**
 * Props:
 * - post: The post object
 * - onLike: Function from parent that updates the like count
 */

import React, { useState } from "react";
import "../style/Like&Cmt.css";

const LikeButton = ({ post, onLike }) => {
  // Tracks if the current user has liked the post
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked); //change like state
    onLike(post.id, !liked ? 1 : -1); //update like count in parent
  };

  return (
    <button 
      onClick={handleClick} 
      className={`like-button ${liked ? 'liked' : ''}`}
    >
      {liked ? "❤️ Unlike" : "🤍 Like"} 
      <span className="like-count">({post.likes})</span>
    </button>
  );
};

export default LikeButton;