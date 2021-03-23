import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Breadcrumd.scss';

const Breadcrumd = ({ categories }) => {
  return (
    <section className='breadcrumb'>
      {
        categories.map((category) => (
          <span className='breadcrumb__category' key={category}>
            {category}
          </span>
        ))
      }
    </section>
  );
};

Breadcrumd.propTypes = {
  categories: PropTypes.array,
};

Breadcrumd.defaultProps = {
  categories: [],
};

export default Breadcrumd;
