import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../store/productListSlice.js';
import { changeField, resetForm, invalidateField } from '../store/productFormSlice.js';
import PhotoUploader from './PhotoUploader.jsx';

function ProductForm() {
  const { values, validation } = useSelector(state => state.productForm);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name.length) {
      dispatch(invalidateField('name'));
      return;
    }

    const price = Number(values.price);
    if (!price) {
      dispatch(invalidateField('price'));
      return;
    }

    const oldPrice = Number(values.oldPrice);
    if (values.oldPrice.length > 0 && !oldPrice) {
      dispatch(invalidateField('oldPrice'));
      return;
    }

    dispatch(addProduct({ ...values }));
  }

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetForm());
  }

  const handleChange = (e) => {
    dispatch(changeField({ name: e.target.name, value: e.target.value }));
  }

  const handleUpload = (image) => {
    dispatch(changeField({ name: 'image', value: image }));
  }

  return (
    <form className="product-form" onReset={handleReset} onSubmit={handleSubmit}>
      <h2 className="product-form__title">Новый товар</h2>
      <div>
        <label className="form-label">Изображение товара</label>
        <PhotoUploader image={values.image} onUpload={handleUpload} />
      </div>
      <div className="form-field">
        <label htmlFor="productFormName" className="form-label">Название</label>
        <input
          id="productFormName"
          className={classNames('form-control', { 'is-invalid': !validation.name })}
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        <span className="invalid-feedback">Название не может быть пустым</span>
      </div>
      <div className="form-field">
        <label htmlFor="productFormPrice" className="form-label">Актуальная цена</label>
        <input
          id="productFormPrice"
          className={classNames('form-control', { 'is-invalid': !validation.price })}
          name="price"
          type="text"
          onChange={handleChange}
          value={values.price}
        />
        <span className="invalid-feedback">Цена должна быть положительным числом</span>
      </div>
      <div className="form-field">
        <label htmlFor="productFormOldPrice" className="form-label">Старая цена</label>
        <input
          id="productFormOldPrice"
          className={classNames('form-control', { 'is-invalid': !validation.oldPrice })}
          name="oldPrice"
          type="text"
          onChange={handleChange}
          value={values.oldPrice}
        />
        <span className="invalid-feedback">Цена должна быть положительным числом</span>
      </div>
      <div className="form-footer">
        <button className="btn btn-secondary" type="reset">Очистить</button>
        <button className="btn btn-primary" type="submit">Сохранить</button>
      </div>
    </form>
  )
}

export default ProductForm;
