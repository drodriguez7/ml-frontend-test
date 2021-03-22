const axios = require('axios');
const config = require('../config');

const axiosInstance = axios.default.create({
  baseURL: config.meliApiUrl,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

const get = (url, queryParams = {}) => {
  return axiosInstance.get(url, { params: queryParams });
};

module.exports = {
  get,
};
