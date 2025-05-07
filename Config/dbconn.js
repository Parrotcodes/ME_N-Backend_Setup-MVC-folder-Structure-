const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connection Error");
    process.exit(1);
  }
};

module.exports = ConnectDB;
