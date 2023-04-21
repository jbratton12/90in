import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setAllTrips: (_state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    addTrip: (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    },
    deleteTrip: (state, action) => {
      return state.filter((trip) => trip.id !== action.payload);
    },
    updateTrip: (state, action) => {
      const indexToUpd = state.findIndex(
        (trip) => trip.id === action.payload.id
      );
      state[indexToUpd].exitdate = action.payload.exitdate;
      state[indexToUpd].entrydate = action.payload.entrydate;
    },
  },
});

export const { addTrip, deleteTrip, updateTrip, setAllTrips } =
  tripSlice.actions;

export default tripSlice.reducer;
