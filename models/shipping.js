import { Schema, model, models } from "mongoose";

const shippingSchema = new Schema(
  {
    product: String,
    orderValue: Number,
    quantity: Number,
    orderID: Number,
    expectedDelivery: { type: Date, default: Date.now },
    status: String,
  },
  {
    timestamps: true,
  }
);

const Shipping = models.Shipping || model("Shipping", shippingSchema);

export default Shipping;
