const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({
  name: {
    type: String, // Data type
    required: true, // validate
  },

  email: {
    type: String, // Data type
    required: true, // validate
  },

  password: {
    type: String, // Data type
    required: true, // validate
  },
});

module.exports = mongoose.model(
  "Register", //file name
  regiSchema // function name
);
