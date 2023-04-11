const mongoose = require("mongoose");
const JobSeeker = require("../Model/JobSeeker-model");
const Education = require("../Model/Education-model");

const getEducation = async (req, res) => {
  let educations;
  try {
    educations = await Education.findOne();
    console.log(education);
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ message: "Education", educations });
};
const addEducation = async (req, res) => {
  const { college, degree, graduated, graduationYear, user,registerNumber } = req.body;
  console.log(req.body, "@bodyyy");
  console.log(college,"@11111111111111111111111111111111111111111111111111111")
  let existingUser;
  try {
    existingUser = await JobSeeker.findById(user  );
    console.log("@user", existingUser);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find the user" });
  }
  const edu = new Education({
    collegeName:college,
    graduated,
    graduationYear,
    degree,
    registerNumber,
    user,
  });
  try {
    console.log(edu, "@edu");
    const session = await mongoose.startSession();
    session.startTransaction();
    await edu.save({ session });
    existingUser.education.push(edu);
    await existingUser.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }

  return res.status(200).json({ message: "education added", edu });
};


const deleteEducation=async(req,res)=>{
  const id=req.params.id;
  console.log(id,"deletet")
  let edu;
  try {
    edu=await Education.findByIdAndRemove(id).populate("user");
    await edu.user.education.pull(edu);
    await edu.user.save()
  } catch (error) {
    console.log(error)
  }
  console.log(edu,"###########################")
  if (!edu) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "succeffully deleted",edu });
}

module.exports = { getEducation, addEducation,deleteEducation };
