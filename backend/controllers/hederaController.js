const { HederaAgentKit } = require("hedera-agent-kit");
require("dotenv").config();

const hederaAgent = new HederaAgentKit(
  process.env.HEDERA_ACCOUNT_ID,
  process.env.HEDERA_PRIVATE_KEY,
  process.env.HEDERA_NETWORK
);

// Airdrop Tokens
const airdropTokens = async (req, res) => {
  try {
    const { recipient, amount, tokenId } = req.body;

    const result = await hederaAgent.airdropTokens({
      recipient,
      amount,
      tokenId,
    });

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: "Error airdropping tokens" });
  }
};

// Transfer HBAR
const transferHbar = async (req, res) => {
  try {
    const { recipient, amount } = req.body;

    const result = await hederaAgent.transferHbar({
      recipient,
      amount,
    });

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: "Error transferring HBAR" });
  }
};

module.exports = { airdropTokens, transferHbar };
