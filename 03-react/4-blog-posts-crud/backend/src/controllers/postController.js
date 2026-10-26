const mongoose = require("mongoose");
const Post = require("../models/Post");

// GET /api/posts — read all posts.
async function getPosts(req, res, next) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

// GET /api/posts/:id — read one post.
async function getPostById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
}

// POST /api/posts — create a post.
async function createPost(req, res, next) {
  try {
    const { title, body } = req.body;

    if (typeof title !== "string" || typeof body !== "string") {
      return res.status(400).json({ message: "Title and body must be strings" });
    }

    const post = await Post.create({ title, body });
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}

// PATCH /api/posts/:id — update provided fields.
async function updatePost(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const updates = {};
    if (req.body.title !== undefined) updates.title = req.body.title;
    if (req.body.body !== undefined) updates.body = req.body.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "Send a title or body to update" });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
}

// DELETE /api/posts/:id — delete a post.
async function deletePost(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Post deleted successfully", id: post._id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
