import { Rooms } from "../models/Room.js";

export const getAllRooms = async (req, res) => {
  try {
    const data = await Rooms.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Rooms.findById(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const deleteRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Rooms.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const postRoom = async (req, res) => {
  try {
    const newRoom = new Rooms(req.body);
    newRoom.save();
    res.status(500).send({ message: "SUCCESS" });
  } catch (error) {
    res.send({ message: error });
  }
};
