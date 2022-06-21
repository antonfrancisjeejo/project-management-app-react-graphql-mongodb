const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    status: {
      type: "String",
      enum: ["Not Started", "In Progress", "Completed"],
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clients",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", ProjectSchema);
