import { createSlice } from "@reduxjs/toolkit";
import { IDataApi } from "../types";

export type reducState = {
  inputSearch: string;
  cards: IDataApi[];
//  activeModal: boolean;
//  formCard: TypeFormCard[];
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    addCards: (state, action) => {
      console.log(action)
    state.cards.push(action.payload)
    }
  }

})

export const {addCards} = cardSlice.actions;
export default cardSlice.reducer; 