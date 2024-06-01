import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './productListSlice.js';

const initialValues = {
  name: '',
  price: '',
  oldPrice: '',
  image: null,
};

const initialValidation = {
  name: true,
  price: true,
  oldPrice: true,
};

const initialState = {
  values: { ...initialValues },
  validation: { ...initialValidation },
};

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    changeField(state, action) {
      const { name, value } = action.payload;
      return {
        ...state,
        values: {
          ...state.values,
          [name]: value,
        },
        validation: { ...initialValidation },
      };
    },

    resetForm() {
      return { ...initialState };
    },

    invalidateField(state, action) {
      const name = action.payload;
      return {
        ...state,
        validation: {
          ...state.validation,
          [name]: false,
        },
      };
    }
  },
  extraReducers: {
    [addProduct]: () => {
      return { ...initialState };
    },
  },
});

export const { changeField, resetForm, invalidateField } = productFormSlice.actions;
export default productFormSlice.reducer;
