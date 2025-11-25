import React from "react";
import { useState } from "react";

import SearchBar from "../components/SearchBar"; //use search bar component
import PostCards from "../components/PostCards"; // use postCards component for displaying post cards

import "../style/Discussions.css";

/**
  * Discussions Page
  * Props:
  *  - posts: Array of all posts available.
  *  - currentUser: The currently logged-in user object.
  * Functionality:
  * - Displays a list of "Discussion" type posts.
  * - Includes a search bar to filter discussions by title.
 */

export default function DiscussionsPage({ posts, currentUser }) {
  // State for search input
  const [search, setSearch] = useState("");

  // Filter posts to only include Discussions
  const Discussions = posts.filter(p => p.type === "Discussion");
  // Further filter discussions based on search input
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