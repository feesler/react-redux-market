import { configureStore } from '@reduxjs/toolkit';
import productFormSlice from './productFormSlice';
import productListSlice from './productListSlice';

export default configureStore({
  reducer: {
    productForm: productFormSlice,
    productList: productListSlice,
  },
});
