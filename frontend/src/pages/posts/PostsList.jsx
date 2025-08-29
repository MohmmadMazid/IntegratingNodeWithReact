import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../api/api";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map((p) => (
          <li key={p._id}>
            <b>{p.title}</b> - {p.author}
            <button onClick={() => handleDelete(p._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
