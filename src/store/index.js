import { configureStore } from '@reduxjs/toolkit';
import productFormSlice from './productFormSlice.js';
import productListSlice from './productListSlice.js';

export default configureStore({
  reducer: {
    productForm: productFormSlice,
    productList: productListSlice,
  },
});
