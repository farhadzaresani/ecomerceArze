import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
  name: "filters",
  initialState: { currentFilter: [] },
  reducers: {
    setFilter: (state, action) => {
      state.currentFilter = [];
      if (action?.payload?.price?.max_price) {
        state.currentFilter.push({
          text: `از ${action?.payload?.price?.min_price} تا ${action.payload?.price?.max_price} تومان`,
          id: "price",
          type: "max",
        });
      }
      if (action.payload.category.id) {
        state.currentFilter.push({
          text: action.payload.category.title,
          id: action.payload.category.id,
          type: "category",
        });
      }
    },
    removeFilter: (state, action) => {
      return {
        ...state,
        currentFilter: state.currentFilter.filter(
          (filter) => filter !== action.payload
        ),
      };
    },
  },
});

export const { setFilter, removeFilter } = filterReducer.actions;
export const getCurrentFilters = (state) => state.filters.currentFilter;
export default filterReducer.reducer;
