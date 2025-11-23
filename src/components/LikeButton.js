import React, { useState } from "react";
import "../style/Like&Cmt.css";

const LikeButton = ({ post, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onLike(post.id, !liked ? 1 : -1);
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