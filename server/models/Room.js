import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    price: { type: Number, required: true },
    maxAdultCount: { type: Number, required: true },
    maxChildCount: { type: Number, required: true },
    images: { type: Array, required: true },
    comments: { type: Array, required: false },
    currentBookings: { type: Array, required: false },
  },
  { timestamps: true }
);

export const Rooms = mongoose.model("rooms", roomSchema);
