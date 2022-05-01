import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import modalSlice from "./modalSlice";
import searchSlice from "./searchSlice";
//import  cardsReduser from './CardSlice';

export const store = configureStore ({
  reducer: {
    search: searchSlice,
    add: cardSlice,
    active: modalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;