import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userAuthSlice from "../slice/userAuthSlice";
import getCardData from "../slice/getCardDataSlice";
import getCardDataById from "../slice/getCardDataById";
// import getAllUsers from "../slice/getAllUsers";

export const store = configureStore({
  reducer: {
    userAuthSlice: userAuthSlice,
    getCardData: getCardData,
    getCardDataById: getCardDataById,
    // getAllUsers: getAllUsers,
  },
  middleware: [thunk],
});
