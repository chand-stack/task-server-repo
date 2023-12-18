const express = require("express");
const { createAdminService } = require("./admin.service");

const createAdminController = async (req, res) => {
  try {
    const userData = req.body;
    const createUser = await createAdminService(userData);
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

module.exports = {
  createAdminController,
};
