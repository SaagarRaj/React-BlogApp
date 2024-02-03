const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

// Create

router.post("/create", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.send(500).json(error);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id, // The ID of the user we want to update
      { $set: req.body }, // The update to be applied, using $set to update specific fields
      { new: true } // Options: Return the modified document instead of the original one
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted ");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET POST DETAILS
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER POSTS :userID
router.get("/user/:userId", async (req, res) => {
  try {
    const userPost = await Post.find({ userId: req.params.userId });
    res.status(200).json(userPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = router;
