import React from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import CommentsSection from "../components/Comment";

const ViewPost = ({ posts, currentUser, handleAddComment, handleLike }) => {
  const { id } = useParams();
  const post = posts.find(d => d.id === Number(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>
        <strong>By:</strong> {post.author} ({post.role})
      </p>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      <p style={{ marginTop: "20px" }}>{post.content}</p>

      <div style={{ marginTop: "20px" }}>
        <LikeButton post={post} onLike={handleLike} />
        <CommentsSection
          post={post}
          currentUser={currentUser}
          onAddComment={handleAddComment}
        />
      </div>
    </div>
  );
};

export default ViewPost;
