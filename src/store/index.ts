import { configureStore } from "@reduxjs/toolkit";
import {default as notesReducer} from "./slices/notesSlice";
export const store = configureStore({
  reducer:{
    notes: notesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;