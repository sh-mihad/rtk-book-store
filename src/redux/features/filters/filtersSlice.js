import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
    searchItems: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterChange, searchItems } = filterSlice.actions;
