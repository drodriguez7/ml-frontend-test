import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/static/Logo_ML.png';
import '../assets/styles/components/Searchbox.scss';

const Searchbox = ({ value, onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputRef.current.value);
  };

  return (
    <header className='header'>
      <form className='search-box' onSubmit={handleSubmit}>
        <Link to='/' className='search-box__logo'>
          <img
            alt='MercadoLibre'
            src={logo}
          />
        </Link>
        <input
          defaultValue={value}
          className='search-box__input'
          type='text'
          placeholder='Nunca dejes de buscar'
          required
          ref={inputRef}
        />
        <button
          className='search-box__button'
          aria-label='buscar'
          type='submit'
        />
      </form>
    </header>
  );
};

Searchbox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Searchbox.defaultProps = {
  value: '',
};

export default Searchbox;
