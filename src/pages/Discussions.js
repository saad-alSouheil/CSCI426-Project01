// src/pages/Discussions.jsx
import { useState } from "react";

const initialPosts = [
  { id: 1, author: "doctor1", role: "doctor", content: "Hello, I can help." },
  { id: 2, author: "patient1", role: "patient", content: "I have a question." },
];

export default function Discussions({ currentUser }) {
  const [posts, setPosts] = useState(initialPosts);
  const [text, setText] = useState("");

  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      author: currentUser.username,
      role: currentUser.role,
      content: text,
    };
    setPosts([newPost, ...posts]);
    setText("");
  };

  return (
    <div>
      <h2>Discussions</h2>

      <textarea
        placeholder="Write a post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>

      <hr />

      {posts.map((p) => (
        <div key={p.id} style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
          <strong>{p.author}</strong> 
          <span style={{
            background: p.role === "doctor" ? "lightblue" : "lightgreen",
            padding: "2px 6px",
            marginLeft: 6,
            borderRadius: 4,
            fontSize: "0.8em"
          }}>
            {p.role}
          </span>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
