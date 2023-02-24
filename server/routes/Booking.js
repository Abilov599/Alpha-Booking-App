import express from "express";
import {
  getAllBookings,
  getBookingById,
  postBooking,
} from "../controllers/Booking.js";

const router = express.Router();

router.get("/bookings", getAllBookings);
router.get("/bookings/:id", getBookingById);
router.post("/bookings", postBooking);

export { router as BookingsRoute };
