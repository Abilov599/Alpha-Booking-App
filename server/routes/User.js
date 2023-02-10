import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
} from "./../controllers/User.js";
const router = express.Router();

router.get("/api/users/", getAllUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users/register", registerUser);
router.post("/api/users/login", loginUser);
router.delete("/api/users/:id", deleteUserById);

export { router as UserRoute };
