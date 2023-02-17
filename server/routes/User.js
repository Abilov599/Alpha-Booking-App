import express from "express";
import {
  authUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
} from "./../controllers/User.js";
const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/:id", deleteUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", authUser);

export { router as UserRoute };
