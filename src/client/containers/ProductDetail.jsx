import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumd from '../components/Breadcrumb';
import Product from '../components/Product';
import { fetchItem } from '../api/meliApi';
import Loading from '../components/Loading';
import '../assets/styles/containers/ProductDetail.scss';

const viewStatusCode = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState();

  const fetchProduct = async () => {
    try {
      setStatus(viewStatusCode.loading);
      const response = await fetchItem(id);
      setProduct(response.data.item);
      setCategories(response.data.categories);
      setStatus(viewStatusCode.success);
    } catch (error) {
      setStatus(viewStatusCode.error);
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, []);

  const getContent = () => {
    const viewStatus = {
      [viewStatusCode.loading]: () => <Loading />,
      [viewStatusCode.error]: () => <div>error</div>,
      [viewStatusCode.success]: () => <Product data={product} />,
    };

    return viewStatus[status] ? viewStatus[status]() : null;
  };

  return (
    <>
      <Breadcrumd categories={categories} />
      <section className='container product'>
        {getContent()}
      </section>
    </>
  );
};

export default ProductDetail;
