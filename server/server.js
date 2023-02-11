import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { RoomRoute } from "./routes/Room.js";
import { UserRoute } from "./routes/User.js";
// import { multer } from "multer";

//App config
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
dotenv.config();
mongoose.set("strictQuery", false);

//Routes
app.use("/api/rooms", RoomRoute);
app.use("/api/users", UserRoute);

const PORT = process.env.PORT || 3000;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

// Connect MongoDB
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  },
  app.listen(PORT, () =>
    console.log(`Example app listening on http://localhost:${PORT}/api/users`)
  )
);
