import React, { useState } from "react";
import { createUser } from "../../api/api";

function AddUser() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    alert("✅ User added successfully!");
    console.log(form);
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
