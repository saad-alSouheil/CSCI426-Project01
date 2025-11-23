import React from 'react';
import { useState } from 'react'; 
import PostCards from "../components/PostCards";

export default function Profile({ user, currentUser, posts, setCurrentUser, setUsers  }) {
  // Filter posts where author matches either username or full name
  const filteredPosts = posts.filter(p => 
    p?.author === currentUser?.username || 
    p?.author === currentUser?.name
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(user.bio || "");

 const handleBioUpdate = () => {
    const updatedUser = {
      ...user,
      bio: editedBio
    };

    setCurrentUser(updatedUser);
    setUsers(prevUsers => 
      prevUsers.map(u => u.id === user.id ? updatedUser : u)
    );
    
    setIsEditing(false);
  };

  return (
    <div>
      <h2>My Profile</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Role:</b> {user.role}</p>
      <p><b>Gender:</b> {user.gender}</p>

       {/* Bio Section with Edit Functionality */}
      <div>
        <b>Bio:</b>
        {isEditing ? (
          <div>
            <textarea
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
              rows="3"
              placeholder="Tell us about yourself..."
            />
            <button onClick={handleBioUpdate}>Save</button>
            <button onClick={() => {
              setEditedBio(user.bio || "");
              setIsEditing(false);
            }}>Cancel</button>
          </div>
        ) : (
          <div>
            <p>{user.bio || "No bio yet"}</p>
            <button onClick={() => setIsEditing(true)}>Edit Bio</button>
          </div>
        )}
      </div>
<hr />
      <div style={{ marginTop: "20px" }}>
         <h3 className="posts-count">My Posts ({filteredPosts.length})</h3>
        {filteredPosts.length === 0 ? (
          <p className="no-posts">
            No posts yet. Start by creating your first post!
          </p>
        ) : (
          filteredPosts.map((d) => (
            <PostCards
              key={d.id}
              post={d}
              currentUser={currentUser}
            />
          ))
        )}
      </div>
    </div>
  );
}