const express = require("express");
const router = express.Router();
const tradeController = require("../controllers/tradeController");

// Route to execute a trade
router.post("/execute", tradeController.executeTrade);

module.exports = router;

