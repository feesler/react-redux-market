import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList() {
  const list = useSelector(state => state.productList);

  return (
    <div className="product-list">
      {list.items.map((item) =>
        <ProductItem key={item.id} {...item} />
      )}
    </div>
  )
}

export default ProductList;
