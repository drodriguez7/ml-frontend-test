/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import config from './config';
import itemaApi from './api/itemsApi';
import renderApp from './utils/renderer';

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

app.get('*', renderApp);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
