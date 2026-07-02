const express = require("express");

const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");

console.log("Loading:", path.resolve(__dirname, "./routes/products.js"));

const productRoutes = require("./routes/products");

console.log(productRoutes);

console.log("productRoutes =", productRoutes);
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to HimShakti Backend!");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});