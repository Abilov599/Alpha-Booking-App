import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ky from "ky";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchData = createAsyncThunk(
  "fetchData",
  async () => await ky("https://jsonplaceholder.typicode.com/users").json()
);

const getDataSlice = createSlice({
  name: "getDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = "data not found";
      });
  },
});

export default getDataSlice.reducer;
