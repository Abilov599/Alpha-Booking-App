import { Bookings } from "../models/Booking.js";
import { Rooms } from "./../models/Room.js";
import { Users } from "./../models/User.js";

export const getAllBookings = async (_req, res) => {
  try {
    const data = await Bookings.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Bookings.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await Users.findById(userId);
    const data = await Bookings.find(user);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const deleteBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Bookings.findByIdAndDelete(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const postBooking = async (req, res) => {
  try {
    const newBooking = new Bookings(req.body);
    const booking = await newBooking.save();
    const roomTemp = await Rooms.findOne({ _id: req.body.room._id });
    roomTemp.currentBookings.push({
      bookingId: booking._id,
      userId: booking.user._id,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      status: booking.status,
    });

    await roomTemp.save();

    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
