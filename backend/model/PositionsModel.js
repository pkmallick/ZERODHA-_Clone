const mongoose= require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");
const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { PositionsModel };