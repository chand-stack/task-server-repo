const express = require("express");
const AdminModel = require("./admin.model");

const createAdminService = async (data) => {
  const user = await AdminModel.create(data);
  return user;
};

module.exports = {
  createAdminService,
};
