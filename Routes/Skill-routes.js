const express = require("express");
const {deleteSkill,addSkill}=require("../Controller/Skill-control")


const skillRouter = express.Router();
skillRouter.post("/", addSkill);
skillRouter.delete("/:id", deleteSkill);


module.exports = skillRouter;
