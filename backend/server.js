require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import routes
const mpesaRoutes = require("./routes/mpesaRoutes");
const hederaRoutes = require("./routes/hederaRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/mpesa", mpesaRoutes);
app.use("/hedera", hederaRoutes);

app.get("/", (req, res) => {
  res.send("Pesadrop Backend is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
