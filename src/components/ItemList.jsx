import React from 'react';
import ItemDetail from './ItemDetail';
import '../styles/ItemList.css';

const ItemList = ({ products }) => {
    return (
      <div className="item-list">
        {products.map(product => (
          <ItemDetail key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default ItemList;