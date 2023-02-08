import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  postUser,
} from "./../controllers/User.js";
const router = express.Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", postUser);
router.delete("/api/users/:id", deleteUserById);

export { router as UserRoute };
