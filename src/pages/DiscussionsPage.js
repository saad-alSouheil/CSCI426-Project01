import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCards";

export default function DiscussionsPage({posts}) {
  const [search, setSearch] = useState("");
  const discussions = posts.filter(p => p.type === "discussion");
  const filteredPosts = discussions.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h2>Discussions</h2>
       {/* Search */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
      />
      {filteredPosts.length === 0 ? (
        <p>No discussions found.</p>
      ) : (
        filteredPosts.map(d => <PostCard key={d.id} post={d} />)
      )}
    </div>
  );
}