const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("clients", ClientSchema);
