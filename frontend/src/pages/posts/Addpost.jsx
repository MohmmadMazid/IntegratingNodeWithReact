import React, { useState } from "react";
import { createPost } from "../../api/api";

function AddPost() {
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(form);
    alert("✅ Post added successfully!");
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="content" placeholder="Content" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
