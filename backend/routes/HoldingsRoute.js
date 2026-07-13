const express = require("express");
const router = express.Router();

const { getHoldings } = require("../Controllers/HoldingsController");

// GET /api/holdings
router.get("/", getHoldings);

module.exports = router;