require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");
const holdingsRoute = require("./routes/HoldingsRoute");
const ordersRoute = require("./routes/OrdersRoute");
const positionsRoute = require("./routes/PositionsRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoute);
app.use("/api/holdings", holdingsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/positions", positionsRoute);

// Database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });