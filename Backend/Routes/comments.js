const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

// Create

router.post("/create", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.send(500).json(error);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id, // The ID of the user we want to update
      { $set: req.body }, // The update to be applied, using $set to update specific fields
      { new: true } // Options: Return the modified document instead of the original one
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted ");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET POSTS COMMENTS
router.get("/post/:postID", async (req, res) => {
  try {
    const userComment = await Comment.find({ postID: req.params.userId });
    res.status(200).json(userComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = router;
