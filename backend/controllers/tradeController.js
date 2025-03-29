import { Client, ConsensusMessageSubmitTransaction } from "@hashgraph/sdk";
require("dotenv").config();

// Hedera Client Setup
const client = Client.forTestnet();
client.setOperator(process.env.HEDERA_ACCOUNT_ID, process.env.HEDERA_PRIVATE_KEY);

// Function to execute a trade
export async function executeTrade(req, res) {
  try {
    const { tradeDetails } = req.body;

    // Log trade on Hedera Consensus Service (HCS)
    const transaction = await new ConsensusMessageSubmitTransaction()
      .setTopicId("0.0.12345") // Replace with actual topic ID
      .setMessage(JSON.stringify(tradeDetails))
      .execute(client);

    const receipt = await transaction.getReceipt(client);

    res.status(200).json({
      message: "Trade executed successfully",
      transactionId: receipt.transactionId.toString(),
    });
  } catch (error) {
    console.error("Trade Execution Error:", error);
    res.status(500).json({ error: "Trade execution failed" });
  }
}
