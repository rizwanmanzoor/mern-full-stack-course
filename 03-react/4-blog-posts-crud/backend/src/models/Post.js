const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    body: {
      type: String,
      required: [true, "Body is required"],
      trim: true,
      minlength: [5, "Body must be at least 5 characters"],
      maxlength: [5000, "Body cannot exceed 5000 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
