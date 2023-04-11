const express = require("express");
const { getEducation,addEducation,deleteEducation } = require("../Controller/education-control");

const educationRouter = express.Router();

educationRouter.get("/education", getEducation);
educationRouter.post("/education",addEducation)
educationRouter.delete("/education/:id",deleteEducation)

module.exports = educationRouter;
    