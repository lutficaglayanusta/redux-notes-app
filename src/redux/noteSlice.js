import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "message",
  initialState: {
    items: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addMessage } = slice.actions;

export default slice.reducer;
