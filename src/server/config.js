require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  meliApiUrl: process.env.MELI_API_URL,
  isDev: process.env.ENV !== 'production',
};
