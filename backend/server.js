const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const rateLimit = require(
  "express-rate-limit"
);

require("dotenv").config();

const app = express();

// Routes
const authRoutes = require(
  "./routes/auth"
);

console.log(
  "Loading:",
  path.resolve(
    __dirname,
    "./routes/products.js"
  )
);

const productRoutes = require(
  "./routes/products"
);

console.log(
  "productRoutes =",
  productRoutes
);

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() =>
    console.log(
      "✅ MongoDB Connected"
    )
  )
  .catch((err) =>
    console.error(
      "❌ MongoDB Connection Error:",
      err
    )
  );

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiter
const authLimiter =
  rateLimit({
    windowMs:
      60 * 1000, // 1 minute

    max: 1, // only for testing

    standardHeaders: true,
    legacyHeaders: false,

    handler: (
      req,
      res
    ) => {
      console.log(
        "⚠️ Rate limit hit:",
        req.ip
      );

      res
        .status(429)
        .json({
          message:
            "Too many attempts. Try again later.",
        });
    },
  });

// Apply limiter BEFORE routes
app.use(
  "/api/auth",
  authLimiter
);

// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/products",
  productRoutes
);

// Home Route
app.get("/", (req, res) => {
  res.send(
    "Welcome to HimShakti Backend!"
  );
});

// Port
const PORT =
  process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});