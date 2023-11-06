import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products, cartItems, createLineItem, updateLineItem, auth})=> {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
          products.map( product => {
           
            return (
              <li key={ product.id }>
                { product.name }
               
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
