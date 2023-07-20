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

  categoryIds: {
    type: Array,
    required: true,
  },

  // CreatedBy UserId
  authorId: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    index: true,
  },

  updatedAt: {
    type: Date,
    index: true,
  },
});

module.exports = mongoose.model("PostInfo", postSchema);
