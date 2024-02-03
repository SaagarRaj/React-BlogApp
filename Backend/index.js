// Main file of our backend
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

// Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Databse is connected succesfully !");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port :${process.env.PORT}`);
});
