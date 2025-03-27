const express = require("express");
const { getTransactionHistory } = require("../controllers/mpesaController");

const router = express.Router();

router.get("/transaction-history", getTransactionHistory);

module.exports = router;
