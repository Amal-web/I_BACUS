const JobSeeker = require("../Model/JobSeeker-model");
const Skill = require("../Model/Skill-model");
const mongoose= require("mongoose")

const addSkill = async (req, res) => {
  console.log(req.body);
  const { skill, user } = req.body;
  console.log(skill, user);
  let existingUser;
  try {
    existingUser = await JobSeeker.findById(user);
    console.log(existingUser, "@skilllls");
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "could not find the user" });
  }
  const newSkill = new Skill({ skill,user });

  try {
    console.log(newSkill, "@new skill");
    const session = await mongoose.startSession();
    session.startTransaction();
    await newSkill.save({ session });
    existingUser.skill.push(newSkill);
    await existingUser.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }

  return res.status(200).json({ message: "skill added", newSkill });
};

const deleteSkill=async(req,res)=>{
  const skillId=req.params.id;
  console.log(skillId,"skilllIDDD")
  let existingSkill;
  try {
    existingSkill=await Skill.findByIdAndRemove(skillId).populate("user")
    await existingSkill.user.skill.pull(existingSkill)
    await existingSkill.user.save()
    console.log("exisiting skill",existingSkill)
  } catch (error) {
    console.log(error)
  }
  if (!existingSkill) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "succeffully deleted",existingSkill });
}
module.exports = {addSkill,deleteSkill};
