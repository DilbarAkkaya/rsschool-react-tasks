import { configureStore } from "@reduxjs/toolkit";
import  cardsReduser from './CardSlice';

export default configureStore ({
  reducer: cardsReduser,
})