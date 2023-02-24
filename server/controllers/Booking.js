import { Bookings } from "../models/Booking.js";

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
    newBooking.save();
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
