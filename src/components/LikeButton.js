import React, { useState } from "react";

const LikeButton = ({ post, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onLike(post.id, !liked ? 1 : -1);
  };

  return (
    <button onClick={handleClick}>
      {liked ? "Unlike" : "Like"} ({post.likes})
    </button>
  );
};

export default LikeButton;
