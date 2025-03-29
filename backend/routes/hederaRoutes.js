const express = require("express");
const { airdropToken, transferHbar } = require("../controllers/hederaController");

const router = express.Router();

// ✅ Correct API paths
router.post("/airdrop-tokens", airdropToken);
router.post("/transfer-hbar", transferHbar);

module.exports = router;

