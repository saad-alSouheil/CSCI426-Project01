// src/pages/Profile.jsx
export default function Profile({ user }) {
  return (
    <div>
      <h2>My Profile</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Role:</b> {user.role}</p>
      <p><b>Bio:</b> {user.bio || "No bio yet"}</p>
    </div>
  );
}
