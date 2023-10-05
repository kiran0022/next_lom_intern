import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    product: String,
    quantity: Number,
    unit: Number,
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
