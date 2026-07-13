const { PositionsModel } = require("../model/PositionsModel");

// Get all positions
const getPositions = async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.status(200).json(positions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch positions",
    });
  }
};

module.exports = {
  getPositions,
};