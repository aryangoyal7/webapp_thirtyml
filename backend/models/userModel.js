const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    Mobile_number: {
      type: String,
      required: [true, "Please add the user Mobile_number"],
      unique: [true, "Number already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
        },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);