import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList() {
  const list = useSelector(state => state.productList);

  return (
    <div>
      {list.items.map((item) =>
        <ProductItem key={item.id} {...item} />
      )}
    </div>
  )
}

ProductList.propTypes = {
};

export default ProductList;
