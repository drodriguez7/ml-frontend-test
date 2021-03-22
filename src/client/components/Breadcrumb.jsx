import React from 'react';
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

export default Breadcrumd;
