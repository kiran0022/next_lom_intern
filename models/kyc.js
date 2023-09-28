import { Schema, model, models } from "mongoose";
const kycSchema = new Schema(
  {
    name: String,
    address: String,
    contact: Number,
    kyc: String,
  },
  {
    timestamps: true,
  }
);

const Kyc = models.Kyc || model("Kyc", kycSchema);

export default Kyc;
