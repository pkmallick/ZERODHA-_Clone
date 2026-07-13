// //SECOND EDIT

// const User = require("../model/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// const cookieOptions = {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "Lax",
//   maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
// };

// // ================= SIGNUP =================
// module.exports.Signup = async (req, res) => {
//   try {
//     console.log("REQ BODY =>", req.body);

//     const { email, username, password } = req.body;

//     if (!email || !username || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // check if user already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // create new user
//     const user = await User.create({ email, username, password });

//     const token = createSecretToken(user._id);

//     res.cookie("token", token, cookieOptions);

//     // remove password from response
//     const { password: pwd, ...safeUser } = user._doc;

//     res.status(201).json({
//       success: true,
//       message: "User signed up successfully",
//       user: safeUser,
//     });

//   } catch (err) {
//     console.error("SIGNUP ERROR:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// // ================= LOGIN =================
// module.exports.Login = async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // IMPORTANT: include password
//     const user = await User.findOne({ email }).select("+password");

//     if (!user) {
//       return res.status(401).json({ message: "Incorrect email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect email or password" });
//     }

//     const token = createSecretToken(user._id);

//     res.cookie("token", token, cookieOptions);

//     res.status(200).json({
//       success: true,
//       message: "User logged in successfully",
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       },
//     });

//   } catch (err) {
//     console.error("LOGIN ERROR:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// // ================= LOGOUT =================
// module.exports.Logout = (req, res) => {

//   res.cookie("token", "", {
//     httpOnly: true,
//     expires: new Date(0),
//   });

//   res.status(200).json({
//     message: "Logged out successfully",
//   });
// };


// 3rd edit
// 

const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");


const cookieOptions = {

    httpOnly:true,

    secure:false,

    sameSite:"lax",

    maxAge:
    3 * 24 * 60 * 60 * 1000
};


// ================= SIGNUP =================

const Signup = async(req,res)=>{

try{

const {
    username,
    email,
    password
}=req.body;


if(!username || !email || !password){

return res.status(400).json({

success:false,

message:"All fields required"

});

}



const exists =
await User.findOne({email});


if(exists){

return res.status(400).json({

success:false,

message:"User already exists"

});

}



const user =
await User.create({

username,
email,
password

});



const token =
createSecretToken(user._id);



res.cookie(
"token",
token,
cookieOptions
);



return res.status(201).json({

success:true,

message:"Signup successful",

user:{
id:user._id,
username:user.username,
email:user.email
}

});


}

catch(err){

console.log(err);


return res.status(500).json({

success:false,

message:"Signup failed"

});

}

};




// ================= LOGIN =================


const Login = async(req,res)=>{

try{


const {
email,
password
}=req.body;



const user =
await User.findOne({email})
.select("+password");



if(!user){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}



const match =
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}



const token =
createSecretToken(user._id);



res.cookie(
"token",
token,
cookieOptions
);



return res.status(200).json({

success:true,

message:"Login successful",

user:{
id:user._id,
username:user.username,
email:user.email
}

});


}

catch(err){

console.log(err);


res.status(500).json({

success:false,

message:"Login failed"

});

}

};



// ================= LOGOUT =================

const Logout=(req,res)=>{


res.clearCookie("token");


res.json({

success:true,

message:"Logout successful"

});
};
module.exports={
Signup,
Login,
Logout
};