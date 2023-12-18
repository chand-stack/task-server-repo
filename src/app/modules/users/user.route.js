const express = require("express");
const {
  createUserController,
  getAllUserController,
  deleteUserController,
  getSingleUserController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.delete("/:id", deleteUserController);
router.get("/:id", getSingleUserController);

module.exports = router;
