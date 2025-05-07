const { mongoose, Schema } = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter user name"],
    },
    age: {
      type: Number,
      required: [true, "Please enter your age"],
    },
    dob: {
      type: String,
      required: [true, "Please enter DOB"],
    },
    gender: {
      type: String,
      required: [true, "Please enter Gender"],
    },
    phone: {
      type: Number,
      required: [true, "Please enter Phone"],
    },
    image: {
      type: String,
      required: [false, "Please upload your image"],
    },
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("users", UserSchema);

module.exports = Usermodel;
