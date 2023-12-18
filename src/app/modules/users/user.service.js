const express = require("express");
const UserModel = require("./user.model");

const createUserService = async (data) => {
  const user = await UserModel.create(data);
  return user;
};

const getAllUserService = async () => {
  const getUser = await UserModel.find();
  console.log(getUser);
  return getUser;
};

const deleteUserService = async (id) => {
  const deleteUser = await UserModel.deleteOne({ _id: id });
  return deleteUser;
};

const getSingleUserService = async (id) => {
  const getSingleUser = await UserModel.findOne({ _id: id });
  return getSingleUser;
};

module.exports = {
  createUserService,
  getAllUserService,
  deleteUserService,
  getSingleUserService,
};
