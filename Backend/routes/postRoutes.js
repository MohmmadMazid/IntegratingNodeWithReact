const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/postModel.js");
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log("post are : =", posts);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add post
router.post("/posts", async (req, res) => {
  try {
    console.log("req body is = ", req.body);
    const post = new Post(req.body);
    const saved = await post.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete post
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
