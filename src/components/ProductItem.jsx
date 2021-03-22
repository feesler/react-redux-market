import React from 'react';
import PropTypes from 'prop-types';

function ProductItem(props) {
  const { name, price, oldPrice } = props;

  return (
    <div className="product-item">
      <div className="product-item__name">{name}</div>
      <div className="product-item__price">{price}</div>
      <div className="product-item__old-price">{oldPrice}</div>
    </div>
  )
}

ProductItem.propTypes = {
};

export default ProductItem;
