import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userAuthSlice from "../slice/userAuthSlice";
import getCardData from "../slice/getCardDataSlice";

export const store = configureStore({
  reducer: { userAuthSlice: userAuthSlice, getCardData: getCardData },
  middleware: [thunk],
});
