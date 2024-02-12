import { createSlice } from "@reduxjs/toolkit";

export const addressReducer = createSlice({
  name: "address",
  initialState: { currentAddress: {} },
  reducers: {
    setAddress: (state, action) => {
      state.currentAddress = action.payload;
    },
    removeAddress: (state, action) => {
      state.currentAddress = {};
    },
  },
});

export const { setAddress, removeAddress } = addressReducer.actions;
export const currentAddress = (state) => state.address.currentAddress;
export default addressReducer.reducer;
