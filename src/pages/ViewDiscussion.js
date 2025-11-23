import React from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import CommentsSection from "../components/Comment";

const ViewDiscussion = ({ discussions, currentUser, handleAddComment, handleLike }) => {
  const { id } = useParams();
  const discussion = discussions.find(d => d.id === Number(id));

  if (!discussion) return <p>Discussion not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{discussion.title}</h2>
      <p>
        <strong>By:</strong> {discussion.author} ({discussion.role})
      </p>
      <p>
        <strong>Date:</strong> {discussion.date}
      </p>
      <p style={{ marginTop: "20px" }}>{discussion.content}</p>

      <div style={{ marginTop: "20px" }}>
        <LikeButton discussion={discussion} onLike={handleLike} />
        <CommentsSection
          discussion={discussion}
          currentUser={currentUser}
          onAddComment={handleAddComment}
        />
      </div>
    </div>
  );
};

export default ViewDiscussion;
