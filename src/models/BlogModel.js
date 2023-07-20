const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  // CreatedBy UserId
  author: {
    type: String,
    required: true,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  likedByUser: {
    type: Array,
  },
  date: {
    type: Date,
    index: true,
  },
});

module.exports = mongoose.model("PostInfo", postSchema);
