import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCards from "../components/PostCards";
import "../style/Dashboard.css";

export default function Dashboard({ currentUser, posts }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const isDoctor = currentUser?.role === "Doctor";

  const recentQuest = [...posts]
    .reverse()
    .filter((p) => p.type === "Discussion")
    .slice(0, 2);

  const recentPosts = [...posts]
    .reverse()
    .filter((p) => p.type === "Study")
    .slice(0, 2);

  let title = "";

  if (currentUser?.role === "Doctor") {
    title = "Dr.";
  } else {
    if (currentUser?.gender === "male") {
      title = "Mr.";
    } else if (currentUser?.gender === "female") {
      title = "Ms.";
    }
  }

  if (!currentUser) return null;

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h2 className="welcome-title">
          Welcome, {title} {currentUser.username}
        </h2>
      </div>

      {/* Doctor-only section */}
      {isDoctor && (
        <>
          <h3 className="section-title">Recent Discussions</h3>
          {recentQuest.length === 0 ? (
            <div className="empty-state">
              <p>No Discussions yet.</p>
            </div>
          ) : (
            <div className="posts-grid">
              {recentQuest.map((q) => (
                <PostCards
                  key={q.id}
                  post={q}
                  currentUser={currentUser}
                />
              ))}
            </div>
          )}

          <div className="section-divider"></div>
        </>
      )}

      {/* Everyone sees this */}
      <h3 className="section-title">Recent Study Posts</h3>
      {recentPosts.length === 0 ? (
        <div className="empty-state">
          <p>No Study posts yet.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {recentPosts.map((p) => (
            <PostCards
              key={p.id}
              post={p}
              currentUser={currentUser}
            />
          ))}
        </div>
      )}
    </div>
  );
}