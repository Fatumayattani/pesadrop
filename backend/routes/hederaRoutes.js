const express = require("express");
const { airdropTokens, transferHbar } = require("../controllers/hederaController");

const router = express.Router();

// ✅ Correct API paths
router.post("/airdrop-tokens", airdropTokens);
router.post("/transfer-hbar", transferHbar);

module.exports = router;

