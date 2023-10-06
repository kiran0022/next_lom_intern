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

// {
//   "orderID": 129,
//     "product": "Cup",
//     "quantity": 2,
//     "price": 25,
//     "expectedDelivery": "12/28/2023",  // returns--->"2023-12-27T18:30:00.000Z"
//     "status": "Returned"
// }

//date month should be addded +1 because of the 0 index starting months
