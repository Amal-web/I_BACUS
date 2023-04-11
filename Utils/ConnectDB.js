require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hg0qovx.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log(err);
      console.log("DB connection Failed");
    });
}
module.exports = connectDB;
