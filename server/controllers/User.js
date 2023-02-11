import { Users } from "./../models/User.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { sign, verify } = jwt;

export const getAllUsers = async (_req, res) => {
  try {
    const data = await Users.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Users.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Users.findByIdAndDelete(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new Users({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    const { password, ...data } = result.toJSON();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ message: "Invalid cridentials" });
    }
    const token = sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    user.token = token;
    res.cookie("jwt", token, {
      httpOnly: true,
      withCredentials: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const authUser = async (req, res) => {
  const cookie = req.cookies["jwt"];
  const claims = verify(cookie, process.env.SECRET_KEY);
  if (!claims) {
    return res.status(401).send({ message: "unauthenticated" });
  }
  try {
    const user = await Users.findOne({ _id: claims._id });
    const { password, ...data } = user.toJSON();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
};
