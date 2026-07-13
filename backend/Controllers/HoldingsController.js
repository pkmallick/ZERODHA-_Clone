const { HoldingsModel } = require("../model/HoldingsModel");

// Get all holdings
const getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.status(200).json(holdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch holdings",
    });
  }
};

module.exports = {
  getHoldings,
};