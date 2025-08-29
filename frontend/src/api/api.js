import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// User APIs
export const getUsers = () => API.get("/users");
export const createUser = (user) => API.post("/users", user);

// Post APIs
export const getPosts = () => API.get("/posts");
export const createPost = (post) => API.post("/posts", post);
export const deletePost = (id) => API.delete(`/posts/${id}`);
