const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");
const verifyToken = require("../verifyToken");

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // The ID of the user we want to update
      { $set: req.body }, // The update to be applied, using $set to update specific fields
      { new: true } // Options: Return the modified document instead of the original one
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.send(500).json(error);
  }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    await Post.deleteMany({ userId: req.params.id });
    await Comment.deleteMany({ userId: req.params.id });
    res.status(200).json("User has been deleted ");
  } catch (error) {
    res.send(500).json(error);
  }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    /*After retrieving the user data, the code destructures the user._doc object to extract all properties except the password. 
    This is achieved using object destructuring with the rest/spread syntax (...). The password property is excluded from the 
    extracted properties to prevent it from being sent to the client. */
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.send(500).json(error);
  }
});

//EXPORT
module.exports = router;
