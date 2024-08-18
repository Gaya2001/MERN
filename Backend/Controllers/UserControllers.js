const User = require("../Model/UserModel");

//-----------------------------------Data Dsplay ----------------------------------------------------------------------------------------------

const getAllUsers = async (req, res, next) => {
  let Users;

  try {
    Users = await User.find();
  } catch (err) {
    console.log(err);
  }

  // not found

  if (!Users) {
    return res.status(400).json({ message: "User not found" });
  }

  // Display all users

  return res.status(200).json({ Users });
};

//-----------------------------------Data Insert----------------------------------------------------------------------------------------------

const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  let users;

  try {
    users = new User({ name, gmail, age, address });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  // not insert users

  if (!users) {
    return res.status(404).send({ message: "Unable to add users" });
  }

  return res.status(200).json({ users });
};

//-----------------------------------------------Get by Id----------------------------------------------------------------------------------

const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Display all users

  return res.status(200).json({ user });
};

//----------------------Update User Details -----------------------------------------------------------------------------------------------------------

const UpdateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;

  let user;

  try {
    user = await User.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      age: age,
      address: address,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(400).json({ message: "Unable to Update User Details" });
  }

  // Display all users

  return res.status(200).json({ user });
};

//----------------------Delete  User Details -----------------------------------------------------------------------------------------------------------

const DeleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(400).json({ message: "Unable to delete User Details" });
  }

  // Display all users

  return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;
