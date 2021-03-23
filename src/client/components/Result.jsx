import React from 'react';
import PropTypes from 'prop-types';
import getFormatedPrice from '../utils/currency';
import '../assets/styles/components/Result.scss';

const Result = ({ data }) => {
  const {
    picture,
    title,
    price,
    location,
    condition,
  } = data;

  return (
    <article className='result'>
      <a className='result__preview' href='/'>
        <img alt={title} src={picture} />
      </a>
      <div className='result__details'>
        <div className='result__price-location'>
          <span className='result__price'>
            {getFormatedPrice(price.currency, price.amount)}
          </span>
          <span className='result__city'>
            {location}
          </span>
        </div>
        <a href='/' className='result__name'>
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

Result.propTypes = {
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

export default Result;
