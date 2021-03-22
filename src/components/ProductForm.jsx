import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../store/productListSlice';
import { changeField } from '../store/productFormSlice';
import PhotoUploader from './PhotoUploader';

const fileToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (e) => {
      resolve(e.currentTarget.result);
    });

    fileReader.addEventListener('error', (e) => {
      reject(new Error(e.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
}

function ProductForm(props) {
  const [image, setImage] = useState(null);
  const state = useSelector(state => state.productForm);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct({ ...state }));
  }

  const handleChange = (e) => {
    dispatch(changeField({ name: e.target.name, value: e.target.value }));
  }

  const handleUpload = (files) => {
    const file = files[0];
    setImage(file);
  }

  useEffect(() => {
    let cancelled = false;

    const loadImageData = async (file) => {
      const data = await fileToDataUrl(file);
      if (!cancelled) {
        dispatch(changeField({ name: 'image', value: data }));
      }
    }

    if (image) {
      loadImageData(image);
    }

    return () => cancelled = true;
  }, [image])

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
        <img src={state.image} />
        <PhotoUploader onUpload={handleUpload} />
      </div>
      <div className="form-field">
        <label>Название</label>
        <input name="name" type="text" onChange={handleChange} value={state.name} />
      </div>
      <div className="form-field">
        <label>Актуальная цена</label>
        <input name="price" type="text" onChange={handleChange} value={state.price} />
      </div>
      <div className="form-field">
        <label>Старая цена</label>
        <input name="oldPrice" type="text" onChange={handleChange} value={state.oldPrice} />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  )
}

ProductForm.propTypes = {
};

export default ProductForm;
