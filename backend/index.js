/*require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routes
const authRoute = require("./Routes/AuthRoute");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Middleware
const { userVerification } = require("./Middlewares/AuthMiddleware");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// -------------------- MIDDLEWARES --------------------
// app.use(
//   cors({
//     origin: "http://localhost:3000", // your frontend URL
//     credentials: true,               // allow cookies
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );
app.use(cors({
  origin: "http://localhost:3001", 
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------- ROUTES --------------------

// Auth routes
app.use("/api/auth", authRoute);

// Protected route example: check user session
app.get("/api/user", userVerification, (req, res) => {
  res.status(200).json({ status: true, user: req.user });
});

// Zerodha clone routes
app.get("/api/allHoldings", userVerification, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/api/allPositions", userVerification, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

app.post("/api/newOrder", userVerification, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order placement failed" });
  }
});

// -------------------- ERROR HANDLING --------------------
// 404 route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// -------------------- DATABASE + SERVER --------------------

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   })

//   .then(() => {
//     console.log("MongoDB connected successfully");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });*/

 
  /*require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routes
const authRoute = require("./Routes/AuthRoute");///

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Middleware
const { userVerification } = require("./Middlewares/AuthMiddleware");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// -------------------- MIDDLEWARES --------------------

app.use(
cors({
origin: ["http://localhost:3000", "http://localhost:3001"], // allow both frontend ports
credentials: true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------- ROUTES --------------------

// Authentication routes
app.use("/api/auth", authRoute);

// Check logged-in user
app.get("/api/user", userVerification, (req, res) => {
res.status(200).json({ status: true, user: req.user });
});

// -------------------- ZERODHA CLONE API --------------------

// Get all holdings
app.get("/api/allHoldings", userVerification, async (req, res) => {
try {
const allHoldings = await HoldingsModel.find({});
res.status(200).json(allHoldings);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Failed to fetch holdings" });
}
});

// Get all positions
app.get("/api/allPositions", userVerification, async (req, res) => {
try {
const allPositions = await PositionsModel.find({});
res.status(200).json(allPositions);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Failed to fetch positions" });
}
});

// Place new order
app.post("/api/newOrder", userVerification, async (req, res) => {
try {
const { name, qty, price, mode } = req.body;


if (!name || !qty || !price || !mode) {
  return res.status(400).json({ message: "All fields are required" });
}

const newOrder = new OrdersModel({
  name,
  qty,
  price,
  mode,
});

await newOrder.save();

res.status(201).json({ message: "Order placed successfully" });


} catch (error) {
console.error(error);
res.status(500).json({ message: "Order placement failed" });
}
});

// -------------------- ERROR HANDLING --------------------

// 404 route
app.use((req, res) => {
res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: "Internal server error" });
});

// -------------------- DATABASE CONNECTION --------------------

mongoose
.connect(MONGO_URL)
.then(() => {
console.log("MongoDB connected successfully");


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

})
.catch((err) => {
console.error("MongoDB connection error:", err);
});*/


//FIRST EDIT
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRoute);

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(3002, () => {
      console.log("Server running on port 3002");
    });
  })
  .catch((err) => console.log(err));