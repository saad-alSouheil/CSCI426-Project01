/**
 * Dashboard Page
 * 
 * Props:
 *  - currentUser: The currently logged-in user object
 *  -posts: Array of all posts available.
 *
 * functionality:
 *  - Displays a personalized dashboard, 
 *  - based on the user's role and gender. Only for doctors, it shows recent "Discussion" posts,
 *  and for all users, it shows recent "Study" posts.
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PostCards from "../components/PostCards"; // use postCards component for displaying post cards

import "../style/Dashboard.css";

export default function Dashboard({ currentUser, posts }) {
  const navigate = useNavigate();

  // Redirect to home if user is not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // Check if the user is a doctor
  const isDoctor = currentUser?.role === "Doctor";

  // Get the 2 most recent Discussions (for doctors)
  const recentQuest = [...posts]
    .reverse() // reverse to get newest first
    .filter((p) => p.type === "Discussion")
    .slice(0, 2);

  // Get the 2 most recent Study posts (for doctors and patients)
  const recentPosts = [...posts]
    .reverse()
    .filter((p) => p.type === "Study")
    .slice(0, 2); // Get only the 2 most recent

  // Determine the title to use in welcome message
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

      {/* Doctor-only section: Recent Discussions */}
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
                <PostCards key={q.id} post={q} currentUser={currentUser} />
              ))}
            </div>
          )}
          <div className="section-divider"></div>
        </>
      )}

      {/* Section visible to everyone: Recent Study Posts */}
      <h3 className="section-title">Recent Study Posts</h3>
      {recentPosts.length === 0 ? (
        <div className="empty-state">
          <p>No Study posts yet.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {recentPosts.map((p) => (
            <PostCards key={p.id} post={p} currentUser={currentUser} />
          ))}
        </div>
      )}
    </div>
  );
}
