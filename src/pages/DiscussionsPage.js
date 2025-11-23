import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostCards from "../components/PostCards";
import "../style/Discussions.css";

export default function DiscussionsPage({ posts, currentUser }) {
  const [search, setSearch] = useState("");
  const Discussions = posts.filter(p => p.type === "Discussion");
  const filteredPosts = Discussions.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="discussions-container">
      <div className="header-search-row">
      <h2 className="page-header">Patients' Discussions</h2>
      <div className="search-section">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Discussions..."
        />
      </div>
      </div>

      <div>
        {filteredPosts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <h3 className="empty-title">No Discussions found</h3>
          </div>
        ) : (
          filteredPosts.map(post => (
            <PostCards 
              key={post.id} 
              post={post} 
              currentUser={currentUser} 
            />
          ))
        )}
      </div>
    </div>
  );
}