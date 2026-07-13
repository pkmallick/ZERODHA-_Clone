/*const router = require("express").Router();
const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

// Public routes
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

// Protected route example
router.get("/verify", userVerification, (req, res) => {
  res.status(200).json({ status: true, user: req.user });
});

module.exports = router;*/


//SECOND EDIT
/*
const router = require("express").Router();
const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.get("/verify", userVerification, (req, res) => {
  res.status(200).json({ status: true, user: req.user });
});

module.exports = router;*/

//THIRD EDIT
// const router = require("express").Router();

// const { Signup, Login, Logout } = require("../Controllers/AuthController");

// router.post("/signup", Signup);
// router.post("/login", Login);
// router.post("/logout", Logout);

// module.exports = router;

// 4th edit

const router = require("express").Router();

const {
    Signup,
    Login,
    Logout
} = require("../Controllers/AuthController");


router.post("/signup", Signup);

router.post("/login", Login);

router.post("/logout", Logout);


module.exports = router;