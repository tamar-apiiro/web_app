const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  creationDate: Date,
  content: String
});

module.exports = mongoose.model('Post', postSchema);
