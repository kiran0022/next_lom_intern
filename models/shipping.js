import { Schema, model, models } from "mongoose";

const shippingSchema = new Schema(
  {
    orderID: Number,
    product: String,
    quantity: Number,
    price: Number,
    expectedDelivery: { type: Date, default: Date.now },
    status: String,
  },
  {
    timestamps: true,
  }
);

const Shipping = models.Shipping || model("Shipping", shippingSchema);

export default Shipping;
