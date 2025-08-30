const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },

  author: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
