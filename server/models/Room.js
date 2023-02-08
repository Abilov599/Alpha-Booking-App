import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
  {
    roomName: { type: String, required: true },
    description: { type: String, required: true },
    adress: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    maxAdultCount: { type: Number, required: true },
    maxChildCount: { type: Number, required: true },
    roomImages: { type: Array, required: true },
    roomComments: { type: Array, required: false },
  },
  { timestamps: true }
);

export const Rooms = mongoose.model("rooms", roomSchema);
