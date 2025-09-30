const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const { protect } = require("../middleware/authMiddleware");

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find().populate("author", "name").sort({ createdAt: -1 });
  res.json(blogs);
});

// Get single blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "name");
  if (blog) res.json(blog);
  else res.status(404).json({ message: "Blog not found" });
});

// Create blog
router.post("/", protect, async (req, res) => {
  const { title, content, author } = req.body;
  const blog = new Blog({ 
    title, 
    content, 
    author: req.user._id,
    authorName: author || req.user.name
  });
  await blog.save();
  res.status(201).json(blog);
});

// Update blog
router.put("/:id", protect, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.author.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  if (req.body.author) blog.authorName = req.body.author;
  await blog.save();
  res.json(blog);
});

// Delete blog
router.delete("/:id", protect, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.author.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog removed" });
});

module.exports = router;
