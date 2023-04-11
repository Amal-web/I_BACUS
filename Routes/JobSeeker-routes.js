const express = require("express");
const { signup ,getUsers,getUserById} = require("../Controller/Jobseeker-control");

const jobSeekerRouter = express.Router();

jobSeekerRouter.post("/jobseeker", signup);
jobSeekerRouter.get("/jobseeker",getUsers)
jobSeekerRouter.get("/profile/:id",getUserById)

module.exports = jobSeekerRouter;
