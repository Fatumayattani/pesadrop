const { Client, ConsensusMessageSubmitTransaction } = require("@hashgraph/sdk");
require("dotenv").config();

// Initialize Hedera Client
const client = Client.forTestnet();
client.setOperator(process.env.HEDERA_ACCOUNT_ID, process.env.HEDERA_PRIVATE_KEY);

// Function to execute a trade
exports.executeTrade = async (req, res) => {
  try {
    const { tradeDetails } = req.body;

    if (!tradeDetails) {
      return res.status(400).json({ error: "Trade details are required" });
    }

    const transaction = await new ConsensusMessageSubmitTransaction()
      .setTopicId("0.0.5791423") // Replace with actual Hedera Topic ID
      .setMessage(JSON.stringify(tradeDetails))
      .execute(client);

    const receipt = await transaction.getReceipt(client);

    res.status(200).json({
      message: "✅ Trade executed successfully",
      transactionId: receipt.transactionId.toString(),
    });
  } catch (error) {
    console.error("❌ Trade Execution Error:", error);
    res.status(500).json({ error: "Trade execution failed", details: error.message });
  }
};
