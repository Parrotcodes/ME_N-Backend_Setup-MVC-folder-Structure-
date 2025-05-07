const express = require("express");
const {
  createNewUser,
  getallUsers,
  SingleUser,
  UpdateUser,
  DeleteUser,
} = require("../Controller/user.controller");
const router = express.Router();

// Create new user
router.post("/create", createNewUser);

// Get all Users
router.get("/", getallUsers);

// Get one User
router.get("/:id", SingleUser);

// Update user info
router.put("/:id", UpdateUser);

// Delete user
router.delete("/:id", DeleteUser);

module.exports = router;
