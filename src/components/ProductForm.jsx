import React from 'react';
import PropTypes from 'prop-types';

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
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
  }

  const handleUpload = (e) => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" onChange={handleChange} />
      <input name="price" type="text" onChange={handleChange} />
      <input name="oldPrice" type="text" onChange={handleChange} />
      <PhotoUploader onUpload={handleUpload} />
    </form>
  )
}

ProductForm.propTypes = {
};

export default ProductForm;
