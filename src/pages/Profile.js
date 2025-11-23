import React from 'react';
import { useState } from 'react'; 
import PostCards from "../components/PostCards";
import pfp from "../assets/pfp.jpg";
import "../style/Profile.css";

export default function Profile({ user, currentUser, posts, setCurrentUser, setUsers }) {
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
    <div className="profile-container">
      <div className="profile-header">
        
         <div className="profile-picture-section">
          <div className="profile-picture-container">
            <div className="profile-picture">
              <img 
                src={pfp} 
                alt="Profile" 
              />
            </div>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Username</span>
            <span className="info-value">{user.username}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Role</span>
            <span className="info-value">{user.role}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Gender</span>
            <span className="info-value">{user.gender}</span>
          </div>
        </div>

        <div className="bio-section">
          <div className="bio-label">Bio</div>
          {isEditing ? (
            <div>
              <textarea
                value={editedBio}
                onChange={(e) => setEditedBio(e.target.value)}
                rows="3"
                className="bio-textarea"
                placeholder="Tell us about yourself..."
              />
              <div className="bio-actions">
                <button onClick={handleBioUpdate} className="save-button">
                  Save Bio
                </button>
                <button onClick={() => {
                  setEditedBio(user.bio || "");
                  setIsEditing(false);
                }} className="cancel-button">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="bio-content">{user.bio || "No bio yet"}</p>
              <button onClick={() => setIsEditing(true)} className="edit-button">
                Edit Bio
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="posts-section">
        <h3 className="posts-count">My Posts ({filteredPosts.length})</h3>
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            No posts yet. Start by creating your first post!
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <PostCards
                key={post.id}
                post={post}
                currentUser={currentUser}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}