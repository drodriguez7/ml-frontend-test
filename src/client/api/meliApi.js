import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const fetchItems = (searchValue) => {
  return axiosInstance.get('/api/items', {
    params: {
      q: searchValue,
    },
  });
};

const fetchItem = (id) => {
  return axiosInstance.get(`/api/items/${id}`);
};

export {
  fetchItems,
  fetchItem,
};
