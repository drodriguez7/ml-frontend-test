import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductCondition } from '../utils/helpers';
import getFormatedPrice from '../utils/currency';
import '../assets/styles/components/Result.scss';

const Result = ({ data }) => {
  const {
    id,
    picture,
    title,
    price,
    location,
    condition,
  } = data;

  const detailUrl = `/items/${id}`;
  const [priceIntegerPart] = getFormatedPrice(price.currency, price.amount);

  return (
    <article className='result'>
      <Link className='result__preview' to={detailUrl}>
        <img alt={title} src={picture} />
      </Link>
      <div className='result__details'>
        <div className='result__price-location'>
          <span className='result__price'>
            {priceIntegerPart}
          </span>
          <span className='result__city'>
            {location}
          </span>
        </div>
        <Link className='result__name' to={detailUrl}>
          <span>
            {title}
          </span>
          <br />
          <span>
            {getProductCondition(condition)}
          </span>
        </Link>
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
