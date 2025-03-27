const { HederaAgentKit } = require("hedera-agent-kit");
const { PrivateKey } = require("@hashgraph/sdk"); // ✅ Import PrivateKey
require("dotenv").config();

// ✅ Correct private key conversion
const privateKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);

const hederaAgent = new HederaAgentKit(
  process.env.HEDERA_ACCOUNT_ID,
  privateKey,
  process.env.HEDERA_NETWORK
);

// ✅ Airdrop Tokens
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
    console.error("Error airdropping tokens:", error);
    res.status(500).json({ error: "Error airdropping tokens" });
  }
};

// ✅ Transfer HBAR
const transferHbar = async (req, res) => {
  try {
    const { recipient, amount } = req.body;

    const result = await hederaAgent.transferHbar({
      recipient,
      amount,
    });

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error transferring HBAR:", error);
    res.status(500).json({ error: "Error transferring HBAR" });
  }
};

module.exports = { airdropTokens, transferHbar };
