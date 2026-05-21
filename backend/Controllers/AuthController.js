/*const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const cookieOptions = {
  httpOnly: true,                 // Cannot be accessed by JS
  secure: process.env.NODE_ENV === "production", // HTTPS only in production
  sameSite: "Lax",                // Protect from CSRF
  maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days in ms
};

module.exports.Signup = async (req, res) => {
  try {
   console.log("REQ BODY=>", req.body);
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user (password auto-hashed by pre-save hook)
    const user = await User.create({ email, username, password });

    // Create token
    const token = createSecretToken(user._id);

 // Set cookie

    res.cookie("token", token, cookieOptions);

    // Exclude password from response
    const { password: pwd, ...safeUser } = user._doc;

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: safeUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
  });
  res.status(200).json({ message: "Logged out successfully" });
};*/

//SECOND EDIT

const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax",
  maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
};

// ================= SIGNUP =================
module.exports.Signup = async (req, res) => {
  try {
    console.log("REQ BODY =>", req.body);

    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const user = await User.create({ email, username, password });

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    // remove password from response
    const { password: pwd, ...safeUser } = user._doc;

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: safeUser,
    });

  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


// ================= LOGIN =================
module.exports.Login = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // IMPORTANT: include password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


// ================= LOGOUT =================
module.exports.Logout = (req, res) => {

  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
};
