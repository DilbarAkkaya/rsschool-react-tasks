import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataApi } from "../types";

type cardArray = {
  formCards: IDataApi[]
}

const initialState: cardArray = {
  formCards: [],
}
const formSlice = createSlice({
  name: 'formcards',
  initialState,
  reducers: {
    setformCards: (state, action: PayloadAction<IDataApi>) => {
    state.formCards = [...state.formCards, action.payload]
  }
}

})

export const {setformCards} = formSlice.actions;
export default formSlice.reducer; 