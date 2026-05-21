/*const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    minlength: 3,
    maxlength: 20,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Modern Mongoose async pre-save hook
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema); */

//SECOND EDIT
/*
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid email"],
  },

  username: {
    type: String,
    required: [true, "Username required"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password required"],
    minlength: 6,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// HASH PASSWORD BEFORE SAVE
userSchema.pre("save", async function (next) {
  try {

    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();

  } catch (error) {
    console.error("Hashing error:", error);
    next(error);
  }
});


// COMPARE PASSWORD METHOD
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
*/

// THIRD EDIT

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid email"],
  },

  username: {
    type: String,
    required: [true, "Username required"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password required"],
    minlength: 6,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// HASH PASSWORD BEFORE SAVE
userSchema.pre("save", async function () {

  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});


// COMPARE PASSWORD METHOD
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model("User", userSchema);
