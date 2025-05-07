const express = require("express");
const router = express();
const Usermodel = require("../models/user.model.js");

// Create new user
const createNewUser = async (req, res) => {
  try {
    const createuser = await Usermodel.create(req.body);
    res.json("creater new user" + createuser);
  } catch (error) {}
  //   const user = req.body;
  //   console.log(user);
  res.json({ message: error.message });
};

// Get all users
const getallUsers = async (req, res) => {
  try {
    const getUsers = await Usermodel.find({});
    res
      .status(200)
      .json({ success: true, msg: "Users data fetched!", data: getUsers });
    getUsers.save();
  } catch (error) {
    res.json({ error: error.message + " data not found!" });
    process.exit(1);
  }
};

// Get one User by id
const SingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userid = await Usermodel.findById(id);

    if (!userid) {
      res.status(404).json({ msg: "user id not found!" });
    }

    res.json({ success: true, data: userid });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user data
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = req.body;
    const user = await Usermodel.findByIdAndUpdate(id, updateuser, {
      new: true, // Return the updated document
      runValidators: true, // Optional: Ensures validations are run
    });

    if (!user) {
      return res.status(400).json({ msg: "User id not found!" });
    }

    res.status(200).json({ success: true, data: user });

    //
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Usermodel.findByIdAndDelete(id);

    if (!deleteuser) {
      return res.status(404).json({ msg: "user id not found!" });
    }

    res.status(200).json({ msg: "user deleted succesfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNewUser,
  getallUsers,
  SingleUser,
  UpdateUser,
  DeleteUser,
};
