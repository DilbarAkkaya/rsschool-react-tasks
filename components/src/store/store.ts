import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import searchSlice from "./searchSlice";
//import  cardsReduser from './CardSlice';

export const store = configureStore ({
  reducer: {
    search: searchSlice,
    add: cardSlice,
  },
})