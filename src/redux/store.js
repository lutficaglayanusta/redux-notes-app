import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
