import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiscussionsPage = ({discussions}) => {
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
      

      {/* If no discussions */}
      {filteredDiscussions.length === 0 && <p>No discussions found.</p>}

      {/* List discussions */}
      <div style={{ marginTop: "20px" }}>
        {filteredDiscussions.map((disc) => (
          <div
            key={disc.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
          >
            <h3>{disc.title}</h3>

            <p>
              <strong>By:</strong> {disc.author} ({disc.role})
            </p>
            <p>
              <strong>Date:</strong> {disc.date}
            </p>

            <p>{disc.content.slice(0, 100)}...</p>

            <Link to={`/discussion/${disc.id}`}>
              <button style={{ marginTop: "10px" }}>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionsPage;
