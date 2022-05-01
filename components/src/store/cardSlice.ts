import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";
import CardApi from "../component/Card/CardApi";
import { IDataApi } from "../types";

type cardArray = {
  cards: IDataApi[]
}

const initialState: cardArray = {
  cards: [],
}
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: (state, action: PayloadAction<IDataApi>) => {
    state.cards = [...state.cards, action.payload]
  }
}

})

export const {addCards} = cardSlice.actions;
export default cardSlice.reducer; 