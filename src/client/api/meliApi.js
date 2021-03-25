import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
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
