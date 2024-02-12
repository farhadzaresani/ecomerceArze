import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "users",
  initialState: { currentUser: {} },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUserData: (state, action) => {
      state.currentUser = {};
    },
  },
});

export const { setUser, removeUserData } = userReducer.actions;
export const currentUser = (state) => state.users.currentUser;
export default userReducer.reducer;
