import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    id: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
