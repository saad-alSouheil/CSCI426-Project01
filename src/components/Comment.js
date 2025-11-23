import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Like&Cmt.css";

const CommentsSection = ({ post, currentUser, onAddComment }) => {
  const [commentInput, setCommentInput] = useState("");
  const navigate = useNavigate();

  const handleAddComment = () => {
    if (!commentInput.trim()) return;

    if (!currentUser) {
      navigate("/login");
      alert("You must be logged in to comment!");
      return;
    }

    onAddComment(post.id, commentInput.trim());
    setCommentInput("");
  };

  return (
    <div className="comments-section">
      <h4 className="comments-title">
        Comments ({post.comments ? post.comments.length : 0})
      </h4>

      {post.comments && post.comments.length > 0 ? (
        post.comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p className="comment-author">
              {comment.author} 
              <span className="comment-role">({comment.role})</span>
            </p>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))
      ) : (
        <p className="no-comments">No comments yet. Be the first to comment!</p>
      )}

      <div className="comment-input-container">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          className="comment-input"
        />
        <button 
          onClick={handleAddComment} 
          className="comment-submit"
          disabled={!commentInput.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;