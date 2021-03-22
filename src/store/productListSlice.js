import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};

const createProduct = (data) => {
  const product = {
    ...data,
    id: nanoid(),
    price: Number(data.price),
    oldPrice: (data.oldPrice.length) ? Number(data.oldPrice) : null,
  };

  return product;
}

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItem = createProduct(action.payload);

      return { ...state, items: [...state.items, newItem] };
    }
  },
});

export const { addProduct } = productListSlice.actions;
export default productListSlice.reducer;
