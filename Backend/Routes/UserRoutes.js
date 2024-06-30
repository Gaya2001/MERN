const express = require("express");
const router = express.Router();

// insert Model

const User = require("../Model/UserModel");

// Insert User Controller

const UserController = require("../Controllers/UserControllers");

router.get("/", UserController.getAllUsers);

router.post("/", UserController.addUsers);

// export

module.exports = router;
