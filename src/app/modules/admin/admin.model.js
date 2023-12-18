const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
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
  gender: {
    type: String,
    required: true,
  },
  hear: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  citystate: {
    type: String,
    required: true,
  },
});

const AdminModel = model("Admin", adminSchema);

module.exports = AdminModel;
