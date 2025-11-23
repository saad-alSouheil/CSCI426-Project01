import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCards from "../components/PostCards";

export default function Dashboard({ currentUser, posts }) {
const navigate = useNavigate();
useEffect(() => {
    if (!currentUser) {
      navigate("/"); // redirect to home if logged out
    }
  }, [currentUser, navigate]);


  const isDoctor = currentUser.role === "doctor";

  const recentQuest = [...posts]
    .reverse()
    .filter((p) => p.type === "question")
    .slice(0, 2);

  const recentPosts = [...posts]
    .reverse()
    .filter((p) => p.type === "study")
    .slice(0, 2);

let title = "";

if (currentUser.role === "doctor") {
  title = "Dr.";
} else {
  // patient
  if (currentUser.gender === "male") {
    title = "Mr.";
  } else if (currentUser.gender === "female") {
    title = "Ms.";
  }
}

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome,{" "} {title} {currentUser.username} 👋</h2>
      

      <hr />

      {/* Doctor-only section */}
      {isDoctor && (
        <>
          <h3>Recent Questions</h3>
          {recentQuest.length === 0 ? (
            <p>No questions yet.</p>
          ) : (
            <div style={{ marginTop: "20px" }}>
              {recentQuest.map((q) => (
                <PostCards
                  key={q.id}
                  discussion={q}
                  currentUser={currentUser}
                />
              ))}
            </div>
          )}

          <hr />
        </>
      )}

      {/* Everyone sees this */}
      <h3>Recent Study Posts</h3>
      {recentPosts.length === 0 ? (
        <p>No study posts yet.</p>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {recentPosts.map((p) => (
            <PostCards
              key={p.id}
              discussion={p}
              currentUser={currentUser}
            />
          ))}
        </div>
      )}
    </div>
  );
}
