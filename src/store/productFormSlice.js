import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  price: '',
  oldPrice: '',
  image: null,
};

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    changeField(state, action) {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    addProduct() {
      return { ...initialState };
    },
    resetForm() {
      return { ...initialState };
    }
  },
});

export const { changeField } = productFormSlice.actions;
export default productFormSlice.reducer;
