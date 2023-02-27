import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchCardData = createAsyncThunk("fetchCardData", async (obj) => {
  try {
    if (obj) {
      const { checkInDate, checkOutDate } =
        JSON.parse(sessionStorage.getItem("formObj")) ?? {};
      let res = await axios.get("http://localhost:8080/api/rooms").data;
      var tempRooms = [];
      var availability = false;

      console.log(tempRooms);

      for (const room of res) {
        if (room.currentBookings.length > 0) {
          for (const booking of room.currentBookings) {
            if (
              !moment(checkInDate).isBetween(
                booking.checkInDate,
                booking.checkOutDate
              ) &&
              !moment(checkOutDate).isBetween(
                booking.checkInDate,
                booking.checkOutDate
              )
            ) {
              console.log(checkInDate, checkOutDate);
              if (
                checkInDate !== booking.checkInDate &&
                checkInDate !== booking.checkOutDate &&
                checkOutDate !== booking.checkInDate &&
                checkOutDate !== booking.checkOutDate
              ) {
                availability = true;
              }
            }
          }
        }

        if (availability == true || room.currentBookings.length == 0) {
          tempRooms.push(room);
        }
      }
      return tempRooms;
    } else {
      const res = await axios.get("http://localhost:8080/api/rooms");
      return res.data;
    }
  } catch (error) {
    throw error;
  }
});

const getCardData = createSlice({
  name: "getCardData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getCardData.reducer;
