import express from "express";
import {
  deleteRoomById,
  getAllRooms,
  getRoomById,
  postRoom,
} from "./../controllers/Room.js";
const router = express.Router();

router.get("/api/rooms", getAllRooms);
router.get("/api/rooms/:id", getRoomById);
router.post("/api/rooms", postRoom);
router.delete("/api/rooms/:id", deleteRoomById);

export { router as RoomRoute };
