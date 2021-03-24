/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const webpack = require('webpack');
const config = require('./config');
const itemaApi = require('./api/itemsApi');

const PORT = config.port;
const app = express();
app.use(cors());

if (config.env === 'development') {
  console.log('Development config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

itemaApi(app);

app.get('*', (req, res) => {

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Mercado Libre</title>
      <link rel="stylesheet" href="assets/app.css" type="text/css">
    </head>
    <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
