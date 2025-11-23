import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostCards from "../components/PostCards";

const PostsPage = ({posts, currentUser}) => {
  const [search, setSearch] = useState("");

  // Filter based on search term
  const filteredPosts = posts.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Posts</h2>

       {/* Search */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
      />
      
      <div style={{ marginTop: "20px" }}>
        {filteredPosts.length === 0 && <p>No posts found.</p>}
        {filteredPosts.map((d) => (
          <PostCards
            key={d.id}
            post={d}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
