const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type:String,
  },

  education: [
    { type: mongoose.Types.ObjectId, ref: "Education"},
  ],
  skill: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Skill",
    },
  ],
});

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
module.exports = JobSeeker;

// type:mongoose.Types.ObjectId,
// ref:"Education",
