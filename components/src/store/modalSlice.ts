import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isActive: false,
};

export const modalSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setActive } = modalSlice.actions;
export default modalSlice.reducer;
