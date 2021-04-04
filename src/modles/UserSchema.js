const mongoose = require("mongoose");
var validator = require("validator");

const userSchema = {
  name: {
    type: "String",
    required: true,
    minLength: 3,
  },
  email: {
    type: "String",
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email invalid");
      }
    },
  },

  phone: {
    type: "number",
    required: true,
    min: 10,
  },

  message: {
    type: "string",
    required: true,
    minLength: 3,
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
