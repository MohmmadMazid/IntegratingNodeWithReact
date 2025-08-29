const express = require("express");
const User = require("../models/userModel.js");
const mongoose = require("mongoose");
const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("users are = ", users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add user
router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    const saved = await user.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
