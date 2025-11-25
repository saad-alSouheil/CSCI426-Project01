import React, { useState } from "react";

import SearchBar from "../components/SearchBar"; //use search bar component
import PostCards from "../components/PostCards"; // use postCards component for displaying post cards

import "../style/ExplorePage.css";  

/**
 * ExplorePage Page
 * 
 * Props:
 *  - posts: Array of all posts available.
 *  - currentUser: The currently logged-in user object.
 * Functionality:
 * - Displays a list of all posts.
 * - Includes a search bar to filter posts by title.
 */

const ExplorePage = ({ posts, currentUser }) => {
  // State for search input
  const [search, setSearch] = useState("");

  // Filter based on search term only
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore-container">
      <div className="header-search-row">
      <h2 className="page-header">Explore</h2>
      <div className="search-section">
        
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts by title..."
        />
      </div>
      </div>
      
      <div>
        {filteredPosts.length === 0 && <p className="no-posts">No posts found.</p>}
        {filteredPosts.map((post) => (
          <PostCards
            key={post.id}
            post={post}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;