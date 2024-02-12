import { createSlice } from "@reduxjs/toolkit";

export const basketReducer = createSlice({
  name: "basket",
  initialState: { myBasket: {} },
  reducers: {
    setBasket: (state, action) => {
      state.myBasket = action.payload;
    },
    setPriceAfterGiftCode: (state, action) => {
      state.myBasket = { ...state.myBasket, newPrice: action.payload };
    },
    removeBasket: (state, action) => {
      state.myBasket = {};
    },
  },
});

export const { setBasket, removeBasket, setPriceAfterGiftCode } =
  basketReducer.actions;
export const getBasketFromRedux = (state) => state.basket.myBasket;
export default basketReducer.reducer;
