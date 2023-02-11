import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
  authUser,
} from "./../controllers/User.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/", authUser);
router.delete("/:id", deleteUserById);

export { router as UserRoute };
