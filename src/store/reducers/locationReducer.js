import { createSlice } from "@reduxjs/toolkit";

export const locationReducer = createSlice({
  name: "location",
  initialState: { locationModal: false },
  reducers: {
    openLocatinMenu: (state, action) => {
      state.locationModal = !state.locationModal;
    },
    closeLcoationMenu: (state, action) => {
      state.locationModal = false;
    },
  },
});

export const { openLocatinMenu, closeLcoationMenu } = locationReducer.actions;
export const isOpenModal = (state) => state.location.locationModal;
// export const thisUser = locationReducer.actions.currentUser;
export default locationReducer.reducer;
