const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    units: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProductData = mongoose.model("ProductData", productSchema);
module.exports = ProductData;
