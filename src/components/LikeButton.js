import React, { useState } from "react";

const LikeButton = ({ discussion, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onLike(discussion.id, !liked ? 1 : -1);
  };

  return (
    <button onClick={handleClick}>
      {liked ? "Unlike" : "Like"} ({discussion.likes})
    </button>
  );
};

export default LikeButton;
