import React from 'react';
import '../assets/styles/components/Product.scss';
import { getFormatedPrice } from '../utils/currency';

const Product = ({ data }) => {
  const {
    picture,
    title,
    price,
    location,
    condition,
  } = data;
  console.log(getFormatedPrice(price.currency, price.amount));

  return (
    <article className='product'>
      <a className='product__preview' href='/'>
        <img alt={title} src={picture} />
      </a>
      <div className='product__details'>
        <div className='product__price-location'>
          <span className='product__price'>
            {getFormatedPrice(price.currency, price.amount)}
          </span>
          <span className='product__city'>
            {location}
          </span>
        </div>
        <a href='/' className='product__name'>
          <span>
            {title}
          </span>
          <br />
          <span>
            {condition === 'new' ? 'Nuevo' : 'Usado'}
          </span>
        </a>
      </div>
    </article>
  );
};

export default Product;
