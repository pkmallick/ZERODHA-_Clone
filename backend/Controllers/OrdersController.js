const { OrdersModel } = require("../model/OrdersModel");

// =========================
// GET ALL ORDERS
// =========================
const getOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({});

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch orders",
      error: error.message,
    });
  }
};

// =========================
// CREATE NEW ORDER
// =========================
const createOrder = async (req, res) => {
  try {
    console.log("Incoming Order:", req.body);

    const { name, qty, price, mode } = req.body;

    // Validate request
    if (!name || !qty || price === undefined || !mode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
    });

    const savedOrder = await newOrder.save();

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to place order",
      error: error.message,
    });
  }
};

module.exports = {
  getOrders,
  createOrder,
};