import { Users } from "./../models/User.js";

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
  try {
    const newUser = new Users(req.body);
    newUser.save();
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await new Users.findOne(req.body);
    res.send(user);
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
