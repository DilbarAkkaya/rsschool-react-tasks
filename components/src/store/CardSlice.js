import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  redusers: {
    addcards: (state, {payload}) => {
      state.cards = payload;

    }
  }

})

export const {addcards} = cardSlice.actions;
export const getAllCards = (state) => state.cards.cards; 
export default cardSlice.reduser;