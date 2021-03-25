import React from 'react';
import getFormatedPrice from '../utils/currency';
import { getProductCondition } from '../utils/helpers';
import '../assets/styles/components/Product.scss';

const getSaleInfo = (data) => {
  const soldInfo = data.sold_quantity === 1 ? 'Uno vendido' : `${data.sold_quantity} vendidos`;
  return `${getProductCondition(data.condition)} - ${soldInfo}`;
};

const Product = ({ data }) => {
  const {
    title,
    price,
    picture,
    description,
  } = data;

  const [integerPart, decimals] = getFormatedPrice(price.currency, price.amount, price.decimals);

  return (
    <>
      <img src={picture} className='product-detail__image' alt={title} />
      <div className='product__detail'>
        <div className='product__sale-info'>
          {getSaleInfo(data)}
        </div>
        <h2 className='product__name'>
          {title}
        </h2>
        <div className='product__price'>
          {integerPart}
          <sup>{decimals}</sup>
        </div>
        <button className='product__buy-button' type='button'>
          Comprar
        </button>
      </div>

      <div className='product-description'>
        <h2 className='product-description__title'>Descripción del producto</h2>

        <p className='product-description__content'>
          {description}
        </p>
      </div>
    </>
  );
};

export default Product;
