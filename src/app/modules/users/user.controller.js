const express = require("express");
const {
  createUserService,
  getAllUserService,
  deleteUserService,
  getSingleUserService,
} = require("./user.service");

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const createUser = await createUserService(userData);
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getAllUserController = async (req, res) => {
  try {
    const allUsers = await getAllUserService();
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const userDelete = await deleteUserService(id);
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: userDelete,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getSingleUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await getSingleUserService(id);
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: singleUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

module.exports = {
  createUserController,
  getAllUserController,
  deleteUserController,
  getSingleUserController,
};
