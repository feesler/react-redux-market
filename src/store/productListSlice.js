import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItem = { ...action.payload };
      newItem.id = nanoid();

      return { ...state, items: [...state.items, newItem] };
    }
  },
});

export const { addProduct } = productListSlice.actions;
export default productListSlice.reducer;
