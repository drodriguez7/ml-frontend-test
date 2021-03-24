import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../client/routes/routes';

const setResponse = (html) => {
  return (`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Mercado Libre</title>
      <link rel="stylesheet" href="/assets/app.css" type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/assets/app.js" type="text/javascript"></script>
    </body>
    </html>
  `);
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(routes)}
    </StaticRouter>,
  );

  res.send(setResponse(html));
};

export default renderApp;
