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
const cors = require("cors");
const multer = require("multer");
const path = require("path");

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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

//image upload route
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
    // fn(null,"image1.jpg")
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  //console.log(req.body);
  res.status(200).json("Image has been uploaded successfully!");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port :${process.env.PORT}`);
});
