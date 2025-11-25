import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Like&Cmt.css";

/*
   - Displays all comments for a post  
   - Allows logged-in users to write new comments  
   - Redirects non-logged-in users to login  

   Props:
   - post: the post being viewed  
   - currentUser: the logged-in user (or null if not logged in)  
   - onAddComment: function for adding a new comment into state  
*/

const CommentsSection = ({ post, currentUser, onAddComment }) => {
  // State for new comment input
  const [commentInput, setCommentInput] = useState("");
  // Navigation hook
  const navigate = useNavigate();
  
  // Handler for adding a new comment
  const handleAddComment = () => {
    if (!commentInput.trim()) return; //ignore empty comments

    // Check if user is logged in
    if (!currentUser) { //not logged in
      navigate("/login"); //redirect to login
      alert("You must be logged in to comment!");
      return;
    }

    // Call parent handler to add comment to the correct post
    onAddComment(post.id, commentInput.trim());
    setCommentInput("");
  };

  return (
    <div className="comments-section">
      
      <h4 className="comments-title">
        Comments ({post.comments ? post.comments.length : 0})
      </h4>

      {/* Displays the list of comments or "No comments" message */}
      {post.comments && post.comments.length > 0 ? (
        post.comments.map((comment, index) => (
          <div key={index} className="comment-item">

            {/* Display author and role */}
            <p className="comment-author">
              {comment.author}
              <span className="comment-role">({comment.role})</span>
            </p>

            {/* Actual comment text */}
            <p className="comment-text">{comment.text}</p>

          </div>
        ))
      ) : ( //No comments yet -->
        <p className="no-comments">No comments yet. Be the first to comment!</p>
      )}
      

      {/* Comment input + post button */}
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