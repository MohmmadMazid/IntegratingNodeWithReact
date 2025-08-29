import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import UsersList from "./pages/users/UsersList";
// import AddUser from "./pages/users/AddUser";
import AddUser from "./pages/users/AddUser";
import UsersList from "./pages/users/Userlist";
import PostsList from "./pages/posts/PostsList";
import AddPost from "./pages/posts/AddPost";

function App() {
  return (
    <Router>
      <div>
        <h1>✅ MERN Modular App</h1>
        <nav>
          <Link to="/users">Users List</Link> |{" "}
          <Link to="/add-user">Add User</Link> |{" "}
          <Link to="/posts">Posts List</Link> |{" "}
          <Link to="/add-post">Add Post</Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
