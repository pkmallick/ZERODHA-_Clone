/*const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Attach user to request for future use
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ status: false, message: "Invalid or expired token" });
  }
};*/

// //SECOND EDIT
// const jwt = require("jsonwebtoken");
// const User = require("../model/UserModel");

// exports.userVerification = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized: Invalid token" });
//     }

//     req.user = { id: user._id, username: user.username, email: user.email };
//     next();
//   } catch (err) {
//     console.error("AuthMiddleware error:", err);
//     return res.status(401).json({ message: "Unauthorized: Token verification failed" });
//   }
// };

const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Access denied. Please login.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found.",
      });
    }

    req.user = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    next();
  } catch (err) {
    console.error("AuthMiddleware Error:", err);

    return res.status(401).json({
      status: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = {
  userVerification,
};