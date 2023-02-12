import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userAuthSlice from "../slice/userAuthSlice";

export const store = configureStore({
  reducer: { userAuthSlice: userAuthSlice },
  middleware: [thunk],
});
