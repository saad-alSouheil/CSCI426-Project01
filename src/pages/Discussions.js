import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "../components/PostCards";

const DiscussionsPage = ({discussions, currentUser}) => {
  const [search, setSearch] = useState("");

  // Filter based on search term
  const filteredDiscussions = discussions.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Discussions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search discussions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
      />

      
        <Link to="/create-discussion">
          <button style={{ marginLeft: "20px", padding: "8px 15px" }}>
            + New Discussion
          </button>
        </Link>
      

      <div style={{ marginTop: "20px" }}>
        {filteredDiscussions.length === 0 && <p>No discussions found.</p>}
        {filteredDiscussions.map((d) => (
          <PostCards
            key={d.id}
            discussion={d}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscussionsPage;
