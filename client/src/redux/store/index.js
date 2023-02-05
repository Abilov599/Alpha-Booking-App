import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "../slice/dataSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: { getDataSlice: getDataSlice },
  middleware: [thunk],
});
