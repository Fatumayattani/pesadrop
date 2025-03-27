const express = require("express");
const { airdropTokens, transferHbar } = require("../controllers/hederaController");

const router = express.Router();

router.post("/airdrop", airdropTokens);
router.post("/transfer", transferHbar);

module.exports = router;
