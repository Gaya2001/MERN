const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String, // Data type
    required: true, // validate
  },

  gmail: {
    type: String, // Data type
    required: true, // validate
  },

  age: {
    type: Number, // Data type
    required: true, // validate
  },

  address: {
    type: String, // Data type
    required: true, // validate
  },
});

module.exports = mongoose.model(
  "UserModel", //file name
  userSchema // function name
);
