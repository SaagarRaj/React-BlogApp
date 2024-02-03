// Main file of our backend
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const authRouter = require("./Routes/auth");

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
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port :${process.env.PORT}`);
});
