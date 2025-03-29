require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route
app.get("/", (req, res) => {
  res.send("Pesadrop Backend Running...");
});

// Import and use routes
const tradeRoutes = require("./routes/trades").default;
app.use("/api/trades", tradeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
