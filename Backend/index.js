// Main file of our backend
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cookie = require("cookie-parser");
app.use(cookie());
require("dotenv").config();
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const commentRoute = require("./Routes/comments");

// Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Databse is connected succesfully !");
  } catch (error) {
    console.log(error);
  }
};

// Middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port :${process.env.PORT}`);
});
