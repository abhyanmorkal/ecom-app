import { createSlice } from "@reduxjs/toolkit";

const fabSlice = createSlice({
  name: "fab",
  initialState: [],
  reducers: {
    addFab(state, action) {
      state.push(action.payload);
    },
    removeFab(state, action) {
      return state.filter((fab) => fab.id !== action.payload);
    },
  },
});

export const { addFab, removeFab } = fabSlice.actions;
export default fabSlice.reducer;
