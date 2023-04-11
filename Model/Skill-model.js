const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skill: { type: String, required: true },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "JobSeeker", /////collection name
    required: true,
  },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
