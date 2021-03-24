import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('app'));
