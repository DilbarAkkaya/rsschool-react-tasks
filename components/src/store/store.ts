import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import clearSlice from "./clearSlice";
import searchSlice from "./searchSlice";
//import  cardsReduser from './CardSlice';

export const store = configureStore ({
  reducer: {
    search: searchSlice,
    add: cardSlice,
    clear: clearSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;