const express = require("express");
const ConnectDB = require("./Config/dbconn");
const Usermodel = require("./models/user.model.js");
const getallRoutes = require("./Router/user.router.js");
// Load environment variables
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home page form backend
app.get("/", (req, res) => {
  res.send("--- ME_N Home Page form backend ---");
});

// Routes
app.use("/users", getallRoutes);

// Connect mongoDB
ConnectDB(
  // Server running at Port
  app.listen(port, () => {
    console.log("Server running at port " + port);
  })
);
