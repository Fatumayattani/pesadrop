const { HederaAgentKit } = require("hedera-agent-kit");
require("dotenv").config();

// ✅ Ensure Private Key is correctly formatted
const privateKey = process.env.HEDERA_PRIVATE_KEY;

const hederaAgent = new HederaAgentKit(
  process.env.HEDERA_ACCOUNT_ID,
  privateKey,
  process.env.HEDERA_NETWORK
);

// ✅ Airdrop Tokens
const airdropTokens = async (req, res) => {
  try {
    const { recipient, amount, tokenId } = req.body;

    console.log("📩 Airdropping tokens...");
    console.log(`Recipient: ${recipient}, Amount: ${amount}, Token: ${tokenId}`);

    const result = await hederaAgent.airdropToken({
      recipient,
      amount,
      tokenId,
    });

    res.json({ success: true, result });
  } catch (error) {
    console.error("❌ Airdrop Error:", error);
    res.status(500).json({ error: "Error airdropping tokens" });
  }
};

// ✅ Transfer HBAR
const transferHbar = async (req, res) => {
  try {
    const { recipient, amount } = req.body;

    console.log("🔄 Transferring HBAR...");
    console.log(`Recipient: ${recipient}, Amount: ${amount}`);

    const result = await hederaAgent.transferHbar({
      recipient,
      amount,
    });

    res.json({ success: true, result });
  } catch (error) {
    console.error("❌ Transfer Error:", error);
    res.status(500).json({ error: "Error transferring HBAR" });
  }
};

module.exports = { airdropTokens, transferHbar };
