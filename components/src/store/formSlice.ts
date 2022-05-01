import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataApi, TypeFormCard } from "../types";

type cardArray = {
  formCards: TypeFormCard[]
}

const initialState: cardArray = {
  formCards: [],
}
const formSlice = createSlice({
  name: 'formcards',
  initialState,
  reducers: {
    setformCards: (state, action: PayloadAction<TypeFormCard>) => {
    state.formCards = [...state.formCards, action.payload]
  }
}

})

export const {setformCards} = formSlice.actions;
export default formSlice.reducer; 