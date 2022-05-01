import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isClear: false,
}

export const searchSlice = createSlice({
  name: 'clear',
  initialState,
  reducers: {
    setClear: (state, action) => {
      state.isClear = action.payload
    }
  },
})

export const {setClear} = searchSlice.actions
export default searchSlice.reducer