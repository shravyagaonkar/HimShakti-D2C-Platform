const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);