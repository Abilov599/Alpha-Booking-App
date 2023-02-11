import express from "express";
import {
  deleteRoomById,
  getAllRooms,
  getRoomById,
  postRoom,
} from "./../controllers/Room.js";
const router = express.Router();

router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.post("/", postRoom);
router.delete("/:id", deleteRoomById);

export { router as RoomRoute };
