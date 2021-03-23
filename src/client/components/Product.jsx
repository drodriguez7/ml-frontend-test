import React from 'react';
import PropTypes from 'prop-types';
import getFormatedPrice from '../utils/currency';
import '../assets/styles/components/Product.scss';

const Product = ({ data }) => {
  const {
    picture,
    title,
    price,
    location,
    condition,
  } = data;

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

Product.propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.oneOf(['ARS', 'USD']).isRequired,
      amount: PropTypes.number.isRequired,
    }),
    location: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
