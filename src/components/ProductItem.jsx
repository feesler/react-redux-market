import React from 'react';
import PropTypes from 'prop-types';

const formatPrice = (value, currency = '₽') => {
  const num = Number(value);
  if (Number.isNaN(num)) {
    return null;
  }

  const ls = num.toLocaleString();
  return `${ls} ${currency}`;
}

const formatDiscount = (price, oldPrice) => {
  const d = 100 * (oldPrice - price) / oldPrice;
  return `${d.toFixed()}%`;
}

function ProductItem(props) {
  const { image, name, price, oldPrice } = props;

  const discount = (oldPrice)
    ? <div className="product-item__discount">{formatDiscount(price, oldPrice)}</div>
    : null;

  const priceFmt = formatPrice(price);
  const oldPriceFmt = formatPrice(oldPrice);
  const imgContent = (image)
    ? <img src={image} alt={name} />
    : <span>No image</span>;

  return (
    <div className="product-item">
      {discount}
      <div className="product-item__image">{imgContent}</div>
      <div className="product-item__price">
        <span className="product-item__curr-price">{priceFmt}</span>
        <span className="product-item__old-price">{oldPriceFmt}</span>
      </div>
      <div className="product-item__name">{name}</div>
    </div>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
};

export default ProductItem;
