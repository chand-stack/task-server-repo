const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  inserted: {
    type: Number,
    required: true,
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
