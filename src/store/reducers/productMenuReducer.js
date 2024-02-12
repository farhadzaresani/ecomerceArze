import { createSlice } from "@reduxjs/toolkit";

export const productMenuReducer = createSlice({
  name: "menu",
  initialState: { currentValue: false },
  reducers: {
    openProductMenu: (state, action) => {
      state.currentValue = !state.currentValue;
    },
    closeProductMenu: (state, action) => {
      state.currentValue = false;
    },
  },
});

export const { openProductMenu, closeProductMenu } = productMenuReducer.actions;
export const currentValue = (state) => state.menu.currentValue;
// export const thisUser = productMenuReducer.actions.currentUser;
export default productMenuReducer.reducer;
