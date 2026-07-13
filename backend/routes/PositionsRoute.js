const express = require("express");
const router = express.Router();

const {
  getPositions,
} = require("../Controllers/PositionsController");

// GET all positions
router.get("/", getPositions);

module.exports = router;