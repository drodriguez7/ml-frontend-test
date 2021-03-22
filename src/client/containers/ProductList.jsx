import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchItems } from '../api/meliApi';
import Product from '../components/Product';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import '../assets/styles/containers/ProductList.scss';

const viewStatus = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const ProductList = () => {
  const { search } = useLocation();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState();

  const fetchProducts = async () => {
    const searchValue = new URLSearchParams(search).get('search');

    if (searchValue) {
      try {
        setStatus(viewStatus.loading);
        const response = await fetchItems(searchValue);
        setStatus(viewStatus.success);
        setItems(response.data.items);
        setCategories(response.data.categories);

      } catch (error) {
        setStatus(viewStatus.error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const getContent = () => {
    const machine = {
      [viewStatus.loading]: () => <Loading />,
      [viewStatus.error]: () => <div>error</div>,
      [viewStatus.success]: () => items.map((item) => (
        <Product key={item.id} data={item} />
      )),
    };

    return machine[status] ? machine[status]() : null;
  };

  return (
    <>
      <Breadcrumb categories={categories} />
      <section className='container product-list'>
        {getContent()}
      </section>
    </>
  );
};

export default ProductList;
