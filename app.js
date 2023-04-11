require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Utils/ConnectDB");
const educationRouter = require("./Routes/Education-routes");
const jobSeekerRouter = require("./Routes/JobSeeker-routes");
const skillRouter = require("./Routes/Skill-routes");
const statusRouter=require("./Routes/Status-routes")

const app = express();

app.use(express.json());
app.use(cors());

////jobseeker////
app.use("/user/", jobSeekerRouter);
app.use("/user/profile/", educationRouter);
app.use("/user/profile/skill/", skillRouter);
app.use("/user/profile/status/",statusRouter);

connectDB();

module.exports = app;
