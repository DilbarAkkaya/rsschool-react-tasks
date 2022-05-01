import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import formSlice from "./formSlice";
import modalSlice from "./modalSlice";
import searchSlice from "./searchSlice";

export const store = configureStore ({
  reducer: {
    search: searchSlice,
    add: cardSlice,
    active: modalSlice,
    setform: formSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;