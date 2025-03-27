const axios = require("axios");
require("dotenv").config();

const getTransactionHistory = async (req, res) => {
  try {
    const response = await axios.get("https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query", {
      headers: {
        Authorization: `Bearer ${process.env.MPESA_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching transaction history" });
  }
};

module.exports = { getTransactionHistory };
