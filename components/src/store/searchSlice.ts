import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  inputSearch: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchName: (state, action: PayloadAction<string>) => {
      state.inputSearch = action.payload;
    },
  },
});

export const { setSearchName } = searchSlice.actions;
export default searchSlice.reducer;
