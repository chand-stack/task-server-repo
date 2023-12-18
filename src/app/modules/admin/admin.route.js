const express = require("express");
const { createAdminController } = require("./admin.controller");

const router = express.Router();

router.post("/", createAdminController);

module.exports = router;
