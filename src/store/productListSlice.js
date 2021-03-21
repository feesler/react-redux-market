import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    add(state, action) {
    }
  },
});

export const { add } = productListSlice.actions;
export default productListSlice.reducer;
